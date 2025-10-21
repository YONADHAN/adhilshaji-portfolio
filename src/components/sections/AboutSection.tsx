'use client'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { GraduationCap, Cpu, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'M.Tech in VLSI & Microsystems at IIST',
    },
    {
      icon: Cpu,
      title: 'Specialization',
      description: 'VLSI Design & Embedded Systems',
    },
    {
      icon: Zap,
      title: 'Focus',
      description: 'Microelectronics & Innovation',
    },
  ]

  return (
    <section id='about' className='py-20 px-4'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold font-orbitron mb-4'>
            About <span className='text-primary'>Me</span>
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto'></div>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='flex justify-center'
          >
            <Card className='glass-card p-8 max-w-sm'>
              <div className='relative'>
                <div className='w-64 h-64 mx-auto rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center glow-border animate-glow-pulse'>
                  <div className='text-8xl'>👨‍💻</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            <div className='space-y-4'>
              <p className='text-lg text-foreground leading-relaxed'>
                I am a dedicated M.Tech student at the Indian Institute of Space
                Science and Technology (IIST), specializing in VLSI and
                Microsystems. My passion lies in designing and developing
                cutting-edge electronic systems and microelectronic solutions.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                With a strong foundation in Electronics and Communication
                Engineering, I focus on creating innovative solutions in VLSI
                design, embedded systems, and IoT applications. My work combines
                theoretical knowledge with practical implementation to push the
                boundaries of modern electronics.
              </p>
            </div>

            <div className='grid gap-4 mt-8'>
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className='glass-card p-4 hover:border-primary/50 transition-all cursor-pointer'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center'>
                        <item.icon className='w-6 h-6 text-primary' />
                      </div>
                      <div>
                        <h3 className='font-orbitron font-semibold text-foreground'>
                          {item.title}
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
