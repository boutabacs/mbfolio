import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const handleNav = (href) => {
    setOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // height of navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-canvas/80 backdrop-blur-md border-b border-divider py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-bold tracking-tighter text-foreground group"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setOpen(false)
          }}
        >
          mohamed<span className="text-primary group-hover:animate-pulse">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleNav(l.href)}
                className="text-sm font-medium text-muted hover:text-primary transition-all duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className={`md:hidden relative z-[110] p-2 rounded-xl transition-all duration-300 ${
            open ? 'text-foreground' : 'text-muted hover:bg-surface'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[105] bg-canvas/95 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out ${
          open 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((l, index) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className={`text-3xl font-bold text-foreground hover:text-primary transition-all duration-300 transform ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {l.label}
            </button>
          ))}
          
          <div 
            className={`pt-8 border-t border-divider w-full max-w-[200px] flex justify-center transform transition-all duration-500 delay-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="text-xs text-muted uppercase tracking-widest font-semibold">
              Restons en contact
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
