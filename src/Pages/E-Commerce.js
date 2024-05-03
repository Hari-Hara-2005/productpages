import React from 'react'
import Asset_bg from "../Assets/bg-5.jpg"
import Asset from "./Deatils";
import Navbar from '../Navbar'
import Footer from '../Footer'
import InpuField from '../InpuField';
const E_Commerce = () => {
    return (
        <div>
            <Navbar />
            <div className=' bg-black' >
                {/* Home Section */}
                <section className='lg:py-36 py-16'>
                    <div className='lg:flex lg:mx-16'>
                        <div data-aos="zoom-in" data-aos-duration="3000" className='lg:w-1/2 p-5 my-auto'>
                            <h1 className='lg:text-6xl md:text-3xl text-xl  lg:text-start text-center   font-bold font-sans text-[#FD5A2A] lg:leading-[5rem] leading-10'>  E-Commerce<span className='lg:text-6xl text-xl md:text-3xl lg:text-start text-white text-center font-bold font-sans lg:leading-[4.5rem] md:mt-3 lg:mt-0  leading-9 tracking-wide'> that Scale With Your Business</span></h1>
                            <p className='lg:text-lg  lg:mt-5 mt-3 lg:leading-[1.9rem] leading-6.5 text-gray-300 tracking-wide  text-justify'>Accelerate your online sales and grow your e-commerce business with AattralOne's E-Commerce solution. Our comprehensive platform provides everything you need to create, launch, and manage your online store, from product catalog management to payment processing and order fulfillment.</p>
                        </div>
                        <div className='lg:w-1/2 my-auto mx-5 lg:mx-0'>
                            <div data-aos="zoom-in" data-aos-duration="3000" className=''>
                                <img className=' my-auto lg:w-[90%] lg:h-[520px] md:w-[65%] mx-auto rounded-lg' src={Asset_bg} alt='img' />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Benefits Section */}
                <section className=' lg:py-24 py-10'>
                    <div className=''>
                        <h1 data-aos="zoom-in" data-aos-duration="3000" className='text-center lg:text-4xl md:text-2xl text-xl text-white font-bold font-sans lg:leading-[3rem]'>Our Full-Service <span className='text-[#FD5A2A]' >E-Commerce</span><br />Benefits</h1>
                    </div>
                    <div className='lg:p-10 p-5 mt-5'>
                        <div className='flex flex-wrap justify-center gap-16'>
                            {Asset.slice(78, 83).map((assetItem, index) => (
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
                    {Asset.slice(83, 91).map((assetItem, index) => (
                        <div className='md:flex lg:px-20 md:px-10 px-5 md:mb-32 mb-10 gap-10' style={{ flexDirection: index % 2 == 0 ? 'row' : 'row-reverse' }} >
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
                                <p className='lg:text-xl lg:mt-4 md:font-semibold lg:leading-8 text-[#747578] ' style={{ letterSpacing: '0.5px' }}>Contact us today to discover how AattralOne's E-Commerce solution can help you launch, manage, and grow your online store effectively and efficiently.</p>
                            </div>
                            <InpuField />
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

export default E_Commerce
