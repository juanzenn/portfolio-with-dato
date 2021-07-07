import React from 'react'
import Image from 'next/image'
import marked from 'marked'

export default function HeroSection(props) {
  const { content } = props

  return (
    <section className='container mx-auto px-4 space-y-10 py-24 md:grid md:grid-cols-2 md:items-center md:gap-10 md:py-12'>
      <article className='space-y-6'>
        <section className='mb-10'>
          <h2 className='text-2xl md:text-4xl text-gray-400 font-black tracking-tighter leading-none'>
            {content.title}
          </h2>
          <h1 className='text-5xl md:text-7xl text-gray-800 font-black tracking-tighter leading-none'>
            {content.subtitle}
          </h1>
        </section>
        <div
          className='tracking-wide font-light text-xl'
          dangerouslySetInnerHTML={{ __html: marked(content.body) }}></div>
        <a
          className='block bg-primary-800 font-bold tracking-tight text-white px-6 py-4 w-max md:text-lg hover:bg-primary-700 shadow-md'
          href={`${content.callToActionLink}`}>
          {content.callToActionLabel}
        </a>
      </article>
      <figure className='mx-auto w-full h-full px-4 md:p-12'>
        <Image
          src={content.image.url}
          alt={content.image.alt}
          width='800px'
          height='800px'
          layout='responsive'
        />
      </figure>
    </section>
  )
}
