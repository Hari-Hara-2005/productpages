import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Asset_Management_System from './Pages/Asset Management System';
import CMS from './Pages/CMS';
import CRM from './Pages/CRM';
import Delivery_Solution from './Pages/Delivery Solution';
import Digital_Manufacturing_Excellence from './Pages/Digital Manufacturing Excellence';
import Digital_Twins from './Pages/Digital Twins';
import E_Commerce from './Pages/E-Commerce';
import ERP from './Pages/ERP';
import Energy_Monitoring_System from './Pages/Energy Monitoring System';
import Finance_And_Payroll from './Pages/Finace And Accounting';
import Fire_Compliance_System from './Pages/Fire Compliance System';
import Hr_and_Payroll from './Pages/Hr and Payroll';
import Machine_Failure_Prediction from './Pages/Machine Failure Prediction';
import Predictive_Maintenance_System from './Pages/Predictive Maintenance System';
import Production_Monitoring_System from './Pages/Production Monitoring System';
import Quality_Management_Software from './Pages/Quality Management Software (QMS)';
import SaaS from './Pages/SaaS';
import Smart_Home_Automation from './Pages/Smart Home Automation';
import Solar_Monitoring from './Pages/Solar Monitoring System';
import Supply_Chain_Management from './Pages/Supply Chain Management';
import Hero from './Hero';
import Product from './Product';
import Manufacturing_Execution_System from './Pages/Manufacturing Execution System (MES)';
import Manufacturing_Analytics_Software from './Pages/Manufacturing Analytics Software';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/Products' element={<Product />} />
        <Route path='/AssetManagementSystem' element={<Asset_Management_System />} />
        <Route path='/CMS' element={<CMS />} />
        <Route path='/CRM' element={<CRM />} />
        <Route path='/Delivery Solution' element={<Delivery_Solution />} />
        <Route path='/Digital Manufacturing Excellence' element={< Digital_Manufacturing_Excellence />} />
        <Route path='/Digital Twins' element={< Digital_Twins />} />
        <Route path='/E-Commerce' element={< E_Commerce />} />
        <Route path='/ERP' element={<ERP />} />
        <Route path='/Energy Monitoring System' element={<Energy_Monitoring_System />} />
        <Route path='/Finance And Payroll' element={<Finance_And_Payroll />} />
        <Route path='/Fire Compliance System' element={<Fire_Compliance_System />} />
        <Route path='/Hr and Payroll' element={<Hr_and_Payroll />} />
        <Route path='/Machine Failure Prediction' element={<Machine_Failure_Prediction />} />
        <Route path='/Manufacturing Execution System' element={<Manufacturing_Execution_System />} />
        <Route path='/Manufacturing Analytics Software' element={<Manufacturing_Analytics_Software />} />
        <Route path='/CRM' element={<CRM />} />
        <Route path='/Predictive Maintenance System' element={<Predictive_Maintenance_System />} />
        <Route path='/Production Monitoring System' element={< Production_Monitoring_System />} />
        <Route path='/Quality Management Software' element={<Quality_Management_Software />} />
        <Route path='/SaaS' element={<SaaS />} />
        <Route path='/Smart Home Automation' element={<Smart_Home_Automation />} />
        <Route path='/Solar Monitoring' element={<Solar_Monitoring />} />
        <Route path='/Supply Chain Management' element={<Supply_Chain_Management />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         centeredSlides={false}
//         slidesPerGroupSkip={1}
//         grabCursor={true}
//         keyboard={{
//           enabled: true,
//         }}
//         breakpoints={{
//           769: {
//             slidesPerView: 2,
//             slidesPerGroup: 2,
//           },
//         }}
//         scrollbar={true}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Keyboard, Scrollbar, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
