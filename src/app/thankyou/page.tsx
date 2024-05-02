import Link from "next/link";

const Page = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 md:px-6">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-indigo-500 dark:text-gray-50">Thank You for Your Purchase</h1>
          <p className="text-gray-600 dark:text-gray-400">
            We appreciate your business and look forward to serving you again in the future.
          </p>
          <Link
            className="inline-flex items-center justify-center px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-5000 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
            href="/"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;