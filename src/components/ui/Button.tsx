import React from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  size?: 'sm' | 'lg'
  children: React.ReactNode
}

export default function Button({ 
  variant = 'default', 
  size = 'lg', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:scale-[1.02]',
        variant === 'default' && 'bg-primary dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-primary/90',
        variant === 'outline' && 'bg-white dark:bg-gray-800 border border-card-border dark:border-gray-700 text-primary dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'lg' && 'px-6 py-3 text-base',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
