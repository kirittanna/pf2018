import React, { Component } from 'react'
import { Index } from 'elasticlunr'
import { isEmpty } from 'lodash/fp'
import { navigateTo } from 'gatsby-link'

import Search from 'grommet/components/Search'

// Search component
export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <Search
        ref="search"
        inline={true}
        responsive={false}
        fill={true}
        size="medium"
        placeHolder="Search"
        defaultValue="Search..."
        value={this.state.query}
        onDOMChange={this.onSearch}
        onSelect={this.onSearchSelect}
        suggestions={this.state.results.map(page => ({
          label: page.title,
          ...page,
        }))}
      />
    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.index)

  onSearchSelect = item => {
    if (!isEmpty(item.suggestion.path)) {
      navigateTo(item.suggestion.path)
    }
  }

  onSearch = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query)
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
