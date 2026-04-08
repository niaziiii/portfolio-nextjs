export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-6">Page not found</p>
        <a href="/" className="text-primary hover:underline">
          Go home
        </a>
      </div>
    </div>
  );
}
