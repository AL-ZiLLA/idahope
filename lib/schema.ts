import { siteConfig } from './config'

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MentalHealthBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/emily-wolf.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boise',
      addressRegion: 'ID',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6150,
      longitude: -116.2023,
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Therapy Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Virtual Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Teen & Adolescent Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Anxiety Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Depression Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Eating Disorder Therapy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parenting Support' } },
      ],
    },
  }
}

export function generateTherapistSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: `${siteConfig.therapist.name}, ${siteConfig.therapist.title}`,
    jobTitle: siteConfig.therapist.fullTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/emily-wolf.jpg`,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: siteConfig.therapist.university,
    },
    worksFor: {
      '@type': 'MentalHealthBusiness',
      name: siteConfig.name,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boise',
      addressRegion: 'ID',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Anxiety Therapy',
      'Depression Therapy',
      'Eating Disorders',
      'Adolescent Therapy',
      'Family Therapy',
      'Parenting Support',
    ],
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
