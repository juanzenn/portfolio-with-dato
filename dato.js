const fetch = require('node-fetch')

const APItoken = process.env.DATO_CMS_TOKEN

// This file contains all my queries for DATOCMS
// Boiler plate for fetching
const fetchQuery = async queryString => {
  const data = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${APItoken}`,
    },
    body: JSON.stringify({
      query: queryString,
    }),
  })

  return data
}

// Fetch for Homepage Content
const fetchHomepage = async () => {
  const queryString = `{
    homepage(locale: en) {
      homepageContent {
        ... on HeroSectionRecord {
          id
          __typename
          title
          subtitle
          body
          callToActionLink
          callToActionLabel
          image {
            url
            alt
          }
        }
        ... on TwoColRecord {
          id
          __typename
          firstColumnTitle
          firstColumn
          secondColumnTitle
          secondColumn
        }
      }
    }
  }  
  `
  const homepageData = await fetchQuery(queryString)
  const homepage = await homepageData.json()
  return homepage.data.homepage.homepageContent
}

// Fetch the Main Navbar
const fetchMainNavbar = async () => {
  const queryString = `{
    mainMenu {
      content {
        ... on MenuDropdownRecord {
          __typename
          id
          title
          titleLink
          innerLinks
        }
        ... on MenuLinkRecord {
          __typename
          id
          label
          link
        }
      }
    }
  }
  
  `
  const mainNavbarData = await fetchQuery(queryString)
  const mainNavbar = await mainNavbarData.json()
  return mainNavbar.data.mainMenu.content
}

// Fetch Project Cards
const fetchProjectCards = async () => {
  const queryString = `{
    allProjectCards(locale: en) {
      id
      title
      category
      projectLink
      image {
        url
        alt
      }
    }
  }`

  const projectCardsData = await fetchQuery(queryString)
  const projectCards = await projectCardsData.json()
  return projectCards.data.allProjectCards
}

// Fetch services Cards
const fetchServicesCards = async () => {
  const queryString = `{
    allServiceCards(locale: en) {
      id
      title
      body
      link
      image {
        alt
        url
      }
    }
  }`

  const serviceCardsData = await fetchQuery(queryString)
  const serviceCards = await serviceCardsData.json()
  return serviceCards.data.allServiceCards
}

const fetchFooterGroups = async () => {
  const queryString = `{
    allFooterGroups(orderBy: _createdAt_ASC) {
      id
      title
      content {
        id
        label
        link
      }
    }
  }`

  const footerGroupsData = await fetchQuery(queryString)
  const footerGroups = await footerGroupsData.json()
  return footerGroups.data.allFooterGroups
}

const fetchContactSections = async () => {
  const queryString = `{
    contact(locale: en) {
      content {
        ... on ContactInfoRecord {
          id
          __typename
          title
          content
        },
        ... on ContactSectionRecord {
          id
          __typename
          title
          subtitle
        },
        ... on SocialRecord {
          id
          __typename
          link
          icon
        },
        ... on QuoteRecord {
          id
          __typename
          quote,
          author
        }
      }
    }
  }`

  const conctactSectionsData = await fetchQuery(queryString)
  const contactSections = await conctactSectionsData.json()
  return contactSections.data.contact.content
}

const indexFetch = async () => {
  const homepage = await fetchHomepage()
  const mainNavbar = await fetchMainNavbar()
  const projectCards = await fetchProjectCards()
  const serviceCards = await fetchServicesCards()
  const footerGroups = await fetchFooterGroups()
  const contactSections = await fetchContactSections()
  return {
    homepage,
    mainNavbar,
    projectCards,
    serviceCards,
    footerGroups,
    contactSections,
  }
}

module.exports = {
  indexFetch,
}
