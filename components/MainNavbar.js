import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import MenuDropdown from './MenuDropdown'
import { TextAlignJustified, Cross } from 'akar-icons'

const MenuLink = ({ content, closeMenuOnMobile }) => {
  return (
    <li>
      <Link href={content.link}>
        <a
          onClick={() => {
            if (window.innerWidth < 768) {
              closeMenuOnMobile(!open)
            }
          }}
          className='inline-block w-full px-4 py-3 text-lg font-bold tracking-tighter text-gray-800 hover:text-primary-700 transition-all duration-300'>
          {content.label}
        </a>
      </Link>
    </li>
  )
}

export default function MainNavbar(props) {
  const [open, setOpen] = useState(true)
  const { content } = props

  useEffect(() => {
    if (window.innerWidth < 768) {
      setOpen(false)
    }
  }, [])

  const menuLinksSwitch = record => {
    switch (record['__typename']) {
      case 'MenuLinkRecord':
        return (
          <MenuLink
            closeMenuOnMobile={setOpen}
            content={record}
            key={record.id}
          />
        )
      case 'MenuDropdownRecord':
        return (
          <MenuDropdown
            closeMenuOnMobile={setOpen}
            content={record}
            key={record.id}
          />
        )
      case 'default':
        return 'Hello...'
    }
  }

  return (
    <nav className='fixed w-screen lg:px-24 z-50 bg-primary-50 lg:pt-0 lg:flex lg:items-center lg:justify-between'>
      {/* For the logo ~and~ my navbar icons*/}
      <div className='w-full lg:w-auto flex items-center justify-between'>
        <Link href='/'>
          <a className='font-black text-gray-800 px-4 py-2 text-xl tracking-tighter'>
            Juan Alvarez
          </a>
        </Link>
        <button
          className='lg:hidden mr-10'
          onClick={() => {
            setOpen(!open)
          }}>
          {open ? (
            <Cross
              size={24}
              className='text-primary-700 hover:text-primary-600 transition-all'
            />
          ) : (
            <TextAlignJustified
              size={24}
              className='text-primary-700 hover:text-primary-600 transition-all'
            />
          )}
        </button>
      </div>
      <ul
        className={
          open
            ? `bg-primary-50 lg:bg-transparent shadow lg:shadow-none border-b lg:border-b-0 lg:flex`
            : `hidden`
        }>
        {content.map(item => menuLinksSwitch(item))}
      </ul>
    </nav>
  )
}
