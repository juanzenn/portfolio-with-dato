import Head from 'next/head'
import React from 'react'
import { indexFetch } from '../dato'

// import sections
import MainNavbar from '../components/MainNavbar'
import HeroSection from '../components/HeroSection'
import TwoColumns from '../components/TwoColumns'
import ProjectsSections from '../components/ProjectsSection'
import ServiceSections from '../components/ServiceSections'
import Footer from '../components/Footer'

export default function Home(props) {
  const {
    homepage,
    mainNavbar,
    projectCards,
    serviceCards,
    contactSections,
    footerGroups,
  } = props

  const homepageSlices = record => {
    switch (record['__typename']) {
      case 'HeroSectionRecord':
        return <HeroSection content={record} key={record.id} />
      case 'TwoColRecord':
        return <TwoColumns content={record} key={record.id} />
      case 'default':
        return 'Hello...'
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Juan Alvarez - Desarrollo Web</title>
      </Head>

      {/* My nice navbar!!!! */}
      <MainNavbar content={mainNavbar} />

      <main>
        {/* Render the first two sections */}
        {homepage.map(slice => homepageSlices(slice))}

        <article className='bg-primary-800'>
          <ProjectsSections content={projectCards} />
        </article>

        <ServiceSections
          serviceContent={serviceCards}
          contactContent={contactSections}
        />
      </main>

      <Footer content={footerGroups} />
    </React.Fragment>
  )
}

export async function getStaticProps(context) {
  const {
    homepage,
    mainNavbar,
    projectCards,
    serviceCards,
    footerGroups,
    contactSections,
  } = await indexFetch()

  return {
    props: {
      homepage,
      mainNavbar,
      projectCards,
      serviceCards,
      footerGroups,
      contactSections,
    },
  }
}
