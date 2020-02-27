import React from 'react'
import Slider from './slider/index'
import ShowResturantCard from './show_resturant/index'
import ShowQuickSearch from './quick_search/index'
import ShowCites from './cities/index'


class Home extends React.Component {
    render() {
      return(
          <div>
            <Slider/>
            <ShowResturantCard/>
            <ShowQuickSearch/>
            <ShowCites/>
          </div>
      )
    }
  }

  export default Home;