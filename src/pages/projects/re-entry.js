import React from "react"
import Layout from "../../components/layout"
import ProjectLayout from "../../components/projects/projectLayout"
import Footer from "../../components/footer"

import projectImg from "../../images/vicious.png"
import projectPDF from "../../docs/the-gateway.pdf"

const ReEntry = () => (
  <Layout>
    <ProjectLayout
      coverArt={projectImg}
      title="Re-Entry"
      role="Co-Writer"
      info="Feature Film, Sci-Fi"
      fileDownload={projectPDF}
      description="Hired by Nostromo Pictures to rewrite David Guggenheim sci-fi script."
      logline="After a top-secret Russian spacecraft is hijacked by a treasonous team of U.S. Special Forces, a disgraced astronaut becomes the only person who can prevent the weapon from falling into the wrong hands."
    />
    <Footer />
  </Layout>
)

export default ReEntry
