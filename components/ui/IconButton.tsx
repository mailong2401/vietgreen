'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface IconButtonProps {
  icon: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'playful' | 'rainbow'
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

export default function IconButton({
  icon,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'playful',
  size = 'md',
  animated = true,
}: IconButtonProps) {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  }

  const variantClasses = {
    // Playful Primary - Xanh lá tươi
    playful: [
      'bg-gradient-to-r from-[#98c379] to-[#7ab358]',
      'text-white',
      'border-3 border-[#5a8a3a]',
      'shadow-[4px_4px_0px_#5a8a3a]',
      'hover:shadow-[6px_6px_0px_#5a8a3a] hover:-translate-x-[2px] hover:-translate-y-[2px]',
      'active:shadow-[2px_2px_0px_#5a8a3a] active:translate-x-[2px] active:translate-y-[2px]',
      'hover:brightness-110',
      'rounded-2xl',
      'border-2',
    ].join(' '),

    // Playful Rainbow - Cầu vồng
    rainbow: [
      'bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 via-green-400 to-yellow-400',
      'bg-[length:200%_100%]',
      'text-white',
      'border-3 border-white',
      'shadow-[4px_4px_0px_rgba(0,0,0,0.2)]',
      'hover:shadow-[6px_6px_0px_rgba(0,0,0,0.2)] hover:-translate-x-[2px] hover:-translate-y-[2px]',
      'active:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] active:translate-x-[2px] active:translate-y-[2px]',
      'hover:bg-[position:100%_0]',
      'rounded-2xl',
      'border-2',
      'animate-gradient'
    ].join(' '),

    // Primary cũ - Giữ nguyên cho tương thích
    primary: [
      'bg-primary text-background',
      'border-2 border-foreground',
      'shadow-border-md',
      'hover:bg-[#7ab358] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-md',
      'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    ].join(' '),
    
    secondary: [
      'bg-secondary text-foreground',
      'border-2 border-foreground',
      'shadow-border-md',
      'hover:bg-[#4a5060] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-md',
      'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    ].join(' '),
    
    outline: [
      'bg-transparent text-primary',
      'border-2 border-primary',
      'shadow-border-sm',
      'hover:bg-primary hover:text-background hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-sm',
      'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    ].join(' '),
    
    ghost: [
      'bg-transparent text-foreground',
      'border-2 border-transparent',
      'hover:bg-secondary hover:border-foreground hover:text-primary hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-sm',
      'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
    ].join(' '),
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'rounded-full font-medium transition-all duration-200 flex items-center justify-center relative',
        sizeClasses[size],
        variantClasses[variant],
        animated && 'hover:scale-110 active:scale-90',
        disabled && 'opacity-50 cursor-not-allowed hover:translate-x-0 hover:translate-y-0 hover:shadow-none active:translate-x-0 active:translate-y-0 hover:scale-100 active:scale-100',
        className
      )}
    >
      <span className="relative z-10 flex items-center justify-center">
        {icon}
      </span>
      
      {/* Playful decoration - dots */}
      {variant === 'playful' && !disabled && (
        <>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse-slow"></span>
          <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-pulse-slow delay-150"></span>
          <span className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse-slow delay-300"></span>
        </>
      )}
      
      {/* Rainbow decoration - stars */}
      {variant === 'rainbow' && !disabled && (
        <>
          <span className="absolute -top-2 -right-2 text-yellow-400 animate-spin-slow text-xs">✦</span>
          <span className="absolute -bottom-2 -left-2 text-pink-400 animate-bounce-slow text-xs">✦</span>
        </>
      )}
    </button>
  )
}
