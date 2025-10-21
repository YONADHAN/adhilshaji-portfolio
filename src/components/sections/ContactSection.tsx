'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Show success toast
    toast.success("Message sent! I'll get back to you soon.", {
      duration: 5000,
      position: 'top-right',
    })

    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:athil@example.com',
      color: 'primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'secondary',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'accent',
    },
  ]

  return (
    <section
      id='contact'
      className='py-20 px-4 bg-gradient-to-b from-background to-card relative overflow-hidden'
    >
      {/* Hot Toast Container */}
      <Toaster />

      {/* Animated Background */}
      <div className='absolute inset-0 opacity-20'>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-96 h-96 rounded-full'
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)`,
              left: `${20 * i}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className='container relative z-10'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold font-orbitron mb-4'>
            Get In <span className='text-primary'>Touch</span>
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Let&apos;s connect and discuss opportunities in VLSI, embedded
            systems, or collaboration on innovative projects
          </p>
        </motion.div>

        <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className='glass-card p-8'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label className='text-sm font-orbitron text-foreground mb-2 block'>
                    Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className='bg-input border-primary/30 focus:border-primary text-foreground'
                    placeholder='Your name'
                    required
                  />
                </div>
                <div>
                  <label className='text-sm font-orbitron text-foreground mb-2 block'>
                    Email
                  </label>
                  <Input
                    type='email'
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className='bg-input border-primary/30 focus:border-primary text-foreground'
                    placeholder='your.email@example.com'
                    required
                  />
                </div>
                <div>
                  <label className='text-sm font-orbitron text-foreground mb-2 block'>
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className='bg-input border-primary/30 focus:border-primary text-foreground min-h-[150px]'
                    placeholder='Your message...'
                    required
                  />
                </div>
                <Button
                  type='submit'
                  className='w-full glow-border bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron'
                >
                  <Send className='mr-2 h-5 w-5' />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            <Card className='glass-card p-8'>
              <h3 className='text-2xl font-bold font-orbitron text-foreground mb-6'>
                Connect With Me
              </h3>
              <div className='space-y-4'>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className='flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all group'
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-${link.color}/20 flex items-center justify-center group-hover:animate-float`}
                    >
                      <link.icon className={`w-6 h-6 text-${link.color}`} />
                    </div>
                    <div>
                      <p className='font-orbitron font-semibold text-foreground'>
                        {link.label}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Click to connect
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>

            <Card className='glass-card p-8'>
              <h3 className='text-xl font-bold font-orbitron text-foreground mb-4'>
                Location
              </h3>
              <p className='text-muted-foreground'>Trivandrum, Kerala, India</p>
              <p className='text-sm text-muted-foreground mt-2'>
                Available for remote collaboration and on-site opportunities
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
