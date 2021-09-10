import React from "react"
import Layout from "../../components/layout"
import ProjectLayout from "../../components/projects/projectLayout"

import projectImg from "../../images/the-gateway.png"
import fileSource from "../../docs/the-gateway.pdf"

const TheGateway = () => (
  <Layout>
    <ProjectLayout
      coverArt={projectImg}
      title="The Gateway"
      role="Writer"
      info="Feature Film, Drama"
      fileName="PDF"
      fileSource={fileSource}
      description="Based on 2013 Black List Script WHERE ANGELS DIE and available on Amazon. Starring Olivia Munn, Frank Grillo, Shea Whigham, Bruce Dern, Keith David, and Mark Boone Jr."
      logline="An inner city social worker must protect a young girl and her mother from the girl's father, a psychotic killer who's just been released from prison. *2013 Black List, 2013 Hit List (as WHERE ANGELS DIE)"
    />
  </Layout>
)

export default TheGateway
