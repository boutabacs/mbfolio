import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-divider text-center text-sm text-muted">
      <p className="flex items-center justify-center gap-1">
        All rights reserved. Made with{' '}
        <Heart size={14} className="text-accent fill-accent" /> by{' '}
        <span className="text-foreground font-medium">Mohamed BOUTABA</span>
      </p>
    </footer>
  )
}
