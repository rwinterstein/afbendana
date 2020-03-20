import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/index/hero"
import Blurb from "../components/index/blurb"
import Consulting from "../components/index/consulting"
import Portfolio from "../components/index/portfolio"
import Footer from "../components/footer"

import "../global.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Alex Felix Bendaña" />
    <Hero />
    <Blurb />
    <Consulting />
    <Portfolio />
    <Footer />
  </Layout>
)

export default IndexPage
