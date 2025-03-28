import React from 'react'
import TopBar from '../components/TopBar'

function Character() {
    // Generate 24 sample cards for demonstration
    const cards = Array.from({ length: 24 }, (_, i) => ({
      id: i + 1,
      title: `Card ${i + 1}`,
      description: "This is a sample card description that shows some content.",
      content: "Card content goes here. This could be any information you want to display.",
    }))
  
    return (
      <>
      <TopBar></TopBar>
      <div className='h-16'></div>
      <main className="h-screen flex flex-col">
      <div className="flex flex-col md:flex-row h-full">
        {/* First column - fixed at top on mobile, 1/3 width on desktop */}
        <div className="w-full h-1/2  md:w-1/3 bg-gray-100 p-6 sticky top-0 z-10 md:h-screen md:overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">First Column</h2>
          <p>This column is fixed at the top on mobile and takes up 1/3 of the width on desktop.</p>
          <p className="mt-4">You can add any content here such as navigation, filters, or sidebar information.</p>
        </div>

        {/* Second column - below first on mobile, 2/3 width on desktop */}
        <div className="w-full md:w-2/3 overflow-y-auto flex-1">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Second Column</h2>

            {/* Grid of cards - 3 per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm h-full flex flex-col overflow-hidden"
                >
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-sm text-gray-500">{card.description}</p>
                  </div>
                  <div className="p-4 flex-grow">
                    <p>{card.content}</p>
                  </div>
                  <div className="p-4 border-t border-gray-200">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
    </>  
      
    )
  }
  
  export default Character
  
  