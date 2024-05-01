import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#F87921" fill-opacity="1" d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,160C672,149,768,139,864,149.3C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className='bg-[#F87921] lg:py-10 -mt-1 lg:mt-0' >
                <div className=''>
                    <div className='lg:ml-10 ml-2'>
                        <p className='md:text-[30px]  text-lg lg:ml-0 text-white font-semibold' style={{ letterSpacing: '2px' }}>TECHBRAIN</p>
                        <p className='md:text-[18px] text-white text-xs md:ml-5 lg:mt-2' style={{ letterSpacing: '6px' }} >NETWORKS</p>

                        <div className='md:flex  md:mt-14    lg:ml-10  mt-5' style={{ fontFamily: "'wark Sans',sans-serif" }}>
                            <div className='md:w-1/2  lg:mr-16 '>
                                <h1 className='lg:text-[30px]  font-semibold text-white' style={{ letterSpacing: '1px' }}>Address</h1>
                                <p className='font-bold text-white lg:mt-5 mt-2 lg:text-xl' style={{ letterSpacing: '0.5px' }}>India</p>
                                <p className='lg:text-lg text-white mt-5' style={{ letterSpacing: '1px' }}>Thanjavur</p>
                                <p className='lg:text-lg text-white' style={{ lineHeight: '30px', letterSpacing: '2px' }}>6/12 Papa vaikal Street Ayyampettai Papanasam Thanjavur Tamilnadu India.</p>
                                <p className='font-bold text-white mt-5 lg:text-xl' style={{ letterSpacing: '0.5px' }}>United Kingdom</p>
                                <p className='lg:text-lg text-white mt-2' style={{ letterSpacing: '1px' }}>London</p>
                                <p className='lg:text-lg text-white ' style={{ lineHeight: '30px', letterSpacing: '2px' }}>71-75 Shelton Street, Covent Garden,London, WC2H 9JQ, United Kingdom.</p>
                            </div>
                            <div className='md:w-1/2 mr-5   lg:mt-0 mt-5'>
                                <h1 className='lg:text-[30px]  font-semibold text-white' style={{ letterSpacing: '1px' }}>Products</h1>
                                <Link to='/AssetManagementSystem'><p className='lg:text-xl text-white lg:mt-6 mt-1 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Asset Management System</p></Link>
                                <Link to='/CMS'>  <p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>CMS</p></Link>
                                <Link to='/CRM' ><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>CRM</p></Link>
                                <Link to='/Digital Manufacturing Excellence'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Digital Manufacturing Excellence</p></Link>
                                <Link to='/Delivery Solution'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Delivery Solution</p></Link>
                                <Link to='/Digital Twins'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Digital Twins</p></Link>
                                <Link to='/E-Commerce'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>E-Commerce</p></Link>
                                <Link to='/ERP'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>ERP</p></Link>
                            </div>
                            <div className='md:w-1/2 mr-5 lg:mx-5   lg:mt-14 '>
                                <Link to='/Energy Monitoring System'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Energy Monitoring System</p></Link>
                                <Link to='/Finance And Payroll'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Finance and Accounting</p></Link>
                                <Link to='/Fire Compliance System'> <p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Fire Compliance System</p></Link>
                                <Link to='/Hr and Payroll' ><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Hr and Payroll</p></Link>
                                <Link to='/Machine Failure Prediction'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Machine Failure Prediction</p></Link>
                                <Link to='/Manufacturing Execution System'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Manufacturing Execution System</p></Link>
                                <Link to='/Manufacturing Analytics Software'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Manufacturing Analytics Software</p></Link>
                            </div>
                            <div className='md:w-1/2 mr-5  lg:mx-5  lg:mt-14'>
                                <Link to='/Predictive Maintenance System'> <p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Predictive Maintenance System</p></Link>
                                <Link to='/Production Monitoring System'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Production Monitoring System</p></Link>
                                <Link to='/Energy Monitoring System'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Product Lifecycle Management</p></Link>
                                <Link to='/Quality Management Software'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Quality Management Software</p></Link>
                                <Link to='/SaaS'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>SaaS</p></Link>
                                <Link to='/Smart Home Automation'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Smart Home Automation</p></Link>
                                <Link to='/Supply Chain Management'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Supply Chain Management</p></Link>
                                <Link to='/Solar Monitoring'><p className='lg:text-xl text-white lg:mt-4 mt-2 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Solar Monitoring System</p></Link>
                            </div>
                        </div>
                        <div className='md:flex gap-0   md:mt-14    lg:ml-10  mt-5' style={{ fontFamily: "'wark Sans',sans-serif" }}>
                            <div className='md:w-1/4  lg:mt-0 mt-5 '>
                                <h1 className='lg:text-[30px] font-semibold text-white' style={{ letterSpacing: '1px' }}>Services</h1>
                                <p className='lg:text-xl text-white mt-1 lg:mt-4 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Cloud Services</p>
                                <p className='lg:text-xl text-white mt-2 lg:mt-4 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Data Analytics</p>
                                <p className='lg:text-xl text-white mt-2 lg:mt-4 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>DevOps</p>
                                <p className='lg:text-xl text-white mt-2 lg:mt-4 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>E-Commerce</p>
                                <p className='lg:text-xl text-white mt-2 lg:mt-4 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Software Development</p>
                                <p className='lg:text-xl text-white mt-2 lg:mt-4 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>UI/UX Design</p>
                                <p className='lg:text-xl text-white mt-2 lg:mt-4 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Web 3.0 Apps</p>
                                <p className='lg:text-xl text-white mt-2 lg:mt-4 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Website Design</p>
                                <p className='lg:text-xl text-white mt-2 lg:mt-4 hover:text-gray-200 ' style={{ letterSpacing: '1.5px' }}>Web & Mobile Application</p>
                            </div>
                            <div className='md:w-1/4 lg:mx-5 '>
                                <h1 className='lg:text-[30px] font-semibold text-white mt-5 lg:mt-0' style={{ letterSpacing: '1px' }}>Overview</h1>
                                <Link to="/" > <p className='lg:text-xl text-white lg:mt-6 mt-2 hover:text-gray-200 cursor-pointer' style={{ letterSpacing: '1.5px' }}>Home</p></Link>
                                <Link to="/" ><p className='lg:text-xl text-white lg:mt-6 mt-2 hover:text-gray-200 cursor-pointer' style={{ letterSpacing: '1.5px' }}>About</p></Link>
                                <p className='lg:text-xl text-white lg:mt-6 mt-2 hover:text-gray-200 cursor-pointer' style={{ letterSpacing: '1.5px' }}>Services</p>
                                <p className='lg:text-xl text-white lg:mt-6 mt-2 hover:text-gray-200 cursor-pointer' style={{ letterSpacing: '1.5px' }}>Products</p>
                                <p className='lg:text-xl text-white lg:mt-6 mt-2 hover:text-gray-200 cursor-pointer' style={{ letterSpacing: '1.5px' }}>Contact Us</p>
                            </div>
                            <div className='w-1/4' style={{ fontFamily: "'wark Sans',sans-serif" }}>
                                <h1 className='md:text-[30px]   font-semibold text-white' style={{ letterSpacing: '0.5px' }}>Follow Us</h1>
                                <ul className="flex  text-gray-400 md:mt-5 mt-2">
                                    <a href="https://www.facebook.com/"> <li className="  hover:text-white p-2 bg-white rounded shadow mr-5 hover:bg-gray-500">
                                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="lg:w-5 lg:h-5 w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </li></a>
                                    <a href="https://www.instagram.com/https://in.linkedin.com/"><li className=" hover:text-white p-2 bg-white rounded shadow mr-5 hover:bg-gray-500">
                                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="lg:w-5 lg:h-5 w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                                        </svg>
                                    </li></a>
                                    <a href="https://in.linkedin.com/"><li className=" hover:text-white p-2 bg-white rounded shadow mr-5 hover:bg-gray-500">
                                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="lg:w-5 lg:h-5 w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </li></a>
                                    <a href="https://twitter.com/"><li className=" hover:text-white p-2 bg-white rounded shadow mr-5 hover:bg-gray-500">
                                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="lg:w-5 lg:h-5 w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </li></a>
                                </ul>
                                <h1 className='  lg:mt-5 text-white lg:text-[30px] font-bold mt-2 ' style={{ letterSpacing: '0.5px' }}>Contact Us</h1>
                                <h1 className=' text-white lg:mt-4 mt-2 lg:text-xl' style={{ letterSpacing: '0.5px' }}>contact@techbrainnetworks.com</h1>
                            </div>
                        </div>
                        <div style={{ letterSpacing: '0.5px', display: 'flex', justifyContent: 'end' }}>
                            <h1 className=' lg:mr-20 lg:mt-5 mt-10 mr-12 text-white  lg:text-xl cursor-pointer mb-5' style={{ letterSpacing: '0.5px' }}><a href='/privacy-policies'>Privacy </a>|<a href='/terms-and-conditions'>Terms & Conditions</a></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
