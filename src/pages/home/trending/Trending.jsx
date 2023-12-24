import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import "../Home.scss"
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'

const Trending = () => {
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <sapn className="carouselTitle">Trending</sapn>
            <SwitchTabs/>
        </ContentWrapper>
    </div>
  )
}

export default Trending