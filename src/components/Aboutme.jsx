import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';

const Aboutme = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="container-fluid p-0 about" data-aos="fade-up">
                <div className="container-fluid aboutme">
                    <div className="container">
                        <h2 className='mt-5 mb-5 '>About Me</h2>
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card ">
                                            <div>
                                                <h5><CountUp end={50} /></h5>
                                                <p>Happy Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div>
                                                <h5><CountUp end={15} /></h5>
                                                <p>Projects Done</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Aboutme