import React from 'react'

const Project = ({ project }) => {
  return (
    <article className='my-4 w-full'>
      <figure
        className='w-full h-64 bg-center bg-cover bg-no-repeat shadow-md'
        style={{
          backgroundImage: `url(${project.image.url})`,
        }}></figure>
      <div className='mt-2 mb-6'>
        <a
          className='font-bold tracking-tighter leading-none text-xl hover:text-primary-100 hover:underline transition-all'
          href={project.projectLink}>
          {project.title}
        </a>
        <p className='uppercase font-black tracking-tight text-primary-500 text-base'>
          {project.category}
        </p>
      </div>
    </article>
  )
}

export default function ProjectsSection(props) {
  const { content } = props

  return (
    <section
      className='container mx-auto px-4 py-24 text-primary-50'
      id='projects'>
      <h2 className='font-black text-4xl tracking-tight mb-2'>
        Genial - ¿y tu trabajo?
      </h2>
      <p className='font-light text-lg mb-10 leading-relaxed'>
        Estoy seguro de que puedes esperar esto y{' '}
        <strong className='font-bold'>mucho más</strong> si trabajamos juntos.
      </p>
      <section className='lg:flex lg:gap-10'>
        {content.map(project => (
          <Project project={project} key={project.id} />
        ))}
      </section>
    </section>
  )
}
