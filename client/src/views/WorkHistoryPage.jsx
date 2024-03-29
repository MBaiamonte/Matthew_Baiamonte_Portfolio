import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Separator from '../components/Separator';
import Slider from "react-slick";
import '../index.css'

const WorkHistoryPage = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        fade: true, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };
    return (
        <div className='d-flex flex-column align-items-center'>
            <Header/>
            <Separator/>
            <div className='d-flex justify-content-center align-items-center mb-5 mt-1  flex-wrap'>
                <h4  style={{'color':'#163958'}} className='mb-0'>Work History</h4>
                <p  style={{'color':'#163958'}} className='mb-0 ml-2' >(hover curser to pause)</p>
            </div>
            <div className='mb-4' style={{'width': '70%'}}>
                <Slider {...settings} >
                <div className='slide'>
                        <div className='justify-content-center d-flex align-items-center flex-wrap'>
                            <div style={{'width':'40%'}} className=' d-flex flex-column align-items-center'>
                                <h4 style={{'overflowWrap': 'break-word', 'color':'#163958'}} className='text-wrap'>Inotiv Bioanalytical Systems</h4>
                                <h5 style={{'color':'#1F577A'}} className='text-wrap'>Research Associate</h5>
                                <p className='mb-0 text-wrap' style={{color : '#e09f3e'}}>Feb 2022 - Dec 2022</p>
                                <p style={{'color':'#1F577A'}} className='text-wrap'>Boulder, CO</p>
                            </div>
                            <img src='../images/Inotiv_Logo.png' style={{'maxHeight':'150px', 'height': '50%' ,'width':'auto'}} />
                        </div>
                        <div className='d-flex justify-content-between text-center flex-column mx-4 '>
                            <h5 style={{'color':'#163958'}}>Duties</h5>
                            <li style={{'color':'#256E91'}} className='text-wrap'> Created and implemented new processes and SOPs within the Histology, Logistics, Information, and Immuno-Histochemistry departments which resulted in optimized workflows and improved efficiency. </li>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Maintained and updated all Safety Data Sheet (SDS) documentation for chemicals and substances, demonstrating meticulous attention to detail and compliance with safety regulations. </li>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Effectively managed project workflows through different departments and aided other departments. </li>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Maintained project workflow between departments and aided the lab manager.</li>
                        </div>
                    </div>
                    <div className='slide'>
                        <div className='justify-content-center d-flex align-items-center flex-wrap'>
                            <div style={{'width':'40%'}} className=' d-flex flex-column align-items-center'>
                                <h4 style={{'overflowWrap': 'break-word', 'color':'#163958'}} className='text-wrap'>IEH Labs & Consulting</h4>
                                <h5 style={{'color':'#1F577A'}}>Microbiologist</h5>
                                <p className='mb-0 text-wrap' style={{color : '#e09f3e'}}>May 2021 - Feb 2022</p>
                                <p style={{'color':'#1F577A'}} className='text-wrap'>Greeley, CO</p>
                            </div>
                            <img src='../images/IEH_Logo.png' className='my-2' style={{'maxHeight':'150px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <div className='d-flex justify-content-between  mx-4 flex-column text-center '>
                            <h5 style={{'color':'#163958'}}>Duties</h5>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Processed food samples and amplified bacterial content through incubation processes with thorough workflow management.</li>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Conducted PCR to determine the presence of pathogenic bacterial strains. </li>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Demonstrated expertise in plating and counting bacterial cultures on agar plates. </li>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Maintained project workflow between departments and aided the chief microbiologist as needed.</li>
                        </div>
                    </div>
                    <div className='slide'>
                        <div className='justify-content-center d-flex align-items-center  flex-wrap'>
                            <div style={{'width':'40%', 'textAlign' : 'center'}} className=' d-flex flex-column align-items-center'>
                                <h4 style={{'overflowWrap': 'break-word', 'color':'#163958'}} className='text-wrap'>Niles Family Dentistry</h4>
                                <h5 style={{'color':'#1F577A'}}>Intern</h5>
                                <p className='mb-0 text-wrap' style={{color : '#e09f3e'}}>Dec 2016 - Dec 2017</p>
                                <p style={{'color':'#1F577A'}}>Niwot, CO</p>
                            </div>
                            <img src='../images/Niles_Logo.webp' className='my-2' style={{'maxHeight':'150px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <div className='d-flex justify-content-between text-center flex-column mx-4 '>
                            <h5 style={{'color':'#163958'}}>Duties</h5>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Aided Dr Niles as needed to ensure efficiency and expedite the exam process to reduce wait times for patients.</li>
                            <li style={{'color':'#256E91'}} className='text-wrap'> Assembled exam room with correct anesthetic and tools needed for appointments.</li>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Assisted with dental procedures and observed Dr Niles's methodologies while performing a variety of treatments.</li>
                        </div>
                    </div>
                    <div className='slide'>
                        <div className='justify-content-center d-flex align-items-center  flex-wrap'>
                        <div style={{'width':'40%'}} className=' d-flex flex-column align-items-center'>
                                <h4 style={{'overflowWrap': 'break-word', 'textAlign' : 'center', 'color':'#163958'}} className='text-wrap'>Smokey Mountain Outdoors</h4>
                                <h5 style={{'color':'#1F577A'}} className='text-wrap'>Raft Guide</h5>
                                <p className='mb-0 text-wrap' style={{color : '#e09f3e'}}>May 2018 - Aug 2020</p>
                                <p style={{'color':'#1F577A'}} className='text-wrap'>Hartford, TN</p>
                            </div>
                            <img src='../images/SMO_Logo.webp' className='my-2' style={{'maxHeight':'150px', 'height': '40%' ,'width':'auto'}} />
                        </div>
                        <div className='d-flex justify-content-between mx-4 text-center flex-column'>
                            <h5 style={{'color':'#163958'}}>Duties</h5>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Performed swift water rescue to quickly save guests and remove them from potentially dangerous situations.</li>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Guided families of all ages and experience levels down class four rapids in a safe but fun manner. </li>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Administered first aid as needed for a variety of injuries as needed. </li>
                            <li style={{'color':'#256E91'}} className='text-wrap'>Set river safety for other guides to ensure the quick rescue of guests should an accident occur.  </li>
                        </div>
                    </div>
                </Slider>
            </div>
            <Footer/>
        </div>
    )
}

export default WorkHistoryPage