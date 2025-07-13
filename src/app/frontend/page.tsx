import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  // You can fetch data here if needed
  const pageData = {
    title: 'Dynamic Frontend Demo',
    description: 'Dynamically generated metadata for Subham\'s app'
  };

  return {
    title: pageData.title,
    description: pageData.description,
    openGraph: {
      title: pageData.title,
      description: pageData.description,
    },
  };
}

export default function FrontendPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎉 Next.js is Working!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your custom route is successfully set up tested by Subham.
          </p>
          <div className="space-y-2 text-sm text-gray-500">
            <p>Route: <code className="bg-gray-100 px-2 py-1 rounded">/frontend</code></p>
            <p>File: <code className="bg-gray-100 px-2 py-1 rounded">app/frontend/page.tsx</code></p>
          </div>
        </div>
      </div>
    );
  }