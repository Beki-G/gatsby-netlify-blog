import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectBlurb from '../components/ProjectBlurb'
import ProjectGrid from '../components/ProjectGrid'

const Projects = () => {
    return (
        <div className="bg-lgCyan">
            <Navbar />
            {/* <p className="font-extrabold text-3xl text-center">Projects</p> */}
            <ProjectBlurb />
            <ProjectGrid />
            <Footer />
        </div>
    )
}

export default Projects