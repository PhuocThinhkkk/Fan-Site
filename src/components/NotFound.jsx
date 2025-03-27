import { Link } from "react-router-dom"
import { Home, Frown, CloudLightning } from "lucide-react"

// Custom button component
const CustomButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-muted px-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 animate-pulse"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 2}s`,
              opacity: Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto text-center space-y-8">
        {/* Large 404 with animation */}
        <div className="relative">

          <div className="absolute inset-0 flex items-center justify-center">
            <CloudLightning className="h-24 w-24 text-primary animate-bounce" />
          </div>
        </div>

        {/* Message with personality */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Hey friend, we have a problem!</h2>
          <div className="flex items-center justify-center">
            <Frown className="h-5 w-5 mr-2 text-muted-foreground" />
            <p className="text-muted-foreground">The page you're looking for has vanished into the digital void.</p>
          </div>
        </div>

        {/* Fun button with custom implementation */}
        <div className="pt-4">
          <Link to={'/'} className="inline-block">
            <CustomButton className="bg-slate-500 hover:bg-slate-600 group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="flex items-center gap-2 px-6 py-2 relative z-10">
                <Home className="h-4 w-4 transition-transform group-hover:rotate-12" />
                <span>Beam me home, Scotty!</span>
              </div>
              <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

