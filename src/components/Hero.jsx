import React, { useEffect } from 'react'
import capture from "./Capture.PNG";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiMouse } from "react-icons/bi"
import { motion } from 'framer-motion';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="container-fluid" >
                <div className="container mt-5 hero-me px-5" data-aos="fade-in">
                    <div className="row">
                        <div className="col-sm-6  mt-5">
                            <h1>👋Hi, I'm Sujal</h1>
                            <p className='mb-4'>Frontend Developer</p>
                            <small className=''>Through constant practice & learning, I produce<br></br> aesthetic software to an extremely high standard.</small>
                        </div>
                        <div className="col-sm-6 text-center mt-5">
                            <img src={capture} className="ms-auto  " alt="Sujal" />
                        </div>
                    </div>
                    <div className="col-sm-4 text-center ms-auto me-auto mt-3">
                        <motion.div style={{

                        }}
                            animate={{
                                translateY: "20px"
                            }}
                            transition={{
                                duration: "1",
                                repeat: "Infinity",
                                repeatType: "reverse"
                            }}>
                            <BiMouse size={50} color={"white"} className="ms-auto me-auto" />
                        </motion.div>
                        <br></br><span className='text-white mt-4'>Scroll Down</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero