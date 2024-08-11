import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import connectToDb from '@/db/connect-to-db';
import User from '@/db/models/user-schema';

export async function POST(req: Request) {
  // Retrieve the webhook secret from environment variables
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Get the headers from the request
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // Check if all necessary headers are present
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- missing svix headers', {
      status: 400
    });
  }

  // Parse the request body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Invalid webhook signature', { status: 400 });
  }

  // Handle the webhook event
  const eventType = evt.type;

  if (eventType === 'user.created') {
    const { id, email_addresses } = evt.data;

    // Prepare the new user data
    const newUser = {
      clerkUserId: id,
      emailAddress: email_addresses[0]?.email_address || '',
    };

    try {
      // Connect to the database and save the user
      await connectToDb();
      await User.create(newUser);
      console.log('User saved to the database');
    } catch (err) {
      console.error('Error saving user to the database:', err);
      return new Response('Error saving user to the database', { status: 500 });
    }
  } else {
    // Handle other event types if needed
    console.log(`Unhandled event type: ${eventType}`);
  }

  return new Response('', { status: 200 });
}
