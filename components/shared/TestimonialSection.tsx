import { ArrowRight } from 'lucide-react'
import React from 'react'
const testimonials = [
  { description: "Kemuel's expertise in marketing and automation has transformed our business. His strategies have significantly increased our lead generation and conversion rates.", name: "John Doe", position: "CEO, Tech Solutions" },
  { description: "Working with Kemuel was a game-changer. His insights into marketing automation and CRM operations helped us streamline our processes and improve customer engagement.", name: "Jane Smith", position: "Marketing Director, Creative Agency" },
  { description: "Working with Kemuel was a game-changer. His insights into marketing automation and CRM operations helped us streamline our processes and improve customer engagement.", name: "Jane Smith", position: "Marketing Director, Creative Agency" },

]
function TestimonialSection() {
  return (
    <section className="h-screen bg-secondary w-full mt-40 p-20 relative">
      <div className="flex w-full">
        <div className="w-100  h-100 flex-between flex-col items-start!">
          <div>
            <h1 className="text-5xl mb-4">Testimonials </h1>
            <p className="text-2xl!">A few words from people who’ve trusted the journey and loved the results</p>
          </div>
          <button className="bg-black text-white text-lg w-[300px] py-2 px-4 rounded flex-between mt-20"><span>Let's Talk</span> <ArrowRight /></button>
        </div>
        <div className="flex gap-4 ml-10  min-w-0 flex-1">
          <div className="absolute w-full flex   gap-10">
            {testimonials.map((testimonial, index) =>
              <div key={index} className="w-120 h-120 bg-white max-h-100! p-10 text-black! rounded">
                <p className="text-lg! mt-10">{testimonial.description}</p>
                <p className="text-md! mt-10">{testimonial.name}</p>
                <p className="text-sm! mt-2">{testimonial.position}</p>
              </div>
            )}
          </div>
        </div>

      </div>
      <div className="bg-gradient-to-b from-transparent via-background to-background w-full h-50 absolute bottom- 0 z-2 bottom-0 left-0" />
    </section>
  )
}

export default TestimonialSection