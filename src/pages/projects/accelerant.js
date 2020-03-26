import React from "react"
import Layout from "../../components/layout"
import ProjectLayout from "../../components/projects/projectLayout"
import Footer from "../../components/footer"

import projectImg from "../../images/vicious.png"
import projectPDF from "../../docs/the-gateway.pdf"

const Accelerant = () => (
  <Layout>
    <ProjectLayout
      coverArt={projectImg}
      title="Accelerant"
      role="Executive Producer"
      info="Feature Film, Thriller"
      fileDownload={projectPDF}
      description="Attached to produce alongside Nostromo Pictures (RED LIGHTS, BURIED) and Flux Capacitor Studios (GIVE ME LIBERTY)."
      logline="A workaholic mother with a troubled past finds herself trapped in her vehicle when a mysterious hacker with unknown motives takes control of the wheel and her life."
    />
    <Footer />
  </Layout>
)

export default Accelerant
