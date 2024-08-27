import React from 'react'

interface InputWrapperProps {
  children: React.ReactNode
}

const InputWrapper = ({ children }: InputWrapperProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="grid flex-1 gap-2">{children}</div>
    </div>
  )
}

export default InputWrapper
