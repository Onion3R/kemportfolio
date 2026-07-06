import React from 'react'
const skills = ["Logo Design", "Automatin Creation", "Performance Marketing", "Funnel Creation", "Social Media Management", "Content Creation", "Creative Strategies", "Analytics and Reporting", "Campaign Management"]
function ThirdSection() {
  return (
    <section className="h-screen w-full relative grid grid-cols-5">
      {skills.map((skill, idx) => 
      <div key={idx} className="bg-secondary!">{skill}</div>
      )}
    </section>
  )
}

export default ThirdSection