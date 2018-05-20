import React, { Component, PropTypes } from 'react'
import Img from 'gatsby-image'

import Anchor from 'grommet/components/Anchor'
import Card from 'grommet/components/Card'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'

import LinkNextIcon from 'grommet/components/icons/base/LinkNext'

import styles from './BookTile.css'

const BookTile = ({
  author,
  description,
  resolutions,
  title,
  path,
  externalLinks,
}) => (
  <Card
    heading={
      <Heading tag="h3" strong={false} truncate={false}>
        {title}
      </Heading>
    }
    description={<Paragraph>{author}</Paragraph>}
    thumbnail={<Img resolutions={resolutions} alt={title} />}
    link={[
      <Anchor
        primary={true}
        path={path}
        icon={<LinkNextIcon />}
        label="Read more"
      />,
      ...externalLinks.map(link => (
        <Anchor href={link.url} label={link.title} target="_blank" />
      )),
    ]}
    contentPad="small"
    textSize="small"
  />
)

BookTile.propTypes = {
  description: PropTypes.string,
  resolutions: PropTypes.object,
  title: PropTypes.string,
}

BookTile.defaultProps = {
  description: '',
  resolutions: {},
  thumbnail: '',
  title: '',
}

module.exports = BookTile
