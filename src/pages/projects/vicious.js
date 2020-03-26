import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Footer from "../../components/footer"

import ProjectLayout from "../../components/projects/projectLayout"

import viciousImg from "../../images/vicious.png"
import viciousPDF from "../../docs/vicious.pdf"

const TheGateway = () => (
  <Layout>
    <SEO title="Vicious" />
    <ProjectLayout
      coverArt={viciousImg}
      title="Vicious"
      role="Writer"
      info="Feature Film, Drama"
      fileDownload={viciousPDF}
      description="Based on 2013 Black List Script WHERE ANGELS DIE. Currently in post-production and starring Olivia Munn, Frank Grillo, Bruce Dern, Shea Whigham, Keith David, and Mark Boone Jr."
      logline="An inner city social worker must protect a young girl and her mother from the girl's father, a psychotic killer who's just been released from prison. *2013 Black List, 2013 Hit List (as WHERE ANGELS DIE)"
    />
    <Footer />
  </Layout>
)

export default TheGateway
