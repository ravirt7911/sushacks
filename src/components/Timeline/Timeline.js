import React, { useState } from 'react'
import './Timeline.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProgressBar from "@ramonak/react-progress-bar";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Timeline = () => {
  const data = [
    {
      Heading:"Registration Begins",
      Time:"20-03-2024"
    },
    {
      Heading:"Registration Ends",
      Time:"26-03-2024"
    },
    {
      Heading:"Project Submission",
      Time:"29-04-2024"
    },
    {
      Heading:"Hackathon day",
      Time:"14-04-2024"
    },
    {
      Heading:"Lunch Time",
      Time:"14-04-2024 1:00pm"
    },
    {
      Heading:"Dinner",
      Time:"14-04-24 8:00pm"
    },
    {
      Heading:"snacks",
      Time:"14-04-24 5:00pm"
    },
    {
      Heading:"breakfast",
      Time:"15-04-24 9:00am"
    },
    {
      Heading:"Prize Announcement",
      Time:"15-04-2024"
    },
  ]
  const [active,setActive] = useState(0);
  return (
   <div className="container">
      <div className="card__data">
                              <h3 className="card__name" style={{transform:'scaleX(3)',transform:'scaleY(3)'}}>TimeLines</h3>
      </div>

      <div className="progresBar">
    <ProgressBar width='115px' borderRadius='0' animateOnRender = {true}completed={((active+1)*100)/(data.length)}  labelColor='green' bgColor='green'/>
    </div>

        <div className='phndiv'> 
        
            <img className='phn' src={require('./assets/phn.jpg')}/>
            <Swiper
             grabCursor = {true}
             className='card__container'
             centeredSlides = {true}
             onSlideChange={(e)=>setActive(e.activeIndex)}
        onActiveIndexChange={(e)=>console.log(e)}
        pagination = {{
          el: "swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        slidesPerView={3}
        navigation = {{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2, 
          },
          400: {
            slidesPerView: 1, 
          },
        }}
      >
                {
                  data.map((index,item)=>{
                        var i = item%2;
                        i++; 
                    return(
                      <SwiperSlide className='card__image' key={item}>
                          <div className='card__image'>
                              <img src={require(`./assets/img_${i}.png`)} className='card__img'/>  
                         </div>
                         <div className="card__data">
                              <h3 className="card__name">{index.Heading}</h3>
                              <p className="card__description">{index.Time}</p>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
                  <div className="swiper-button-next" style={{color:'white'}}>
               <i className="ri-arrow-right-s-line"></i>
       </div>
            
            <div className="swiper-button-prev" style={{color:'white'}}>
               <i className="ri-arrow-left-s-line"></i>
            </div>
            </Swiper>
        </div>

   </div>
  )
}

export default Timeline