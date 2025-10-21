'use client'
// export default Hero
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import heroBg from '@/assets/hero-bg.jpg'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={heroBg}
          alt='Hero Background'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-background/10 via-background/5 to-background/40'></div>
      </div>

      {/* Animated Particles */}
      <div className='absolute inset-0 z-10'>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-primary rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='container relative z-20 px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='mb-6'
          >
            <span className='text-secondary text-lg font-roboto'>
              Hi, I&apos;m
            </span>
            <h1 className='text-5xl md:text-7xl font-bold font-orbitron mt-2 mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent'>
              Athil Shaji 👋
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className='space-y-4 mb-10'
          >
            <p className='text-xl md:text-2xl text-foreground font-orbitron'>
              M.Tech Student | VLSI & Microsystems
            </p>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Electronics & Communication Engineer specializing in VLSI design,
              microsystems, and embedded solutions at IIST
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <Button
              size='lg'
              className='group glow-border bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron px-8'
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
              <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-primary text-foreground hover:bg-primary/10 font-orbitron px-8'
            >
              <Download className='mr-2 h-5 w-5' />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className='w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2'>
          <div className='w-1 h-3 bg-secondary rounded-full'></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
