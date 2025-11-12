import * as React from 'react'
import { clsx } from 'clsx'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md text-sm font-medium',
        'h-10 px-4 bg-black text-white hover:bg-black/90 px-4 py-2.5'
      )}
      {...props}
    />
  )
}
