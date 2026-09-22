'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowRight, ChevronRight, Flame, Mic, MoonStar, Sparkles, SunMedium, X } from 'lucide-react'

export function Brand() { return <Link href="/home" className="font-serif text-2xl font-semibold tracking-tight">orator<span className="text-[var(--orange)]">.</span></Link> }
export function WaveMark({ large=false }: { large?: boolean }) { return <div className={`flex items-center gap-1 text-[var(--rust)] ${large?'h-24':'h-10'}`} aria-hidden="true">{[18,31,48,68,42,78,55,30,18].map((h,i)=><span key={i} className="wave-bar w-1.5 rounded-full bg-current" style={{height:large?`${h}px`:`${Math.max(10,h/2)}px`}} />)}</div> }
export function PrimaryButton({ children, href, className='' }: {children:React.ReactNode; href?:string; className?:string}) { const body=<span className={`inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--rust)] px-6 py-3.5 font-mono text-sm font-semibold text-[var(--cream)] hover:bg-[var(--ink)] ${className}`}>{children}<ArrowRight size={16}/></span>; return href?<Link href={href}>{body}</Link>:<button>{body}</button> }

export function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const savedTheme = localStorage.getItem('orator-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark

    setDark(initialDark)
    root.classList.toggle('dark', initialDark)
    root.style.colorScheme = initialDark ? 'dark' : 'light'
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    root.style.colorScheme = dark ? 'dark' : 'light'
    localStorage.setItem('orator-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      type="button"
      onClick={() => setDark((value) => !value)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[var(--background)] px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[.2em] text-[var(--ink)] transition hover:border-[var(--line)] hover:bg-[var(--card)]"
    >
      {dark ? <SunMedium size={14} /> : <MoonStar size={14} />}
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}

export function TopNav() { const path=usePathname(); const items=[['Home','/home'],['Progress','/progress'],['Coaches','#'],['Profile','/profile']]; return <header className="flex items-center justify-between border-b border-[var(--line)] py-5"><Brand/><nav className="hidden items-center gap-8 md:flex">{items.map(([label,href])=><Link key={label} href={href} className={`font-mono text-xs ${path===href?'font-bold text-[var(--rust)]':'text-[var(--muted)] hover:text-[var(--ink)]'}`}>{label}</Link>)}</nav><Link href="/profile" aria-label="Open profile" className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--teal)] font-mono text-xs font-bold text-[var(--cream)]">AN</Link></header> }
export function Shell({ children, narrow=false }: {children:React.ReactNode; narrow?:boolean}) { return <div className="min-h-screen bg-[var(--background)] text-[var(--text)]"><div className={`${narrow?'max-w-2xl':'max-w-5xl'} mx-auto px-6 pb-16`}>{children}</div></div> }
export function Streak() { return <div className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-3 py-1.5 font-mono text-xs font-bold text-[var(--ink)]"><Flame size={14} fill="currentColor"/> 7 day streak</div> }
export function MicButton({ label='Record' }: {label?:string}) { return <button className="group flex flex-col items-center gap-4"><span className="flex h-32 w-32 items-center justify-center rounded-full bg-[var(--rust)] text-[var(--cream)] shadow-[0_0_0_14px_rgba(117,41,15,.1)] hover:shadow-[0_0_0_20px_rgba(117,41,15,.12)]"><Mic size={42} strokeWidth={1.5}/></span><span className="font-mono text-xs text-[var(--muted)]">{label}</span></button> }
export function BackLink({ href='/home' }: {href?:string}) { return <Link href={href} className="inline-flex items-center gap-2 font-mono text-xs text-[var(--muted)] hover:text-[var(--rust)]"><X size={15}/> Exit practice</Link> }
export function SettingRow({ icon:Icon, label, value }: {icon:React.ElementType;label:string;value:string}) { return <div className="flex items-center gap-4 border-b border-[var(--line)] py-5"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(20,96,108,.12)] text-[var(--teal)]"><Icon size={17}/></span><div className="flex-1"><p className="font-mono text-sm">{label}</p><p className="mt-1 font-mono text-xs text-[var(--muted)]">{value}</p></div><ChevronRight size={17} className="text-[var(--muted)]"/></div> }
