import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { SiOctobercms } from "react-icons/si";
import { FaSwatchbook } from "react-icons/fa6";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GiFactoryArm } from "react-icons/gi";
import { MdPrecisionManufacturing } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiDigitalTrace } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { FaBookReader } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { BsFire } from "react-icons/bs";
import { MdPersonSearch } from "react-icons/md";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { TbReportAnalytics } from "react-icons/tb";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GrValidate } from "react-icons/gr";
import { TbCloudCog } from "react-icons/tb";
import { RiHomeWifiFill } from "react-icons/ri";
import { MdOutlineSolarPower } from "react-icons/md";
import { FiLink } from "react-icons/fi";
const Navbar = () => {
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);

    const toggleMegaMenu = () => {
        setMegaMenuOpen(!megaMenuOpen);
    };
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className='fixed w-full z-50'>
            <nav className='backdrop-blur-mg bg-white/90  rounded-b-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-5 ' style={{ fontFamily: '"League spartan", sans-serif' }}>
                <div className='flex justify-between'>
                    <div className='lg:ml-10 ml-5 lg:my-2 my-3'>
                        <p className='md:text-xl text-lg text-[#FD5A2A] font-semibold tracking-widest'>TECHBRAIN</p>
                        <p className='md:text-lg text-[#FD5A2A] text-xs text-center tracking-wide'>NETWORKS</p>
                    </div>
                    <div className='my-auto lg:block hidden mr-36'>
                        <ul className='flex lg:gap-14 font-semibold tracking-wide text-[#FD5A2A]'>
                            <Link to="/"><li className='cursor-pointer hover:scale-110 duration-300'>Home</li></Link>
                            <Link to="/" ><li className='cursor-pointer hover:scale-110 duration-300'>About</li></Link>
                            <li class="relative group    cursor-pointer hover:scale-110 duration-300">
                                <button class="hover:opacity-50 cursor-default">Products</button>
                                <div
                                    class="absolute top-1    -left-[50rem] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[900px] transform">
                                    <div class="relative border-2  border-[#FD5A2A] top-8 p-6 bg-white rounded-xl shadow-xl w-full">
                                        <div
                                            class="w-12 h-12 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[49.5rem] duration-500 ease-in-out rounded-sm">
                                        </div>

                                        <div class="relative z-10">
                                            <div class="grid grid-cols-3 mx-5 gap-12 text-black ">
                                                <div>
                                                    <ul class="text-[15px]">
                                                        <li className='my-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <FaSwatchbook className='w-5 h-5    text-[#FD5A2A]' />
                                                            <Link to='/AssetManagementSystem' className='mt-1' onClick={scrollToTop} >Asset Management System</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <SiOctobercms className='w-5 h-5    text-[#FD5A2A]' />
                                                            <Link to='/CMS ' onClick={scrollToTop}>CMS</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <AiOutlineFileProtect className='w-5 h-5    text-[#FD5A2A]' />
                                                            <Link to='/CRM' onClick={scrollToTop}>CRM</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]' >
                                                            <GiFactoryArm className='w-7 h-7 mt-2   text-[#FD5A2A]' />
                                                            <Link to='/DigitalManufacturingExcellence' onClick={scrollToTop}>Digital Manufacturing Excellence</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <TbTruckDelivery className='w-5 h-5   text-[#FD5A2A]' />
                                                            <Link to='/DeliverySolution' onClick={scrollToTop}>Delivery Solution</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <GiDigitalTrace className='w-5 h-5   text-[#FD5A2A]' />
                                                            <Link to='/DigitalTwins' onClick={scrollToTop}>Digital Twins</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <FiShoppingCart className='w-5 h-5   text-[#FD5A2A]' />
                                                            <Link to='/E-Commerce' onClick={scrollToTop}>E-Commerce</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <FaBookReader className='w-5 h-5   text-[#FD5A2A]' />
                                                            <Link to='/ERP' onClick={scrollToTop}>ERP</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <MdElectricalServices className='w-5 h-5   text-[#FD5A2A]' />
                                                            <Link to='/EnergyMonitoringSystem' onClick={scrollToTop}>Energy Monitoring System</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <ul class="mt-3 text-[15px]">
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <GrMoney className='w-5 h-5   text-[#FD5A2A]' />
                                                            <Link to='/FinanceAndPayroll' onClick={scrollToTop}>Finance and Accounting</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <BsFire className='w-5 h-5   text-[#FD5A2A]' />
                                                            <Link to='/FireComplianceSystem' onClick={scrollToTop}>Fire Compliance System</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <MdPersonSearch className='w-5 h-5   text-[#FD5A2A]' />
                                                            <Link to='/HrandPayroll' onClick={scrollToTop} >Hr and Payroll</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <CgSmartHomeWashMachine className='w-5 h-5   text-[#FD5A2A]' />
                                                            <Link to='/MachineFailurePrediction' onClick={scrollToTop}>Machine Failure Prediction</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <MdPrecisionManufacturing className='w-7 h-7   text-[#FD5A2A]' />
                                                            <Link to='/ManufacturingExecutionSystem' onClick={scrollToTop}>Manufacturing Execution System</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <TbReportAnalytics className='w-7 h-7 mt-1.5  text-[#FD5A2A]' />
                                                            <Link to='/ManufacturingAnalyticsSoftware' onClick={scrollToTop}>Manufacturing Analytics Software</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <TbDeviceDesktopAnalytics className='w-6 h-6 mt-1.5  text-[#FD5A2A]' />
                                                            <Link to='/PredictiveMaintenanceSystem' onClick={scrollToTop}>Predictive Maintenance System</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <MdOutlineProductionQuantityLimits className='w-6 h-6 mt-1.5  text-[#FD5A2A]' />
                                                            <Link to='/ProductionMonitoringSystem' onClick={scrollToTop}>Production Monitoring System</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <ul class="mt-3 text-[15px]">
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <MdElectricalServices className='w-5 h-5   text-[#FD5A2A]' />
                                                            <Link to='/ProductLifecycleManagement' onClick={scrollToTop}>Product Lifecycle Management</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <GrValidate className='w-5 h-5 mt-1.5 text-[#FD5A2A]' />
                                                            <Link to='/QualityManagementSoftware' onClick={scrollToTop}>Quality Management Software</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <TbCloudCog className='w-5 h-5  text-[#FD5A2A]' />
                                                            <Link to='/SaaS' onClick={scrollToTop}>SaaS</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <RiHomeWifiFill className='w-5 h-5  text-[#FD5A2A]' />
                                                            <Link to='/SmartHomeAutomation' onClick={scrollToTop}>Smart Home Automation</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <FiLink className='w-5 h-5  text-[#FD5A2A]' />
                                                            <Link to='/SupplyChainManagement' onClick={scrollToTop}>Supply Chain Management</Link>
                                                        </li>
                                                        <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                                            <MdOutlineSolarPower className='w-5 h-5 text-[#FD5A2A] ' />
                                                            <Link to='/SolarMonitoring' onClick={scrollToTop}>Solar Monitoring System</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <Link to="/Contact-us"><li className='cursor-pointer hover:scale-110 duration-300'>Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className='mt-1.5 md:mr-5 mr-2 lg:hidden'>
                        <button className="p-3" onClick={toggleMegaMenu}>
                            <IoMenu className='md:w-8 md:h-8 w-7 h-7 text-[#2976b6]' />
                        </button>
                    </div>
                </div>
                {megaMenuOpen && (
                    <div className="bg-white shadow-lg sm:px-8 lg:hidden text-[#FD5A2A] tracking-wide">
                        <ul id="mobileMenu" className="flex-wrap font-bold mt-20 h-screen">
                            <Link to="/"><li className="flex justify-center hover:bg-[#FD5A2A] w-80 py-1.5 rounded-lg mx-auto hover:text-white" onClick={toggleMegaMenu}>
                                Home
                            </li></Link>
                            <Link to='/'><li className="flex justify-center mt-5 hover:bg-[#FD5A2A] w-80 py-1.5 rounded-lg mx-auto hover:text-white" onClick={toggleMegaMenu}>
                                About
                            </li></Link>
                            {/* <div>
                                <ul class="text-[15px]">
                                    <li className='my-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <FaSwatchbook className='w-5 h-5    text-[#FD5A2A]' />
                                        <Link to='/AssetManagementSystem' className='mt-1' >Asset Management System</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <SiOctobercms className='w-5 h-5    text-[#FD5A2A]' />
                                        <Link to='/CMS'>CMS</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <AiOutlineFileProtect className='w-5 h-5    text-[#FD5A2A]' />
                                        <Link to='/CRM' >CRM</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]' >
                                        <GiFactoryArm className='w-7 h-7 mt-2   text-[#FD5A2A]' />
                                        <Link to='/Digital Manufacturing Excellence'>Digital Manufacturing Excellence</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <TbTruckDelivery className='w-5 h-5   text-[#FD5A2A]' />
                                        <Link to='/Delivery Solution'>Delivery Solution</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <GiDigitalTrace className='w-5 h-5   text-[#FD5A2A]' />
                                        <Link to='/Digital Twins'>Digital Twins</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <FiShoppingCart className='w-5 h-5   text-[#FD5A2A]' />
                                        <Link to='/E-Commerce'>E-Commerce</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <FaBookReader className='w-5 h-5   text-[#FD5A2A]' />
                                        <Link to='/ERP'>ERP</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <MdElectricalServices className='w-5 h-5   text-[#FD5A2A]' />
                                        <Link to='/Energy Monitoring System'>Energy Monitoring System</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="mt-3 text-[15px]">
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <GrMoney className='w-5 h-5   text-[#FD5A2A]' />
                                        <Link to='/Finance And Payroll'>Finance and Accounting</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <BsFire className='w-5 h-5   text-[#FD5A2A]' />
                                        <Link to='/Fire Compliance System'>Fire Compliance System</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <MdPersonSearch className='w-5 h-5   text-[#FD5A2A]' />
                                        <Link to='/Hr and Payroll' >Hr and Payroll</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <CgSmartHomeWashMachine className='w-5 h-5   text-[#FD5A2A]' />
                                        <Link to='/Machine Failure Prediction'>Machine Failure Prediction</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <MdPrecisionManufacturing className='w-7 h-7   text-[#FD5A2A]' />
                                        <Link to='/Manufacturing Execution System'>Manufacturing Execution System</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <TbReportAnalytics className='w-7 h-7 mt-1.5  text-[#FD5A2A]' />
                                        <Link to='/Manufacturing Analytics Software'>Manufacturing Analytics Software</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <TbDeviceDesktopAnalytics className='w-6 h-6 mt-1.5  text-[#FD5A2A]' />
                                        <Link to='/Predictive Maintenance System'>Predictive Maintenance System</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <MdOutlineProductionQuantityLimits className='w-6 h-6 mt-1.5  text-[#FD5A2A]' />
                                        <Link to='/Production Monitoring System'>Production Monitoring System</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="mt-3 text-[15px]">
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <MdElectricalServices className='w-5 h-5   text-[#FD5A2A]' />
                                        <Link to='/Energy Monitoring System'>Product Lifecycle Management</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <GrValidate className='w-5 h-5 mt-1.5 text-[#FD5A2A]' />
                                        <Link to='/Quality Management Software'>Quality Management Software</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <TbCloudCog className='w-5 h-5  text-[#FD5A2A]' />
                                        <Link to='/SaaS'>SaaS</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <RiHomeWifiFill className='w-5 h-5  text-[#FD5A2A]' />
                                        <Link to='/Smart Home Automation'>Smart Home Automation</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <FiLink className='w-5 h-5  text-[#FD5A2A]' />
                                        <Link to='/Supply Chain Management'>Supply Chain Management</Link>
                                    </li>
                                    <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                        <MdOutlineSolarPower className='w-5 h-5 text-[#FD5A2A] ' />
                                        <Link to='/Solar Monitoring'>Solar Monitoring System</Link>
                                    </li>
                                </ul>
                            </div>*/}
                            <Link to='/Contact-us'><li className="flex justify-center mt-5 hover:bg-[#FD5A2A] w-80 py-1.5 rounded-lg mx-auto hover:text-white" onClick={toggleMegaMenu}>
                                Contact Us
                            </li></Link>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
