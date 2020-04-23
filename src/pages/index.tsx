import React from 'react'
// The following errors are because there are no correct way to import these yet.
// @ts-expect-error
import Layout from '@theme/Layout'
// @ts-expect-error
import Link from '@docusaurus/Link'
// @ts-expect-error
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
// @ts-expect-error
import useBaseUrl from '@docusaurus/useBaseUrl'
import Features from '../components/features'

const Home: React.FC = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className="hero hero--primary heroBanner">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="buttons">
            <Link
              className="button button--outline button--secondary button--lg"
              to={useBaseUrl('docs/doc1')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Features />
      </main>
    </Layout>
  )
}

export default Home
