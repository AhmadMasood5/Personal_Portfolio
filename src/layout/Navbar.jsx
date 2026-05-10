import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";

const NavlinkList = [
  {
    href: "#About",
    label: "About",
  },
  {
    href: "#Projects",
    label: "Projects",
  },
  {
    href: "#Experience",
    label: "Experience",
  },
  {
    href: "#Testimonials",
    label: "Testimonials",
  },
];
const Navbar = () => {
  const [isMobileMenuOpen,setIsMobileMenuOpen] =useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 50){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false)
      }
    })
  })
  return (
    <header className={isScrolled ? `fixed top-0 right-0 left-0 bg-background/80 backdrop-blur-md py-3 z-50` : `fixed top-0 right-0 left-0 bg-transparent py-5 z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          AM<span className="text-primary">.</span>
        </a>
        {/*Desktop Navigation*/}
        <div className="hidden md:flex items-center  gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {NavlinkList.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/*CTA Button*/}
        <div className='hidden md:block'>
          {" "}
          <Button size="sm"><a href="#Contact">Contact Me</a></Button>
        </div>

        {/*Mobile Menu*/}
        <button className='md:hidden p-2 text-foreground hover:cursor-pointer'
        onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/*Mobile Menu*/}
      {isMobileMenuOpen && (<div className='md:hidden glass-strong animate-fade-in'>
           <div className='flex flex-col gap-4 py-6 px-6 container mx-auto'>
             {NavlinkList.map((link, index)=>(
              <a key={index} onClick={()=> setIsMobileMenuOpen(false)} href={link.href}  className="text-lg text-muted-foreground hover:text-foreground py-2"
            >{link.label}</a>
            ))}
            <Button ><a href="#Contact">Contact Me</a></Button>
           </div>
      </div>)}
    </header>
  );
};

export default Navbar;
