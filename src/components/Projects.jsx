import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import project1 from "./project1.PNG";
import project2 from "./project2.PNG";
import project3 from "./project3.PNG";
import project4 from "./project4.PNG";
import project5 from "./project5.PNG";
import project6 from "./project6.PNG";
import project7 from "./project7.PNG";
import project8 from "./project8.PNG";




import { Heading } from '@chakra-ui/react';


const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="container mt-5 projectsme mb-5" data-aos="fade-in">
                <h2 className='mt-5 mb-5'>Projects</h2>


                <div className="row">
                    <div className="col-sm-3 mb-3">
                        <a href="https://ecommerce-app-alpha-orpin.vercel.app/">
                            <div className="card border-0 p-3 mb-3">
                                <img src={project1} alt="" />
                                <Heading className='text-white text-center p-3' style={{ fontSize: "17px", fontWeight: "600" }}>Ecommerce App</Heading>


                            </div>
                        </a>
                    </div>
                    <div className="col-sm-3 mb-3">
                        <a href="https://discord-clone-eta-three.vercel.app/">
                            <div className="card border-0 p-3">
                                <img src={project2} alt="" />
                                <Heading className='text-white text-center p-3' style={{ fontSize: "17px", fontWeight: "600" }}>Discord App</Heading>


                            </div>
                        </a>
                    </div>
                    <div className="col-sm-3 mb-3">
                        <a href="https://block-chain-app-97u3.vercel.app/">
                            <div className="card border-0 p-3" >
                                <img src={project3} alt="" />
                                <Heading className='text-white text-center p-3' style={{ fontSize: "17px", fontWeight: "600" }}>Blockchain App</Heading>

                            </div>
                        </a>
                    </div>
                    <div className="col-sm-3 mb-3">
                        <a href="https://booking-app-drab.vercel.app/">
                            <div className="card border-0 p-3">
                                <img src={project4} alt="" />
                                <Heading className='text-white text-center p-3' style={{ fontSize: "17px", fontWeight: "600" }}>Room booking App</Heading>


                            </div>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="https://almastarts.com">
                            <div className="card border-0 p-3 mb-3">
                                <img src={project5} alt="" />
                                <Heading className='text-white text-center p-3' style={{ fontSize: "17px", fontWeight: "600" }}>Scholarship App</Heading>


                            </div>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="http://ec2-13-126-2-136.ap-south-1.compute.amazonaws.com/">
                            <div className="card border-0 p-3">
                                <img src={project6} alt="" />
                                <Heading className='text-white text-center p-3' style={{ fontSize: "17px", fontWeight: "600" }}>Vpn App</Heading>


                            </div>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="https://web.almastarts.com">
                            <div className="card border-0 p-3" >
                                <img src={project7} alt="" />
                                <Heading className='text-white text-center p-3' style={{ fontSize: "17px", fontWeight: "600" }}>Health App</Heading>

                            </div>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="https://movies-verse-clone-hs9t-kh0aoyl6p-clvrcoder-gmailcom.vercel.app/">
                            <div className="card border-0 p-3">
                                <img src={project8} alt="" />
                                <Heading className='text-white text-center p-3' style={{ fontSize: "17px", fontWeight: "600" }}>Netflix Clone App</Heading>


                            </div>
                        </a>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Projects