import React from "react"
import styled from "styled-components"
import SEO from "../../components/seo"
import Header from "./header"
import Content from "./content"
import Footer from "../footer"

const ProjectLayout = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const projectLayout = ({
  title,
  coverArt,
  role,
  info,
  fileName,
  fileSource,
  fileNameTwo,
  fileSourceTwo,
  description,
  logline,
}) => {
  return (
    <ProjectLayout>
      <SEO title={title} />
      <Header title={title} coverArt={coverArt} />
      <Content
        title={title}
        role={role}
        info={info}
        fileName={fileName}
        fileSource={fileSource}
        fileNameTwo={fileNameTwo}
        fileSourceTwo={fileSourceTwo}
        description={description}
        logline={logline}
      />
      <Footer />
    </ProjectLayout>
  )
}

export default projectLayout
