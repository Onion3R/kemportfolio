import React from 'react'

function page() {
  return (
    <div className="relative" >
      <div className="absolute top-0 left-0 w-full h-100 z-[-1]">
        <img src="media/hero-highlight.png" alt="hero-highlight" className="h-full w-full relative top-0 " />
      </div>
      <main className="flex-center h-full w-full  ">
        <section className="h-[90vh] w-full flex-center ">
          <div className="w-[80%] ">
            <p>Tacloban, Philippines</p>
            <h1 className="text-7xl w-[100%] ">
              I’m <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Kemuel Rabi</span>,
              <span className="block">a Marketing and Automation</span>
              <span className="block">Specialist</span>
            </h1>

          </div>
        </section>
      </main>
    </div>
  )
}

export default page