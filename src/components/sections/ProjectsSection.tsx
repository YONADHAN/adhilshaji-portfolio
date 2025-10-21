'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Cpu, Wifi, Activity } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Advanced VLSI Design',
      category: 'VLSI Design',
      description:
        'Design and implementation of complex digital circuits using VLSI design methodologies and tools.',
      tags: ['Cadence', 'FPGA', 'RTL Design'],
      icon: Cpu,
      iconClass: 'cpu',
    },
    {
      title: 'Embedded IoT System',
      category: 'Embedded Systems',
      description:
        'Development of IoT-enabled embedded system for real-time sensor data acquisition and processing.',
      tags: ['ARM', 'Sensors', 'IoT'],
      icon: Wifi,
      iconClass: 'wifi',
    },
    {
      title: 'Microcontroller Applications',
      category: 'VLSI Design',
      description:
        'Implementation of various applications using microcontrollers for industrial automation.',
      tags: ['8051', 'PIC', 'Arduino'],
      icon: Activity,
      iconClass: 'activity',
    },
  ]

  return (
    <section className='projects-section'>
      <div className='projects-container'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='projects-header'
        >
          <h2>
            Featured <span>Projects</span>
          </h2>
          <div className='underline'></div>
          <p>
            Exploring innovation through VLSI design, embedded systems, and
            microelectronics
          </p>
        </motion.div>

        <div className='projects-grid'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className='project-card'>
                <div
                  className={`project-icon ${project.iconClass} animate-float`}
                >
                  <project.icon size={24} color='var(--foreground)' />
                </div>
                <div className='project-category'>{project.category}</div>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>
                <div className='project-tags'>
                  {project.tags.map((tag, i) => (
                    <span key={i} className='project-tag'>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='project-link'>
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
