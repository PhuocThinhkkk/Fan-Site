export default function TextImagePage() {
    return (
        <div className="flex justify-center items-center w-full bg-slate-800 min-h-screen text-white">
        <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Beautiful content deserves beautiful design
              </h1>
              <p className="text-base text-muted-foreground max-w-md">
                Create stunning layouts with this simple yet powerful combination of text and imagery. Perfect for landing
                pages, product showcases, and more.
              </p>
              <button className="bg-slate-500 hover:bg-slate-600 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Learn More
              </button>
            </div>
  
            {/* Right side - Image */}
            <div className="order-first md:order-last">
              <img
                src="https://placehold.co/900x450"
                alt="Featured image"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  