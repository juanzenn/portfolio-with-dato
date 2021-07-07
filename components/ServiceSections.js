import React from 'react'
import Link from 'next/link'
import marked from 'marked'
import { GithubFill, TwitterFill, LinkedInFill } from 'akar-icons'

const ServiceCard = ({ service }) => {
  return (
    <article className='space-y-4 border-4 border-primary-800 lg:space-y-0 lg:flex lg:items-center lg:gap-4'>
      <figure
        className='w-full lg:w-2/3 h-48 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${service.image.url})` }}></figure>
      <section className='w-full px-2 py-1'>
        <h4 className='uppercase font-black text-primary-800 text-2xl'>
          {service.title}
        </h4>
        <div
          className='text-gray-600 font-light leading-snug text-lg mb-2'
          dangerouslySetInnerHTML={{ __html: marked(service.body) }}></div>
        <Link href={service.link}>
          <a
            className='text-primary-700 font-medium tracking-wide
          hover:text-primary-600 hover:underline'>
            Saber más...
          </a>
        </Link>
      </section>
    </article>
  )
}

export default function ServiceSections(props) {
  const { serviceContent, contactContent } = props
  // Filtering the contact data cus I'm a data modeling noob :)
  const [contactHeader] = contactContent.filter(
    item => item['__typename'] == 'ContactSectionRecord'
  )
  const [contactEmail] = contactContent.filter(
    item => item['__typename'] == 'ContactInfoRecord'
  )
  const socialIcons = contactContent.filter(
    item => item['__typename'] == 'SocialRecord'
  )
  const [quote] = contactContent.filter(
    item => item['__typename'] == 'QuoteRecord'
  )

  return (
    <section
      id='contact'
      className='container mx-auto px-4 py-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8'>
      <section className='space-y-10'>
        {/* Services */}
        <h3 className='font-black tracking-tight text-primary-800 text-4xl'>
          Servicios
        </h3>
        {serviceContent.map(service => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </section>

      {/* Contact */}
      <section className='space-y-6'>
        <header>
          <h4 className='uppercase font-black tracking-tight text-primary-700 text-lg leading-none'>
            {contactHeader.subtitle}
          </h4>
          <h3 className='font-black tracking-tight text-primary-800 text-4xl'>
            {contactHeader.title}
          </h3>
        </header>

        {/* Email */}
        <section>
          <span className='mr-2 font-bold text-primary-800 text-2xl'>
            {contactEmail.title}:
          </span>
          <a
            className='text-xl hover:text-primary-600'
            href={`mailto:${contactEmail.content}`}>
            {contactEmail.content}
          </a>
        </section>

        {/* Social Icons */}
        <section className='flex gap-6 justify-center'>
          {socialIcons.map(icon => {
            switch (icon.icon) {
              case 'github':
                return (
                  <a key={icon.id} href={icon.link}>
                    <GithubFill
                      className='text-primary-800 hover:text-primary-700'
                      size={48}
                    />
                  </a>
                )
              case 'twitter':
                return (
                  <a key={icon.id} href={icon.link}>
                    <TwitterFill
                      className='text-primary-800 hover:text-primary-700'
                      size={48}
                    />
                  </a>
                )
              case 'linkedin':
                return (
                  <a key={icon.id} href={icon.link}>
                    <LinkedInFill
                      className='text-primary-800 hover:text-primary-700'
                      size={48}
                    />
                  </a>
                )
            }
          })}
        </section>

        {/* Quote */}
        <section
          className='p-4 bg-primary-800 text-primary-50 space-y-4
        '>
          <div className='text-xl text-center font-medium'>{quote.quote}</div>
          <p className='text-right font-light'>- {quote.author}</p>
        </section>
      </section>
    </section>
  )
}
