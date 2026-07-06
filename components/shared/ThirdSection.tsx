import React from 'react'
const skills = ["Logo Design", "Automatin Creation", "Performance Marketing", "Funnel Creation", "Social Media Management", "Content Creation", "Creative Strategies", "Analytics and Reporting", "Campaign Management"]
function ThirdSection() {
  return (
    <section className="h-screen w-full relative flex items-end   ">

      <div className="grid grid-cols-5 w-full min-h-120">
        {skills.map((skill, idx) =>
          <div key={idx} className={`bg-secondary! p-10 flex-center border border-foreground ${idx != 0 ? "border-r-0" : ""} ${idx != 4 ? "border-b-0" : ""}`}>
            <p className="text-muted">{skill}</p>
          </div>
        )}
      </div>
      <div  className="bg-gradient-to-b from-transparent to-background w-full h-50 absolute bottom- 0 "/>
    </section>
  )
}

export default ThirdSection