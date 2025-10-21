'use client'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Rocket, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: 'Research Intern',
      organization: 'Vikram Sarabhai Space Centre (VSSC)',
      period: 'Summer 2023',
      description:
        'Contributed to space technology research projects focusing on electronic systems and sensor integration.',
      icon: Rocket,
      color: 'primary',
    },
    {
      role: 'Marketing Intern',
      organization: 'Revolt Motors',
      period: '2022',
      description:
        'Assisted in marketing strategies for electric vehicle technology and customer engagement initiatives.',
      icon: TrendingUp,
      color: 'secondary',
    },
  ]

  return (
    <section id='experience' className='py-20 px-4 bg-background'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold font-orbitron mb-4'>
            Experience & <span className='text-primary'>Internships</span>
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto'></div>
        </motion.div>

        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block'></div>

            <div className='space-y-8'>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className='relative'
                >
                  <Card className='glass-card p-6 ml-0 md:ml-20 hover:border-primary/50 transition-all'>
                    {/* Timeline Dot */}
                    <div className='absolute left-8 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block animate-glow-pulse'></div>

                    <div className='flex gap-6'>
                      {/* Icon - Fixed dynamic classes */}
                      <div
                        className={`w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          exp.color === 'primary'
                            ? 'bg-primary/20'
                            : 'bg-secondary/20'
                        }`}
                      >
                        <exp.icon
                          className={`w-8 h-8 ${
                            exp.color === 'primary'
                              ? 'text-primary'
                              : 'text-secondary'
                          }`}
                        />
                      </div>

                      {/* Content */}
                      <div className='flex-1'>
                        <div className='mb-2'>
                          <h3 className='text-xl font-bold font-orbitron text-foreground mb-1'>
                            {exp.role}
                          </h3>
                          <p className='text-primary font-semibold'>
                            {exp.organization}
                          </p>
                          <p className='text-sm text-muted-foreground'>
                            {exp.period}
                          </p>
                        </div>
                        <p className='text-foreground leading-relaxed'>
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
