import React from "react"
import Layout from "../../components/layout"
import ProjectLayout from "../../components/projects/projectLayout"

import projectImg from "../../images/re-entry.png"
import fileSource from "../../docs/re-entry.pdf"

const ReEntry = () => (
  <Layout>
    <ProjectLayout
      coverArt={projectImg}
      title="Re-Entry"
      role="Co-Writer"
      info="Feature Film, Sci-Fi"
      fileName="PDF"
      fileSource={fileSource}
      description="Hired by Nostromo Pictures to rewrite David Guggenheim sci-fi script."
      logline="After a top-secret Russian spacecraft is hijacked by a treasonous team of U.S. Special Forces, a disgraced astronaut becomes the only person who can prevent the weapon from falling into the wrong hands."
    />
  </Layout>
)

export default ReEntry
