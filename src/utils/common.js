import React from 'react'
import rehypeReact from 'rehype-react'
import { head, get } from 'lodash/fp'

export const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler

export const getImageResolutions = (allImageSharp, path) => {
  console.log('getImageResolutions: ', allImageSharp.edges.length)
  const images = allImageSharp.edges.filter(
    ({ node: { id } }) => id.indexOf(path) > -1
  )
  console.log(images)
  return get(['node', 'resolutions'], head(images))
}
