import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <Head>
        <title>Welcome | Business Site</title>
        <meta name="description" content="A business landing page example using Next.js and Tailwind CSS." />
        <meta property="og:image" content="/preview.png" />
      </Head>
      <h1 className="text-4xl font-bold text-blue-700">Welcome to Our Business</h1>
      <p className="mt-4 text-lg text-gray-700">This is a practice landing page built with Next.js and Tailwind CSS.</p>
    </div>
  )
}
