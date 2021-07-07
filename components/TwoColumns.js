import React from 'react'
import marked from 'marked'

export default function TwoColumns(props) {
  const { content } = props

  return (
    <section
      id='about'
      className='container mx-auto px-4 space-y-6 lg:space-y-0 py-24 lg:flex lg:items-start lg:gap-4'>
      <article className='w-full'>
        <h2 className='mb-2 font-black tracking-tight text-4xl text-gray-800'>
          {content.firstColumnTitle}
        </h2>
        <div
          className='font-base leading-relaxed text-lg text-gray-700'
          dangerouslySetInnerHTML={{
            __html: marked(content.firstColumn),
          }}></div>
      </article>
      <article className='w-full'>
        <h3 className='mb-2 font-black tracking-tight text-3xl text-primary-600'>
          {content.secondColumnTitle}
        </h3>
        <div
          className='font-base leading-relaxed text-lg text-gray-700'
          dangerouslySetInnerHTML={{
            __html: marked(content.secondColumn),
          }}></div>
      </article>
    </section>
  )
}
