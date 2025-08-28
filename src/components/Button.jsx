import React, { useState } from 'react'
import { motion } from 'framer-motion'

const variantClasses = {
  primary: 'bg-black text-white border-2 border-black',
  outline: 'bg-transparent text-black border-2 border-black',
  ghost: 'bg-transparent text-black border-2 border-black',
  success: 'bg-[--color-secondary-1] text-white border-2 border-[--color-secondary-1]',
}

const fillColors = {
  primary: 'bg-white',
  outline: 'bg-black',
  ghost: 'bg-black',
  success: 'bg-[--color-secondary-1]',
}

const textColors = {
  primary: 'text-black',
  outline: 'text-white',
  ghost: 'text-white',
  success: 'text-white',
}

const Button = ({
  children,
  variant = 'primary',
  width = 'auto',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const [hovered, setHovered] = useState(false)
  const base = 'relative overflow-hidden px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer group';
  const style = variantClasses[variant] || variantClasses.primary;
  const widthClass = width === 'full' ? 'w-full' : width === 'auto' ? 'w-auto' : width;
  const fill = fillColors[variant];
  const textOnFill = textColors[variant];

  return (
    <motion.button
      className={`${base} ${style} ${widthClass} ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.span
        className={`absolute left-0 bottom-0 w-full z-0 ${fill}`}
        initial={{ height: 0 }}
        animate={{ height: hovered ? '100%' : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
      <span className={`relative z-10 flex items-center transition-colors duration-300 ${hovered ? textOnFill : ''}`}>
        {Icon && iconPosition === 'left' && <span className="flex items-center mr-2">{<Icon />}</span>}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <span className="flex items-center ml-2  group-hover:translate-x-1 transition-transform duration-300">{<Icon />}</span>}
      </span>
    </motion.button>
  )
}

export default Button 