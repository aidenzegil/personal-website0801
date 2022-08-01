import React from 'react'
import Section1 from './homeComponents/Section1'
import Section2 from './homeComponents/Section2'
import Section3 from './homeComponents/Section3'
import Section4 from './homeComponents/Section4'
import HomeNav from './homeComponents/HomeNav'

const home = () => {
    return (
        <div>
            <HomeNav/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
        </div>
    )
}

export default home
