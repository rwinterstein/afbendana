import React from "react"
import Layout from "../../components/layout"
import ProjectLayout from "../../components/projects/projectLayout"
import Footer from "../../components/footer"

import projectImg from "../../images/vicious.png"
import projectPDF from "../../docs/the-gateway.pdf"

const BlackAlligator = () => (
  <Layout>
    <ProjectLayout
      coverArt={projectImg}
      title="BLACK ALLIGATOR"
      role="Co-Creator, Co-Writer"
      info="TV Series"
      fileDownload={projectPDF}
      description="Collaborated with co-creator Matisse Tolin for a historical drama inspired by an incredible true story."
      logline="BLACK ALLIGATOR tells the true story of rogue Freed Men's Bureau Agent Marshall Twitchell, who forms an unlikely alliance with a local black minister as the two carefully diffuse an escalating racial powder keg set to explode in Reconstruction-era Louisiana."
    />
    <Footer />
  </Layout>
)

export default BlackAlligator
