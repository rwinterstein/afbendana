import React from "react"
import Layout from "../../components/layout"
import ProjectLayout from "../../components/projects/projectLayout"

import projectImg from "../../images/angeles.jpg"
import fileSource from "../../docs/angeles.pdf"

const Angeles = () => (
  <Layout>
    <ProjectLayout
      coverArt={projectImg}
      title="Angeles"
      role="Co-Creator, Co-Writer"
      info="TV Series"
      fileName="PDF"
      fileSource={fileSource}
      description="A medical drama that follows a group of paramedics working the streets of Los Angeles as they cope with personal and professional trauma. Currently out to showrunners."
      logline="Angeles follows a jaded LA paramedic and his equally dysfunctional partners as they fight to survive long enough to save the people who live there. If the chaos of constant fires, earthquakes, shootings and multi-car crashes don't kill them, their own struggles with addiction, exhaustion, and self-destruction still might."
    />
  </Layout>
)

export default Angeles
