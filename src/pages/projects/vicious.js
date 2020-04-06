import React from "react"
import Layout from "../../components/layout"
import ProjectLayout from "../../components/projects/projectLayout"

import projectImg from "../../images/vicious.png"
import fileSource from "../../docs/vicious.pdf"

const TheGateway = () => (
  <Layout>
    <ProjectLayout
      coverArt={projectImg}
      title="Vicious"
      role="Writer"
      info="Feature Film, Sci-Fi"
      fileName="PDF"
      fileSource={fileSource}
      description="Hired by Scott Free to adapt bestselling novel into feature film screenplay. Wrote three drafts over two years."
      logline="After two pre-med students discover that Near Death Experiences can trigger supernatural abilities, one must stop the other after he goes on a homicidal rampage."
    />
  </Layout>
)

export default TheGateway
