# Event Ticketing Web App

## Overview

Welcome to the Event Ticketing Web App, a platform designed to simplify the process of browsing, booking, and managing tickets for various events. Whether you're an event organizer or an attendee, our app offers a seamless and efficient experience.

## Features

- **Event Browsing:** Easily explore events by category, location, date, or popularity.
- **Search Functionality:** Quickly find specific events using the search bar.
- **Event Details:** View detailed descriptions, schedules, and pricing information for each event.
- **User Roles:** Different access levels for attendees, event organizers, and administrators.
- **Booking and Confirmation:** Securely book tickets and receive instant confirmation via email.
- **Authentication:** Robust authentication system using Firebase to ensure secure access.
- **Real-time Database:** Live updates and real-time data management with Firebase.
- **Payment Integration:** Seamless payment processing through a local gateway (Chapa).

## Technologies Used

- **Next.js:** Framework for server-rendered React applications.
- **TypeScript:** Typed JavaScript for enhanced development experience.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Firebase:** Backend services including authentication, real-time database, and hosting.
- **NextAuth.js:** Authentication for Next.js applications.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- Firebase account
- Chapa payment gateway account

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/event-ticketing-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd event-ticketing-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables. Create a `.env.local` file in the root of the project and add the following:

    ```plaintext
    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
    NEXT_PUBLIC_CHAPA_API_KEY=your_chapa_api_key
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Browse Events:** Navigate through various categories and select events that interest you.

2. **View Event Details:** Click on an event to see detailed information including date, time, and pricing.
3. **Book Tickets:** Select the number of tickets and proceed to checkout.
4. **Payment and Confirmation:** Complete the payment using Chapa and receive a confirmation email with your ticket details.

## Contributing

We welcome contributions to enhance the functionality and features of our Event Ticketing Web App. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to us at [support@eventticketingapp.com](mailto:support@eventticketingapp.com).

---

Thank you for using our Event Ticketing Web App!





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
