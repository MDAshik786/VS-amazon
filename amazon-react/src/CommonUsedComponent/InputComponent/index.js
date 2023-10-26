import React from 'react'

const Input = ({type,className,autoFocus,name,placeholder,value,onChange,onKeyDown,checked}) => {
  return (
    <input
              type={type}
              className={className}
              autoFocus={autoFocus}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
              checked={checked}
            />
  )
}

export default Input