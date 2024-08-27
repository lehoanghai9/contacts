import clsx from 'clsx'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-[768px] px-4 sm:px-6 ', className)}
      {...props}
    />
  )
}


/* border-background-600 border-l border-r */