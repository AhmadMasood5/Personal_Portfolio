import React from "react";
import { Button} from '../components/Button'
import { ArrowRight, ChevronDown, Download } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {AnimatedBorderButton} from '../components/AnimatedBorderButton'


const skills= [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'AWS',
  'Vercel',
  'Tailwind CSS',
  'Prisma',
  'Cypress',
  'Figma',
  'Git',
  'GitHub Actions',
  'Rest APIs',
  'Drizzle ORM',
  'Clerk Authentication',
  'Zod',
  'Zephyr for Jira',
  'Meta Ads',
  'Google Ads',
  'GTM',
  'Facebook Pixel'
]
const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/*BG Image*/}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background-80 to-background"></div>
      </div>

      {/*Green Dots*/}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation:`slow-drift ${15 + Math.random()*20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
              
            }}
          ></div>
        ))}
      </div>

      {/*Content of Hero Section*/}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/*Left Column*/}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'/>
                <span className='w-2 h-2 bg-primary rounded-full p-2'>
                Software Engineer | React Specialist
              
              </span>
            </div>

            {/*Headline for Hero Section*/}
            <div>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>Crafting <span className='text-primary glow-text'>digital</span>
              <br/>
              experiences with 
              <br/>
              <span className='font-serif italic font-normal text-white'>
                precision.
              </span>
              </h1>

              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                Hi, I'm Ahmad Masood - a software engineer specializing in React, Next.js, and TypeScript. I build scalable perfomant web applications that users love.
              </p>
            </div>

            {/*CTA*/}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}

            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground'>
                Follow me:
              </span>

              {[
                {icon: FaGithub, href: 'https://github.com/AhmadMasood5', label: 'GitHub'},
                {icon: FaLinkedin, href: 'https://www.linkedin.com/in/ahmad-masood-991173247/', label: 'LinkedIn'},
              ].map((social, index)=>(
                <a key={index} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                  <social.icon className='w-5 h-5'/>
                </a>
              ))}
            </div>
          </div>
          {/*Right Column*/}
          <div className='animate-fade-in animation-delay-500 relative'>
            {/* Profile Image*/}
            <div className='w-full max-w-md mx-auto '>
              <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse-glow'/>
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src='/my_image.png' alt='Ahmad Masood' className="w-full aspect-[4/5] object-cover rounded-2xl"/ >
                {/*Floating Badge*/}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                    <span className='text-sm font-medium'>
                      Available for work
                    </span>
                  </div>
                </div>
                {/*Stats Badge*/}

                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-2xl font-bold text-primary'>5+</div>
                  <div className='text-sm text-muted-foreground'>Years Exp.</div>
                </div>

              
              </div>
            </div>
          </div>

        </div>

        {/* Skills*/}

        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>
            Technologies I work with:
          </p>

          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee '>
             { [...skills].map((skill)=>(
  <div key={skill} className='flex-shrink-0 px-8 py-4 '>
    <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors '>
      {skill}
    </span>
  </div>
))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800'>
        <a className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary' href='#About'>
          <span className='text-xs tracking-wider uppercase'>
           Scroll
          </span>
           <ChevronDown className='w-6 h-6 animate-bounce' />
        </a>
      </div>
    </section>
  );
};



export default HeroSection;
