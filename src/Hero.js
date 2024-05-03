import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
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
const Hero = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <Navbar />
            <div class="py-36">
                <div class="md:grid md:grid-cols-3 mx-5 gap-12 text-black ">
                    <div>
                        <ul class="text-[15px]">
                            <li className='my-3 flex gap-2  hover:text-[#FD5A2A]'>
                                <FaSwatchbook className='w-5 h-5    text-[#FD5A2A]' />
                                <Link to='/AssetManagementSystem' className='mt-1' onClick={scrollToTop} >Asset Management System</Link>
                            </li>
                            <li className='py-3 flex gap-2  hover:text-[#FD5A2A]'>
                                <SiOctobercms className='w-5 h-5    text-[#FD5A2A]' />
                                <Link to='/CMS' onClick={scrollToTop}>CMS</Link>
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

    )
}

export default Hero
