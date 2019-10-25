import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import SearchBox from './SearchBox'

const SidebarContainer = styled.div`
  width:  250px;

  header {
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 8px 0;
  }

  ul {
    margin: 0 0 16px 0;
  }
`

const Sidebar = () => (
  <SidebarContainer>
    {process.env.GATSBY_DOCSEARCH_API_KEY && process.env.GATSBY_DOCSEARCH_INDEX && (
      <SearchBox />
    )}
    <header>Bruksmønster</header>
    <ul>
      <li><Link to="/academic">Vitenskapelig ansatte: MAM-DLR</Link></li>
      <li><Link to="/pro">Proffe: MAM-DLR</Link></li>
    </ul>
    <header>Test scenario</header>
    <ul>
      <li><Link to="/pro-test-cases">Proffbruker-scenario</Link></li>
      <li><Link to="/academic-test-cases">Vitenskapelig ansatte</Link></li>
    </ul>
    <header>Komponenter</header>
    <ul>
      <li><Link to="/kaltura">Kaltura</Link></li>
    </ul>
    <header>Diverse</header>
    <ul>
      <li><Link to="/kaltura-whiteboard">Kaltura whiteboard sesjon</Link></li> 
      <li><Link to="/embed-test">Test av embed-funksjonalitet</Link></li>
      <li><a href="https://uib-video.netlify.com/">UiB Video</a></li>
    </ul>
  </SidebarContainer>
)

export default Sidebar