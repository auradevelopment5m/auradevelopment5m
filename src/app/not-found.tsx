export default function NotFound() {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-400">Page not found</p>
          <a href="/" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            Return to home
          </a>
        </div>
      </div>
    )
  }
  
  