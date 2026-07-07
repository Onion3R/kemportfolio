import React from 'react'
import { ArrowRight } from 'lucide-react'
import ThirdSection from '@/components/shared/ThirdSection'
import BackgroundIllustration from '@/components/shared/BackgroundIllustration'
function page() {
  return (
    <div className="relative flex items-center max-w-[1900px] overflow-hidden" >

      <div className="bg-primary h-[400px] w-1000 filter blur-[150px] rounded-b-full absolute -top-50 " />



      <BackgroundIllustration className="-top-100 -right-150 z-[-2]" height={900} width={1200} />
      <main className="flex-center  flex-col h-full w-full realtive z-1">
        <nav className="w-[80%] h-[10vh] flex-center justify-end flex-between ">
          <ul className="flex gap-4">
            <li><a href="#about">Home</a></li>
            <li><a href="#services">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="bg-background border-foreground py-2 px-3 rounded-md text-sm">
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
        <section className="h-screen w-full relative flex ">
          <BackgroundIllustration className="-top-50 -right-20 b" height={850} width={1200} />
          {/* <div className="absolute h-full w-full -top-100 ">
            <img src="media/experience-bg-highlight.png" alt="section-highlight" className=" w-full" />
          </div> */}
          <div className="bg-primary h-[400px] w-500 filter blur-[150px] rounded-b-full absolute top-20 " />
          <div className="w-[60%]  h-[90%] card rounded-l-none!  relative z-1 bg-background">
            <h1 className="text-5xl mb-4">3 Years of Marketing Expertise </h1>
            <p className="text-2xl!">Helping teams eliminate guesswork, streamline operations, and build marketing engines that support predictable growth.</p>

            <img src="media/experience-card-bg.png" alt="Marketing Expertise" className=" absolute bottom-0 left-0" />
          </div>
          <div className="w-[55%]  h-[75%] card rounded-r-none!   z-1 bg-background absolute right-0 bottom-0 flex flex-col justify-between">
            <p className="text-3xl! w-[50%]">Let’s discuss how I can add value to your business.</p>

            <button className="bg-white text-black text-lg w-[300px] py-2 px-4 rounded flex-between"><span>Let's Talk</span> <ArrowRight /></button>
          </div>
        </section>
        <ThirdSection />
        <section className="w-full flex items-center justify-center flex-col ">
          <div className="h-[70vh] flex justify-center flex-col w-[80%]  ">
            <h1 className="text-6xl">Explore Services</h1>
            <p className="text-2xl! w-[60%] mt-6">My services are tailored to help business elevate their brand and connect with their audience.</p>
          </div>

          <div className="space-y-50">
            <div id="first-service-container" className="w-full relative flex items-center justify-end">
              <BackgroundIllustration className="-top-50 -right-20 b" height={850} width={1200} />
              <div className="bg-primary h-[400px] w-200 filter blur-[150px] rounded-b-full absolute left-9 top-2 " />
              <div className="card w-[80%] relative z-1">
                <h2 className="text-4xl">Content &  Creative Strategy</h2>
                <p className="w-3/4 mt-5 text-2xl!">We deliver multi-platform content mapping, messaging frameworks from awareness to acquisition, ad creative direction with copy development, and short-form brand storytelling strategies.</p>

                <div className="flex gap-4 mt-30">
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                </div>
              </div>
              <div className="bg-gradient-to-b from-transparent to-background w-full h-50 absolute bottom- 0 z-2 bottom-0" />
            </div>

            <div id="second-service-container" className="w-full relative  h-screen flex items-end justify-center">
              <div className="card w-[80%] relative z-1">
                <h2 className="text-4xl">Content &  Creative Strategy</h2>
                <p className="w-3/4 mt-5 text-2xl!">We deliver multi-platform content mapping, messaging frameworks from awareness to acquisition, ad creative direction with copy development, and short-form brand storytelling strategies.</p>

                <div className="flex gap-4 mt-30">
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                </div>
              </div>
            </div>

            <div id="third-service-container" className="w-full h-screen relative flex items-end justify-end">
              <BackgroundIllustration className="-top-50 -right-20 b" height={850} width={1200} />
              <div className="bg-primary h-[400px] w-200 filter blur-[150px] rounded-b-full absolute left-9 top-2 " />
              <div className="card w-[80%] relative z-1">
                <h2 className="text-4xl">Content &  Creative Strategy</h2>
                <p className="w-3/4 mt-5 text-2xl!">We deliver multi-platform content mapping, messaging frameworks from awareness to acquisition, ad creative direction with copy development, and short-form brand storytelling strategies.</p>

                <div className="flex gap-4 mt-30">
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                </div>
              </div>
              <div className="bg-gradient-to-b from-transparent to-background w-full h-50 absolute bottom- 0 z-2 bottom-0" />
            </div>
            <div id="fourth-service-container" className="w-full h-screen relative flex items-end justify-start">
              <BackgroundIllustration className="-top-50 -right-20 b" height={850} width={1200} />
              <div className="bg-primary h-[400px] w-200 filter blur-[150px] rounded-b-full absolute left-9 top-2 " />
              <div className="card w-[80%] relative z-1">
                <h2 className="text-4xl">Content &  Creative Strategy</h2>
                <p className="w-3/4 mt-5 text-2xl!">We deliver multi-platform content mapping, messaging frameworks from awareness to acquisition, ad creative direction with copy development, and short-form brand storytelling strategies.</p>

                <div className="flex gap-4 mt-30">
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                  <img src="media/logo-1.png" alt="Content & Creative Strategy" className="w-1/3" />
                </div>
              </div>
              <div className="bg-gradient-to-b from-transparent to-background w-full h-50 absolute bottom- 0 z-2 bottom-0" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default page