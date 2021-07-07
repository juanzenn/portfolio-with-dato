import React from 'react'

export default function Footer(props) {
  const { content } = props

  return (
    <footer className='bg-primary-900 text-primary-50 py-12'>
      <section className='container mx-auto px-4 space-y-12 lg:space-y-0 lg:flex lg:gap-12'>
        {content.map(group => (
          <article className='flex flex-col space-y-2' key={group.id}>
            <h4 className='font-bold tracking-normal text-2xl'>
              {group.title}
            </h4>
            {group.content.map(item => (
              <a
                className='hover:text-primary-100'
                key={item.id}
                href={item.link}>
                {item.label}
              </a>
            ))}
          </article>
        ))}
      </section>
      <p className='text-center mt-12 font-light'>
        Todos los derechos reservados - Juan Alvarez 2021
      </p>
    </footer>
  )
}
