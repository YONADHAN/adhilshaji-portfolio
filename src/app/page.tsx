import React from 'react'
import Hero from '@/components/sections/HeroSection'
import About from '@/components/sections/AboutSection'
import Projects from '@/components/sections/ProjectsSection'
import Experience from '@/components/sections/ExperienceSection'
import Publications from '@/components/sections/PublicationSection'
import Skills from '@/components/sections/SkillsSection'
import Contact from '@/components/sections/ContactSection'

const page = () => {
  return (
    <div className='bg-background min-h-screen'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Contact />
    </div>
  )
}

export default page
