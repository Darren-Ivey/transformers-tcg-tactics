import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
