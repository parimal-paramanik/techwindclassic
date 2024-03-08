import React from "react";
import { Link } from "react-router-dom";
import logo_light from '../../assets/images/prologoo.png';
import {FaRegEnvelope,FaDribbble,FaLinkedin, FaFacebookF, FaInstagram, FaTwitter,FaRegFile,FaBehance, PiShoppingCart, MdKeyboardArrowRight} from '../../assets/icons/icons'

export default function JobFooter(){
    return(
        <footer className="footer  relative text-gray-200 dark:text-gray-200">
            <div className="container relative text-center">
                <div className="grid grid-cols-1">
                    <div className="py-[30px] px-0">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="md:text-start text-center">
                                <Link to="/#" className="text-[22px] focus:outline-none">
                                    <img src={logo_light} className="mx-auto md:me-auto md:ms-0 w-[100px] h-[60px] " alt="" />
                                </Link>
                            </div>

                            <ul className="list-none mt-5 space-x-1 space-y-1">
                                    
                                
                                    <li className="inline"><Link to="https://www.linkedin.com/company/prodigal-ai/" target="_blank" className="w-[30px] h[50px] inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><FaLinkedin className='text-sm'/></Link></li>
                                  
                                </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0  ">
                <div className="container relative text-center">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                        <p className="mb-0 text-black z-50">© {new Date().getFullYear()} Prodigal AI. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="#" target="_blank" className="text-reset">Prodigal AI</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}