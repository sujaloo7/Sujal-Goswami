import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import { Tooltip } from '@chakra-ui/react'
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMail } from "react-icons/fi"

const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <nav class="navbar navbar-expand-lg" data-aos="fade-in" >
                <div class="container px-5 p-3 nav">
                    <a class="navbar-brand fw-bold" href="/" style={{ fontSize: "45px", color: "white" }}>Sujal.</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0 gap-2">
                            <li class="nav-item">
                                <Tooltip label="Instagram" aria-label='A tooltip'>
                                    <a class="nav-link" aria-current="page" href="#" ><AiOutlineInstagram size={40} /> </a>
                                </Tooltip>
                            </li>
                            <li class="nav-item">
                                <Tooltip label="Github" aria-label='A tooltip'>
                                    <a class="nav-link" href="https://github.com/sujaloo7/" ><AiOutlineGithub size={40} /> </a>
                                </Tooltip>
                            </li>

                            <li class="nav-item">
                                <Tooltip label="Linkdin" aria-label='A tooltip'>
                                    <a class="nav-link " href="https://www.linkedin.com/in/sujal-goswami-965a1a202/" ><AiFillLinkedin size={40} /></a>
                                </Tooltip>
                            </li>
                            <li class="nav-item">
                                <Tooltip label="Youtube" aria-label='A tooltip'>
                                    <a class="nav-link " href="https://www.youtube.com/@clevercoder346/videos" ><AiFillYoutube size={40} /></a>
                                </Tooltip>
                            </li>
                        </ul>
                        <Tooltip label="Email Me" aria-label='A tooltip'>
                            <a href="mailto:sujal.ktech@gmail.com"> <FiMail className='emailme' size={40} /></a>
                        </Tooltip>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar