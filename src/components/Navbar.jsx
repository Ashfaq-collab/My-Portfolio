import { useState } from 'react'

const links = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Education', 'education'], ['Contact', 'contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="navbar"><div className="nav-inner wrap">
    <a className="brand" href="#home" aria-label="Mohammed Ashfaq, home"><span className="brand-mark">MA<span>.</span></span><span className="brand-name">Mohammed Ashfaq</span></a>
    <button className="menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/></button>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
  </div></header>
}
