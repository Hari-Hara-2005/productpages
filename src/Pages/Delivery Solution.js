import React from 'react'
import Asset_bg from "../Assets/bg-5.jpg"
import Asset from "./Deatils";
import Navbar from '../Navbar'
import Footer from '../Footer'
const Delivery_Solution = () => {
    return (
        <div>
            <Navbar />
            <div className=' bg-black' >
                {/* Home Section */}
                <section className='lg:py-16 '>
                    <div className='flex mx-16'>
                        <div data-aos="zoom-in" data-aos-duration="3000" className='lg:w-1/2 p-5 lg:mt-28   cursor-pointer'>
                            <h1 className='lg:text-6xl text-2xl md:text-4xl lg:text-start text-center  font-bold font-sans text-[#FD5A2A] lg:leading-[5rem] leading-10'>  Delivery Solution<span className='lg:text-6xl text-xl md:text-2xl lg:text-start text-white text-center font-bold font-sans lg:leading-[4.5rem] md:mt-3 lg:mt-0  leading-9 tracking-wide'> that Scale With Your Business</span></h1>
                            <h1 className='lg:text-6xl text-xl md:text-2xl lg:text-start text-white text-center font-bold font-sans lg:leading-[4.5rem] md:mt-3 lg:mt-0  leading-9 tracking-wide'></h1>
                            <p className='lg:text-lg lg:mt-5 mt-3 lg:leading-[1.9rem] leading-6.5 text-gray-300 tracking-wide lg:text-start text-justify'>Streamline your delivery operations and provide exceptional customer service with AattralOne's Delivery Solution. Our comprehensive platform offers tools for route optimization, delivery tracking, driver management, and customer communication to ensure smooth and efficient delivery processes.</p>
                        </div>
                        <div className='lg:w-1/2 lg:mt-16'>
                            <div data-aos="zoom-in" data-aos-duration="3000" className=''>
                                <img className=' my-auto lg:w-[90%] h-[520px] md:w-[65%] mx-auto rounded-lg' src={Asset_bg} alt='img' />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Benefits Section */}
                <section className=' lg:py-24 py-10'>
                    <div>
                        <h1 data-aos="zoom-in" data-aos-duration="3000" className='text-center lg:text-4xl md:text-2xl text-xl text-white font-bold font-sans lg:leading-[3rem]'>Our Full-Service <span className='text-[#FD5A2A]' >Delivery Solution</span><br />Benefits</h1>
                    </div>
                    <div className='lg:p-10 p-5 mt-5'>
                        <div className='flex flex-wrap justify-center gap-16'>
                            {Asset.slice(51, 56).map((assetItem, index) => (
                                <div key={index} data-aos="fade-right" data-aos-duration="3000" className='rounded-3xl lg:p-10 p-8 shadow-xl box border-4 border-black hover:border-[#FD5A2A] hover:shadow-[#FD5A2A]'>
                                    <div className='text-gray-400 hover:text-white '>
                                        <img src={assetItem.Img} className='box-image filter brightness-50 hover:brightness-75' alt='Img' />
                                        <h2 className='font-bold mt-5 font-sans lg:text-2xl text-lg text-[#FD5A2A] tracking-wide'>{assetItem.Title}</h2>
                                        <p className='mt-5 leading-6 tracking-wide font-semibold text-lg'>{assetItem.Text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
                {/*Key Features Section */}
                <section>
                    {Asset.slice(56, 64).map((assetItem, index) => (
                        <div className='md:flex md:px-20 px-5 md:mb-32 mb-10 gap-10' style={{ flexDirection: index % 2 == 0 ? 'row' : 'row-reverse' }} >
                            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000" className='  md:hidden mb-5'>
                                <img className='h-[300px] w-full rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-4 border-[#FD5A2A] mx-auto ' src={assetItem.Img} alt='img' />
                            </div>
                            <div key={index} data-aos="zoom-in-right" data-aos-duration="1500" className='md:w-1/2 my-auto ' >
                                <h1 className='lg:text-5xl  text-xl font-sans font-bold text-[#FD5A2A] tracking-wide lg:leading-[3.5rem]' >{assetItem.Title}</h1>
                                <p className='lg:text-lg lg:mt-6 mt-2 lg:text-start text-justify text-[#747578] tracking-wide lg:leading-8 leading-7' > {assetItem.Text}</p>
                            </div>
                            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000" className='md:w-1/2 hidden md:block'>
                                <img className='lg:h-[520px] w-full rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-4 border-[#FD5A2A] ' src={assetItem.Img} alt='img' />
                            </div>
                        </div>))}
                </section>
                {/* Input Section*/}
                <section >
                    <div data-aos="zoom-in" data-aos-duration="3000" className='lg:py-16'>
                        <div className='grid lg:grid-cols-2 lg:mx-36 lg:py-10  lg:my-16 my-8  mx-5 py-5 lg:gap-10    rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-[#FD5A2A] border-2' style={{ fontFamily: '"League spartan",sans-serif' }}>
                            <div className='my-auto lg:mx-2 mx-5 lg:p-12'>
                                <h1 className=' lg:text-5xl text-xl   font-bold text-[#FD5A2A]'>Request For Demo!</h1>
                                <p className='lg:text-xl lg:mt-4 md:font-semibold lg:leading-8 text-[#747578] ' style={{ letterSpacing: '0.5px' }}>Contact us today to learn how AattralOne's Delivery Solution can help you optimize asset performance, reduce downtime, and maximize ROI.</p>
                            </div>
                            <div className='lg:border-l-2  border-[#FD5A2A]'>
                                <div className='lg:mx-20 mx-5 my-5'>
                                    <form className='mt-5 text-white'>
                                        <div class="relative w-full min-w-[200px] h-10 mb-5">
                                            <input
                                                class="peer w-full h-full bg-transparent  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-2 hover:border-[#FD5A2A]  border-gray-300 focus:border-t-transparent text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-[#FD5A2A]"
                                                placeholder=" " required /><label
                                                    class="flex w-full h-full text-gray-400 select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-[#FD5A2A] before:border-blue-gray-200 peer-focus:before:!border-[#FD5A2A] after:border-blue-gray-200 peer-focus:after:!border-[#FD5A2A]">Name *
                                            </label>
                                        </div>
                                        <div class="relative w-full min-w-[200px] h-10 mb-5">
                                            <input
                                                class="peer w-full h-full bg-transparent  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-2 hover:border-[#FD5A2A]  border-gray-300 focus:border-t-transparent text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-[#FD5A2A]"
                                                placeholder=" " required /><label
                                                    class="flex w-full h-full text-gray-400 select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-[#FD5A2A] before:border-blue-gray-200 peer-focus:before:!border-[#FD5A2A] after:border-blue-gray-200 peer-focus:after:!border-[#FD5A2A]">Company Name *
                                            </label>
                                        </div>
                                        <div class="relative w-full min-w-[200px] h-10 mb-5">
                                            <input
                                                class="peer w-full h-full bg-transparent  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-2 hover:border-[#FD5A2A]  border-gray-300 focus:border-t-transparent text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-[#FD5A2A]"
                                                placeholder=" " required /><label
                                                    class="flex w-full h-full text-gray-400 select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-[#FD5A2A] before:border-blue-gray-200 peer-focus:before:!border-[#FD5A2A] after:border-blue-gray-200 peer-focus:after:!border-[#FD5A2A]">Company Email Address *
                                            </label>
                                        </div>
                                        <div class="relative w-full min-w-[200px] h-10 mb-5">
                                            <input
                                                class="peer w-full h-full bg-transparent  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-2 hover:border-[#FD5A2A]  border-gray-300 focus:border-t-transparent text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-[#FD5A2A]"
                                                placeholder=" " /><label
                                                    class="flex w-full h-full text-gray-400 select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-[#FD5A2A] before:border-blue-gray-200 peer-focus:before:!border-[#FD5A2A] after:border-blue-gray-200 peer-focus:after:!border-[#FD5A2A]">Mobile No *
                                            </label>
                                        </div>
                                        <div class="relative w-full min-w-[200px] h-10 mb-5">
                                            <input
                                                class="peer w-full h-full bg-transparent  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border-2 hover:border-[#FD5A2A]  border-gray-300 focus:border-t-transparent text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-[#FD5A2A]"
                                                placeholder=" " required /><label
                                                    class="flex w-full h-full text-gray-400 select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-[#FD5A2A] before:border-blue-gray-200 peer-focus:before:!border-[#FD5A2A] after:border-blue-gray-200 peer-focus:after:!border-[#FD5A2A]">Industries
                                            </label>
                                        </div>
                                        <div class="relative w-full min-w-[200px]  mt-4 ">
                                            <textarea
                                                class="peer w-full h-full resize-none lg:h-[6rem] bg-transparent  text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  focus:border-2 border hover:border-[#FD5A2A]  border-gray-300 focus:border-t-transparent text-sm px-3 py-2.5 rounded-md border-blue-gray-200 focus:border-[#FD5A2A]"
                                                placeholder=" " required></textarea><label
                                                    class="flex w-full h-full text-gray-400 select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-[#FD5A2A] before:border-blue-gray-200 peer-focus:before:!border-[#FD5A2A] after:border-blue-gray-200 peer-focus:after:!border-[#FD5A2A]">Special Note
                                            </label>
                                        </div>
                                        <div className='flex mt-6 lg:mt-10'>
                                            <button type='submit' className='mx-auto px-6 py-3 rounded-md font-semibold duration-500  text-white  hover:text-[#FD5A2A]  text-sm hover:bg-white  bg-[#FD5A2A] border-2 hover:border-[#FD5A2A] uppercase' >Request now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer Section */}
                <section >
                    <Footer />
                </section>
            </div >
        </div >
    )
}

export default Delivery_Solution
