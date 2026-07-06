import React from 'react'
import {ArrowRight} from 'lucide-react'
import ThirdSection from '@/components/shared/ThirdSection'
import BackgroundIllustration from '@/components/shared/BackgroundIllustration'
function page() {
  return (
    <div className="relative flex items-center max-w-[1900px]" >
      <div className="absolute top-0 left-0 w-full h-100 z-[-1]">
        <img src="media/hero-highlight.png" alt="hero-highlight" className="h-full w-full relative top-0 " />
      </div>
      <main className="flex-center  flex-col h-full w-full  ">
        <nav className="w-[80%] h-[10vh] flex-center justify-end flex-between ">
          <ul className="flex gap-4">
            <li><a href="#about">Home</a></li>
            <li><a href="#services">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="bg-background border-border py-2 px-3 rounded-md text-sm">
            Download CV
          </button>
        </nav>
        <section className="h-screen w-full flex justify-center mt-[6%]   ">
          <div className="w-[80%]">
            <p>Tacloban, Philippines</p>
            <h1 className="text-7xl w-[100%] ">
              I’m <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Kemuel Rabi</span>,
              <span className="block">a Marketing and Automation</span>
              <span className="block">Specialist</span>
            </h1>

          </div>
        </section>
        <section className="h-screen w-full relative flex relative"> 
              <BackgroundIllustration className="-top-100 -right-20 b" height={1100} width={900} />
          <div className="absolute h-full w-full -top-100 ">
            <img src="media/experience-bg-highlight.png" alt="section-highlight" className=" w-full" />
          </div>
          <div className="w-[60%]  h-[90%] border-border p-20 relative z-1 bg-background">
            <h1 className="text-5xl mb-4">3 Years of Marketing Expertise </h1>
            <p className="text-lg">Helping teams eliminate guesswork, streamline operations, and build marketing engines that support predictable growth.</p>

            <img src="media/experience-card-bg.png" alt="Marketing Expertise" className=" absolute bottom-0 left-0" />
          </div>
          <div className="w-[55%]  h-[75%] border-border p-20  z-1 bg-background absolute right-0 bottom-0 flex flex-col justify-between">
            <p className="text-3xl! w-[50%]">Let’s discuss how I can add value to your business.</p>

            <button className="bg-white text-black text-lg w-[300px] py-2 px-4 rounded flex-between"><span>Let's Talk</span> <ArrowRight /></button>
          </div>
        </section>
        <ThirdSection />
        <section className="h-screen">
          fourt section
        </section>
      </main>
    </div>
  )
}

export default page