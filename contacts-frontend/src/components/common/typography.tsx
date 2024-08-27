import { cn } from '@/lib/utils';
import { gylsa, lexendDeca } from '@/styles/fonts';
import React from 'react'


interface H1Props {
    children?: React.ReactNode;
    className?: string; 
  }

export const H1 = ({children, className} : H1Props) => {
  return (
    <h1 className={cn("text-3xl font-medium", className)} style={gylsa.style}>
      {children}
    </h1>
  )
}


interface H2Props {
  children?: React.ReactNode;
  className?: string; 
}

export const H2 = ({children, className} : H2Props) => {
return (
  <h2 className={cn("text-2xl font-medium leading-10", className)} style={gylsa.style}>
    {children}
  </h2>
)
}

interface H3Props {
  children?: React.ReactNode;
  className?: string; 
}

export const H3 = ({children, className} : H2Props) => {
return (
  <h3 className={cn("text-base font-normal tracking-[1%]", className)} style={lexendDeca.style}>
    {children}
  </h3>
)
}

interface BodyTextProps {
  children?: React.ReactNode;
  className?: string; 
}

export const BodyText = ({children, className} : BodyTextProps) => {
return (
  <p className={cn("text-sm leading-5 font-normal tracking-[1%]", className)} style={lexendDeca.style}>
    {children}
  </p>
)
}


interface MessageProps {
  children?: React.ReactNode;
  className?: string; 
}

export const Message = ({children, className} : MessageProps) => {
return (
  <span className={cn("text-xs leading-3 font-normal tracking-[1%]", className)} style={lexendDeca.style}>
    {children}
  </span>
)
}


