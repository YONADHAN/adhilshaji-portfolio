import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='py-8 px-4 border-t border-primary/20'>
      <div className='container'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-muted-foreground text-sm'>
            © 2024 Athil Shaji. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
