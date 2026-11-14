import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const LINKS = [
  ['Products', '#products'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <div className="top">
      <Logo />
      <div className="tn">
        {LINKS.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        <a className="btn gold" href="#pricing">Choose a pack ›</a>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="mm" aria-label="Mobile">
          {LINKS.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a href="#pricing" onClick={close}>Choose a pack</a>
        </nav>
      )}
    </div>
  )
}
