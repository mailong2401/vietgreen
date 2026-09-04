'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'playful' | 'rainbow'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  animated?: boolean
}

export default function Button({
  children,
  variant = 'playful',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'left',
  animated = true,
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-9',
    md: 'px-6 py-3 text-base h-11',
    lg: 'px-8 py-4 text-lg h-13',
    icon: 'w-11 h-11',
  }

  const variantClasses = {
    // Playful Primary - Xanh lá tươi
    playful: [
      'bg-primary',
      'text-white',
      'border-3 border-border',
      'shadow-border-md',
      ' hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-md',
      'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
      'hover:brightness-110',
      'font-bold',
      'rounded-2xl',
      'border-2',
      'tracking-wide'
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
      'font-bold',
      'rounded-2xl',
      'border-2',
      'tracking-wide',
      'animate-gradient'
    ].join(' '),

    // Primary cũ - Giữ nguyên cho tương thích
    primary: [
      'bg-primary text-background',
      'border-2 border-foreground',
      'shadow-border-md',
      ' hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-border-md',
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
        'rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 relative',
        sizeClasses[size],
        variantClasses[variant],
        animated && 'hover:scale-105 active:scale-95',
        disabled && 'opacity-50 cursor-not-allowed hover:translate-x-0 hover:translate-y-0 hover:shadow-none active:translate-x-0 active:translate-y-0 hover:scale-100 active:scale-100',
        className
      )}
    >
      {icon && iconPosition === 'left' && icon}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {variant === 'playful' && (
          <span className="inline-block animate-bounce-slow">✨</span>
        )}
        {variant === 'rainbow' && (
          <span className="inline-block animate-spin-slow">🌈</span>
        )}
      </span>
      {icon && iconPosition === 'right' && icon}
      
      {/* Playful decoration - dots */}
      {variant === 'playful' && !disabled && (
        <>
          <span className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse-slow"></span>
          <span className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full animate-pulse-slow delay-150"></span>
        </>
      )}
    </button>
  )
}
