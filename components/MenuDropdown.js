import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'akar-icons'

const DropDownItem = ({ item, closeMenuOnMobile, closeDropdownOnClick }) => {
  return (
    <li>
      <Link href={item.link}>
        <a
          onClick={() => {
            if (window.innerWidth < 768) {
              closeMenuOnMobile(!open)
            }

            closeDropdownOnClick(!open)
          }}
          className='inline-block w-full px-4 py-3 text-lg font-medium tracking-tighter text-gray-600 bg-gray-50 hover:bg-gray-100 hover:text-primary-700 transition-all duration-300'>
          {item.label}
        </a>
      </Link>
    </li>
  )
}

export default function MenuDropdown({ content, closeMenuOnMobile }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <li className='relative'>
      <button
        className='flex items-center gap-4 w-full text-left px-4 py-3 text-lg font-bold tracking-tighter text-gray-800 hover:text-primary-700 transition-all duration-300 '
        onClick={handleClick}>
        {content.title}
        <span>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>
      <ul
        className={
          open ? `block lg:absolute lg:right-2 lg:shadow-lg w-max` : `hidden`
        }>
        {content.innerLinks.map(link => (
          <DropDownItem
            closeMenuOnMobile={closeMenuOnMobile}
            closeDropdownOnClick={setOpen}
            item={link}
            key={link.id}
          />
        ))}
      </ul>
    </li>
  )
}
