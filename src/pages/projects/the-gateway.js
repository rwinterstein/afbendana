import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Header from "../../components/projects/header"
import Content from "../../components/projects/content"
import Footer from "../../components/footer"

import vicious from "../../images/vicious.png"

const TheGateway = () => (
  <Layout>
    <SEO title="The Gateway" />
    <Header
      CoverArt={vicious}
      Title="The Gateway"
    />
    <Content
      Role="Writer"
      Info="Feature Film, Drama"
      Description="Based on 2013 Black List Script WHERE ANGELS DIE. Currently in post-production and starring Olivia Munn, Frank Grillo, Bruce Dern, Shea Whigham, Keith David, and Mark Boone Jr."
      Logline="An inner city social worker must protect a young girl and her mother from the girl's father, a psychotic killer who's just been released from prison. *2013 Black List, 2013 Hit List (as WHERE ANGELS DIE)"
    />
    <Footer />
  </Layout>
)

export default TheGateway
