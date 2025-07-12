# Supabase Integration Setup

This project has been integrated with Supabase for authentication, database operations, and real-time features.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project dashboard under Settings > API.

## Database Setup

### 1. Create Tables

Run the following SQL in your Supabase SQL editor:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Allow public access to contact submissions (for the contact form)
CREATE POLICY "Anyone can insert contact submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Only authenticated users can view contact submissions
CREATE POLICY "Authenticated users can view contact submissions" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');
```

### 2. Set up Authentication

1. Go to your Supabase dashboard
2. Navigate to Authentication > Settings
3. Configure your site URL and redirect URLs:
   - Site URL: `http://localhost:5173` (for development)
   - Redirect URLs: `http://localhost:5173/auth/callback`

### 3. Configure OAuth Providers (Optional)

#### Google OAuth

1. Go to Authentication > Providers
2. Enable Google provider
3. Add your Google OAuth credentials

#### GitHub OAuth

1. Go to Authentication > Providers
2. Enable GitHub provider
3. Add your GitHub OAuth credentials

### 4. Set up Storage (Optional)

Create a storage bucket for user avatars:

```sql
-- Create storage bucket for avatars
INSERT INTO storage.buckets (id, name, public) VALUES ('avatars', 'avatars', true);

-- Create storage policy for avatars
CREATE POLICY "Users can upload their own avatar" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own avatar" ON storage.objects
  FOR UPDATE WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own avatar" ON storage.objects
  FOR DELETE USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Avatars are publicly accessible" ON storage.objects
  FOR SELECT USING (bucket_id = 'avatars');
```

## Features Included

### Authentication

- Email/password authentication
- OAuth providers (Google, GitHub)
- User registration and login
- Password reset functionality
- User profile management

### Database Operations

- User profile CRUD operations
- Contact form submissions
- Real-time subscriptions
- File uploads (avatars)

### Components

- `LoginForm.vue` - User login form
- `RegisterForm.vue` - User registration form
- `ContactForm.vue` - Contact form with Supabase integration
- Updated `Header.vue` - Authentication-aware navigation

### Composables

- `useAuth.ts` - Authentication state management
- `useDatabase.ts` - Database operations

## Usage

### Authentication

```typescript
import { useAuth } from '@/composables/useAuth'

const { user, isAuthenticated, signIn, signOut } = useAuth()
```

### Database Operations

```typescript
import { useDatabase } from '@/composables/useDatabase'

const { submitContactForm, getProfile, updateProfile } = useDatabase()
```

## Development

1. Install dependencies: `npm install`
2. Create `.env` file with your Supabase credentials
3. Set up your Supabase database using the SQL above
4. Run the development server: `npm run dev`

## Production Deployment

1. Update your Supabase site URL and redirect URLs for production
2. Set up your production environment variables
3. Deploy to your preferred platform (Vercel, Netlify, etc.)

## Security Notes

- Row Level Security (RLS) is enabled on all tables
- Contact form submissions are publicly accessible for insertion
- User profiles are only accessible to the owner
- File uploads are restricted to authenticated users
