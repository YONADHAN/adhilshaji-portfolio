'use client'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Code, Wrench, Users } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Software Tools',
      icon: Code,
      skills: [
        { name: 'Cadence Virtuoso', level: 90 },
        { name: 'MATLAB/Simulink', level: 85 },
        { name: 'Xilinx Vivado', level: 80 },
        { name: 'Python', level: 85 },
      ],
      color: 'primary',
    },
    {
      title: 'Technical Skills',
      icon: Wrench,
      skills: [
        { name: 'VLSI Design', level: 90 },
        { name: 'Embedded Systems', level: 85 },
        { name: 'Circuit Design', level: 88 },
        { name: 'PCB Design', level: 75 },
      ],
      color: 'secondary',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Technical Writing', level: 80 },
        { name: 'Project Management', level: 75 },
      ],
      color: 'accent',
    },
  ]

  return (
    <section id='skills' className='py-20 px-4'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold font-orbitron mb-4'>
            Skills & <span className='text-primary'>Expertise</span>
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto'></div>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, duration: 0.5 }}
            >
              <Card className='glass-card p-6 h-full hover:border-primary/50 transition-all'>
                {/* Header */}
                <div className='flex items-center gap-4 mb-6'>
                  <div
                    className={`w-12 h-12 rounded-lg bg-${category.color}/20 flex items-center justify-center`}
                  >
                    <category.icon
                      className={`w-6 h-6 text-${category.color}`}
                    />
                  </div>
                  <h3 className='text-xl font-bold font-orbitron text-foreground'>
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, width: 0 }}
                      whileInView={{ opacity: 1, width: '100%' }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.15 + skillIndex * 0.1,
                        duration: 0.6,
                      }}
                    >
                      <div className='space-y-2'>
                        <div className='flex justify-between text-sm'>
                          <span className='text-foreground font-medium'>
                            {skill.name}
                          </span>
                          <span className='text-primary font-orbitron'>
                            {skill.level}%
                          </span>
                        </div>
                        <div className='h-2 bg-muted rounded-full overflow-hidden'>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              delay: catIndex * 0.15 + skillIndex * 0.1 + 0.3,
                              duration: 1,
                              ease: 'easeOut',
                            }}
                            className={`h-full bg-gradient-to-r from-primary to-secondary rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
