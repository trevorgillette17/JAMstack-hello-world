import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hello World</h1>
    <p>My name is Trevor and I am currently enrolled in a Coding Bootcamp called Bloc and love what I am learning</p>
    <p>I would love to go to the Hackathon in San Francisco on November 3rd</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
