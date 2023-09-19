import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import {v4} from 'uuid'
import {projectSlides} from '../../utils'
import { useState } from 'react';
import projektSlider from './projektSlider.module.css'


export default function ProjectSlider(){
    const [isMouseOn,setIsMouseOn] = useState(false);
    console.log(projectSlides)

    function ItemRender(title,text,linkValue,link){
        return (
            <div className='itemInfo'>
                <h5>{title}</h5>
                <p>{text}</p>
                <a href={link}>{linkValue}</a>
            </div>
        )
    }
    function handleOnMouse(){
        setIsMouseOn(true)
    }

    return(
        <div className={projektSlider.projectSwiper}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {projectSlides.map((el)=>{
            return(
                <SwiperSlide key={v4()}>
                    <div className={projektSlider.itemImg} style={{backgroundImage:`url(${el.img})`}}></div>
                </SwiperSlide>
            )
        })}
      </Swiper>
        </div>
    )
}