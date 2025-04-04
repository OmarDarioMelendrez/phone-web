# Next.js 13 Firebase Starter

This is a starter template for building Next.js 13 applications with Firebase, featuring authentication and Firestore integration.

## Features

- **Next.js 15.2.3**: Latest version with App Router and server-side rendering
- **Firebase 11.4.0**: Authentication and Firestore database integration
- **TypeScript**: Full type support for enhanced development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Authentication System**: Ready-to-use email/password authentication
- **Context API**: Global authentication state management
- **Protected Routes**: Route protection for authenticated users

## Available Pages

- `/signin`: Email and password login page
- `/signup`: User registration page
- `/admin`: Protected page (only accessible to authenticated users)

## Prerequisites

- Node.js (compatible with Next.js 15.2.3)
- npm or yarn package manager

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file with your Firebase configuration:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
src/
├── app/
│   ├── admin/
│   ├── signin/
│   └── signup/
├── context/
│   └── AuthContext.tsx
├── firebase/
│   ├── auth/
│   │   ├── signIn.ts
│   │   └── signup.ts
│   ├── firestore/
│   │   ├── addData.ts
│   │   └── getData.js
│   └── config.ts
```

## Firebase Integration

The project includes:

- Authentication setup with email/password
- Firestore database operations
- Global authentication context
- Protected routes

## Dependencies

Main dependencies:

- next: 15.2.3
- react: 19.0.0
- firebase: 11.4.0
- typescript: 5.8.2

Dev dependencies:

- tailwindcss
- autoprefixer
- postcss

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

This project was created using the Next.js framework and Firebase platform.

Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
