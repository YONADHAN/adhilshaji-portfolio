'use client'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, ExternalLink } from 'lucide-react'

const Publications = () => {
  const publications = [
    {
      title: 'Advanced VLSI Design Methodologies for Low-Power Applications',
      journal: 'IEEE Transactions on VLSI Systems',
      year: '2024',
      doi: '10.1109/TVLSI.2024.xxxxx',
    },
    {
      title: 'Embedded System Design for IoT-Enabled Sensor Networks',
      journal: 'International Journal of Electronics',
      year: '2023',
      doi: '10.1080/XXXX.2023.xxxxx',
    },
  ]

  return (
    <section
      id='publications'
      className='py-20 px-4 bg-gradient-to-b from-background to-card'
    >
      <div className='container'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold font-orbitron mb-4'>
            Publications & <span className='text-primary'>Research</span>
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto'></div>
        </motion.div>

        <div className='max-w-4xl mx-auto space-y-6'>
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <Card className='glass-card p-6 hover:border-primary/50 transition-all group'>
                <div className='flex gap-6 items-start'>
                  {/* Icon */}
                  <div className='w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:animate-float'>
                    <FileText className='w-7 h-7 text-primary' />
                  </div>

                  {/* Content */}
                  <div className='flex-1'>
                    <h3 className='text-lg font-bold font-orbitron text-foreground mb-2 group-hover:text-primary transition-colors'>
                      {pub.title}
                    </h3>
                    <div className='flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4'>
                      <span className='flex items-center'>
                        <span className='font-semibold text-secondary mr-1'>
                          Journal:
                        </span>
                        {pub.journal}
                      </span>
                      <span className='flex items-center'>
                        <span className='font-semibold text-secondary mr-1'>
                          Year:
                        </span>
                        {pub.year}
                      </span>
                    </div>
                    <div className='flex items-center gap-4'>
                      <span className='text-xs text-muted-foreground font-mono'>
                        DOI: {pub.doi}
                      </span>
                      <Button
                        size='sm'
                        className='ml-auto bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50'
                      >
                        View Paper
                        <ExternalLink className='ml-2 w-4 h-4' />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
