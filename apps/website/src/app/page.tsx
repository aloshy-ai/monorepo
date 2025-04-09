export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Welcome to Aloshy AI</h1>
      <p className="text-xl text-gray-600">
        Your next-generation AI platform
      </p>
      <a
        href="http://localhost:3001"
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        View Documentation
      </a>
    </main>
  )
} 