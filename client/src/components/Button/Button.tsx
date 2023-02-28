import { InputHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'dark' | 'outline'
  children?: React.ReactNode
  className?: string
}

const Button = ({ theme, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={twMerge(
        'rounded-md px-4 py-2 text-sm font-medium',
        theme === 'dark' && 'bg-gray-800 text-white',
        theme === 'outline' && 'border border-gray-300 bg-white text-gray-700',
        rest.className
      )}
    ></button>
  )
}

export default Button
