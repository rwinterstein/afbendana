import React from "react"
import SEO from "../../components/seo"
import Header from "./header"
import Content from "./content"

const projectLayout = ({
  title,
  coverArt,
  role,
  info,
  fileDownload,
  description,
  logline,
}) => {
  return (
    <>
      <SEO title={title} />
      <Header
        title={title}
        coverArt={coverArt}
      />
      <Content
        title={title}
        role={role}
        info={info}
        fileDownload={fileDownload}
        description={description}
        logline={logline}
      />
    </>
  )
}

export default projectLayout
