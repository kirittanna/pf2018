import React from 'react'
import rehypeReact from 'rehype-react'
import { head, get } from 'lodash/fp'

export const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler
