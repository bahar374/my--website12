import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white pt-20">
      <div className="text-center px-6">
        <span className="text-8xl font-bold text-champagne">404</span>
        <h1 className="text-2xl font-bold text-navy-dark mt-4 mb-3">Page Not Found</h1>
        <p className="text-navy-dark/60 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary group">
          Back to Home
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
