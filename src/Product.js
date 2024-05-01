import React from 'react'
import Navbar from './Navbar'
import { GiTank } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { IoMdAirplane } from "react-icons/io";
import { FaTruckLoading } from "react-icons/fa";
import { MdGrass } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiBankFill } from "react-icons/ri";
import { TbPlant2 } from "react-icons/tb";
import { BsShop } from "react-icons/bs";
import { MdPrecisionManufacturing } from "react-icons/md";
import { GiOilPump } from "react-icons/gi";
import { MdBookOnline } from "react-icons/md";
import { SlChemistry } from "react-icons/sl";
import { GiRolledCloth } from "react-icons/gi";
import { FaHotel } from "react-icons/fa6";
import { MdEmojiTransportation } from "react-icons/md";
import { MdSportsMartialArts } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Product = () => {
    return (
        <div>
            <Navbar />
            <div className='grid lg:grid-cols-8 grid-cols-2 md:grid-cols-4 gap-5 lg:px-10 px-7 py-36' >
                <div className='bg-[#EF2A82] rounded-2xl shadow-xl '>
                    <Link to='/Asset Management System' className='block'> <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 mt-5  lg:mb-2 mb-3'>
                        <MdGrass className=' w-fit lg:text-6xl text-5xl text-[#EF2A82] p-3 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white px-2 text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Asset Management System</h1>
                    </Link></div>
                <div className='bg-[#F47507] rounded-2xl shadow-xl'>
                    <Link to='/CMS' className='block'>
                        <div className='bg-white  rounded-full w-fit mx-auto mt-5 lg:mb-7 mb-5'>
                            <FaTruckLoading className=' w-fit lg:text-6xl text-5xl text-[#F47507] p-2 ' />
                        </div>
                        <h1 className='text-center  font-bold text-white lg:mb-3 mb-5  text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>CMS</h1>
                    </Link></div>
                <div className='bg-[#8F63DF] rounded-2xl shadow-xl p-5'>
                    <Link to='/CRM' className='block'>
                        <div className='bg-white rounded-full w-fit mx-auto lg:mt-3  mb-2'>
                            < IoMdAirplane className=' w-fit lg:text-6xl text-5xl text-[#8F63DF] p-2 ' />
                        </div>
                        <h1 className='text-center font-bold text-white text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>CRM</h1>
                    </Link></div>

                <div className='bg-[#1BDE9C] rounded-2xl shadow-xl'>
                    <Link to='/Delivery Solution' className='block'>
                        <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                            <SlChemistry className=' w-fit lg:text-6xl text-5xl text-[#1BDE9C] lg:p-2 p-1 ' />
                        </div>
                        <h1 className='text-center font-bold text-white  text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Delivery Solution </h1>
                    </Link></div>

                <div className='bg-[#416D19] rounded-2xl shadow-xl '>
                    <Link to='/Digital Manufacturing Excellence' className='block'>  <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-4 mt-5 mb-3'>
                        <GiTank className=' w-fit lg:text-6xl text-5xl text-[#416D19] p-2 ' />
                    </div>
                        <h1 className='text-center font-bold text-white px-2 text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Digital Manufacturing Excellence</h1>
                    </Link></div>
                <div className='bg-[#5D535E] rounded-2xl shadow-xl'>
                    <Link to='/Digital Twins' className='block'>
                        <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-5'>
                            <RiGraduationCapFill className=' w-fit lg:text-6xl text-5xl text-[#5D535E] p-2 ' />
                        </div>
                        <h1 className='text-center font-bold text-white px-2 lg:mb-3 mb-4 text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Digital Twins</h1>
                    </Link></div>
                <div className='bg-[#128277] rounded-2xl shadow-xl'>
                    <Link to='/E-Commerce' className='block'>  <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-4 mt-5 mb-3'>
                        <GiElectric className=' w-fit lg:text-6xl text-5xl text-[#128277] p-2 ' />
                    </div>
                        <h1 className='text-center font-bold text-white px-1 text-xs lg:text-sm lg:mb-0 mb-6' style={{ letterSpacing: '0.5px' }}>E-Commerce</h1>
                    </Link></div>
                <div className='bg-[#845EC2] rounded-2xl shadow-xl '>
                    <Link to='/ERP' className='block'>  <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-3'>
                        <RiBankFill className=' w-fit lg:text-6xl text-5xl text-[#845EC2] p-2  ' />
                    </div>
                        <h1 className='text-center  font-bold text-white text-xs lg:text-sm lg:mb-0 mb-5' style={{ letterSpacing: '0.5px' }}>ERP</h1>
                    </Link></div>
                <div className='bg-[#60C9C5] rounded-2xl shadow-xl '>
                    <Link to='/Energy Monitoring System' className='block'>  <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-4 mt-5 mb-3'>
                        <TbPlant2 className=' w-fit lg:text-6xl text-5xl text-[#60C9C5] p-2 ' />
                    </div>
                        <h1 className='text-center font-bold text-white px-1 mb-3 text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Energy Monitoring System</h1>
                    </Link></div>

                <div className='bg-[#9BC0C1] rounded-2xl shadow-xl'>
                    <Link to='/Finance And Payroll' className='block'>  <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-3'>
                        <FaHotel className=' w-fit lg:text-6xl text-5xl text-[#9BC0C1] p-4 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white lg:mb-5 mb-6 text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Finance And Payroll</h1>
                    </Link>
                </div>

                <div className='bg-[#011A27]  rounded-2xl shadow-xl'>
                    <Link to='/Fire Compliance System' className='block'> <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <FaShippingFast className=' w-fit lg:text-6xl text-5xl text-[#011A27] p-3 ' />
                    </div>
                        <h1 className='text-center font-bold text-white text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Fire Compliance System</h1>
                    </Link></div>

                <div className='bg-[#344D90] rounded-2xl shadow-xl'>
                    <Link to='/Hr and Payroll' className='block'>  <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <MdPrecisionManufacturing className=' w-fit lg:text-6xl text-5xl text-[#344D90] p-2 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white text-xs lg:text-sm mb-6 lg:mb-0' style={{ letterSpacing: '0.5px' }}>Hr and Payroll</h1>
                    </Link></div>

                <div className='bg-[#5CC5EF] rounded-2xl shadow-xl '>
                    <Link to='/Machine Failure Prediction' className='block'> <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <FaHandHoldingWater className=' w-fit lg:text-6xl text-5xl text-[#5CC5EF] p-2 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Machine Failure Prediction</h1>
                    </Link>
                </div>

                <div className='bg-[#9A9EAB] rounded-2xl shadow-xl'>
                    <Link to='/Predictive Maintenance System' className='block'> <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <GiOilPump className=' w-fit lg:text-6xl text-5xl text-[#9A9EAB] p-2 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white text-xs lg:text-sm mb-5 lg:mb-0' style={{ letterSpacing: '0.5px' }}>Predictive Maintenance System</h1>
                    </Link></div>
                <div className='bg-[#E7552C]  rounded-2xl shadow-xl '>
                    <Link to='/Production Monitoring System' className='block'><div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <BsShop className=' w-fit lg:text-6xl text-5xl text-[#E7552C] p-4 ' />
                    </div>
                        <h1 className='text-center font-bold text-white text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Production Monitoring System
                        </h1>
                    </Link></div>
                <div className='bg-[#0088F0]  rounded-2xl shadow-xl'>
                    <Link to='/Quality Management Software' className='block'> <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <MdSportsMartialArts className=' w-fit lg:text-6xl text-5xl text-[#0088F0] p-3 ' />
                    </div>
                        <h1 className='text-center font-bold text-white text-xs lg:text-sm mb-5 lg:mb-0' style={{ letterSpacing: '0.5px' }}>Quality Management Software</h1>
                    </Link></div>


                <div className='bg-[#F52549] lg:hidden rounded-2xl shadow-xl '>
                    <Link to='/SaaS' className='block'><div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <GrTechnology className=' w-fit lg:text-6xl text-5xl text-[#F52549] p-4 ' />
                    </div>
                        <h1 className='text-center font-bold text-white text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>SaaS</h1>
                    </Link></div>
                <div className='bg-[#FA6775]  rounded-2xl lg:hidden shadow-xl '>
                    <Link to='/Smart Home Automation' className='block'> <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <GiRolledCloth className=' w-fit lg:text-6xl text-5xl text-[#FA6775] p-4 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white text-xs lg:text-sm mb-5 lg:mb-0' style={{ letterSpacing: '0.5px' }}>Smart Home Automation
                        </h1>
                    </Link></div>

                <div className='bg-[#FFD64D]  rounded-2xl lg:hidden shadow-xl'>
                    <Link to='/Solar Monitoring' className='block'><div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <MdEmojiTransportation className=' w-fit lg:text-6xl text-5xl text-[#FFD64D] p-2 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white px-3 text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Solar Monitoring</h1>
                    </Link></div>
                <div className='bg-[#9BC01C]  rounded-2xl lg:hidden shadow-xl'>
                    <Link to='/Supply Chain Management' className='block'> <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <MdBookOnline className=' w-fit lg:text-6xl text-5xl text-[#9BC01C] p-3 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white mb-5 text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Supply Chain Management</h1>
                    </Link></div>
            </div >
            <div className='lg:flex hidden justify-center gap-5 mt-5'>

                <div className='bg-[#F52549] lg:w-[10.5%] w-1/2 rounded-2xl shadow-xl '>
                    <Link to='/Manufacturing Execution System' className='block'><div className='bg-white rounded-full w-fit mx-auto mt-10 mb-5'>
                        <GrTechnology className=' w-fit lg:text-6xl text-5xl text-[#F52549] p-4 ' />
                    </div>
                        <h1 className='text-center font-bold text-white text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Manufacturing Execution System</h1>
                    </Link></div>
                <div className='bg-[#FA6775] lg:w-[10.5%] w-1/2 rounded-2xl shadow-xl '>
                    <Link to='/Manufacturing Analytics Software' className='block'> <div className='bg-white rounded-full w-fit mx-auto mt-10 mb-5'>
                        <GiRolledCloth className=' w-fit lg:text-6xl text-5xl text-[#FA6775] p-4 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Manufacturing Analytics Software
                        </h1>
                    </Link></div>

                <div className='bg-[#FFD64D] lg:w-[10.5%] w-1/2 rounded-2xl shadow-xl'>
                    <Link to='/SaaS' className='block'><div className='bg-white rounded-full w-fit mx-auto mt-10 mb-5'>
                        <MdEmojiTransportation className=' w-fit lg:text-6xl text-5xl text-[#FFD64D] p-2 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white px-3 text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>SaaS</h1>
                    </Link></div>
                <div className='bg-[#9BC01C] lg:w-[10.5%] w-1/2 rounded-2xl shadow-xl'>
                    <Link to='/Smart Home Automation' className='block'><div className='bg-white rounded-full w-fit mx-auto mt-10 mb-5'>
                        <MdBookOnline className=' w-fit lg:text-6xl text-5xl text-[#9BC01C] p-3 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white mb-5 text-xs lg:text-sm' style={{ letterSpacing: '0.5px' }}>Smart Home Automation</h1>
                    </Link></div>
                <div className='bg-[#9A9EAB] rounded-2xl shadow-xl'>
                    <Link to='/Solar Monitoring' className='block'> <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <GiOilPump className=' w-fit lg:text-6xl text-5xl text-[#9A9EAB] p-2 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white text-xs lg:text-sm mb-5 lg:mb-0' style={{ letterSpacing: '0.5px' }}>Solar Monitoring</h1>
                    </Link></div>
                <div className='bg-[#9A9EAB] rounded-2xl shadow-xl'>
                    <Link to='/Supply Chain Management' className='block'> <div className='bg-white rounded-full w-fit mx-auto lg:mt-10 lg:mb-5 mt-5 mb-4'>
                        <GiOilPump className=' w-fit lg:text-6xl text-5xl text-[#9A9EAB] p-2 ' />
                    </div>
                        <h1 className='text-center  font-bold text-white text-xs lg:text-sm mb-5 lg:mb-0' style={{ letterSpacing: '0.5px' }}>Supply Chain Management</h1>
                    </Link></div>
            </div>
        </div>
    )
}

export default Product
