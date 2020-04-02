import React from "react"
import Layout from "../../components/layout"
import ProjectLayout from "../../components/projects/projectLayout"

import projectImg from "../../images/the-knick.jpg"
import fileSource from "../../docs/the-knick.pdf"

const theKnick = () => (
  <Layout>
    <ProjectLayout
      coverArt={projectImg}
      title="The Knick"
      role="Writer"
      info="Two As One (TV Series Spec Episode)"
      fileName="PDF"
      fileSource={fileSource}
      description="Wrote spec episode of Steven Soderbergh’s historical medical drama THE KNICK after being selected as one of ten NHMC finalists out of over 500 applicants."
      logline="To save The Knickerbocker Hospital, Dr. Thackery must perform the first ever separation of conjoined twins, but an overdose forces him to leave the infant's fate in the hands of bitter rivals: Doctors Gallinger and Edwards."
    />
  </Layout>
)

export default theKnick
