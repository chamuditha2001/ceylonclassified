import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Mousewheel, Pagination } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { IconButton, Rating } from '@mui/material';

import'./style.css'



const productArr =[

{
    imageUrl:'https://mistermobile.lk/wp-content/uploads/2022/08/iphone-x-silver.jpg',
    price:'100',
    producttitle:'product title 1'
},

{
    imageUrl:'https://mistermobile.lk/wp-content/uploads/2022/08/iphone-x-silver.jpg',
    price:'100',
    producttitle:'product title 2'
},

{
    imageUrl:'https://mistermobile.lk/wp-content/uploads/2022/08/iphone-x-silver.jpg',
    price:'100',
    producttitle:'product title 3'
},

{
    imageUrl:'https://mistermobile.lk/wp-content/uploads/2022/08/iphone-x-silver.jpg',
    price:'100',
    producttitle:'product title 4'
},

{
    imageUrl:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
    price:'100',
    producttitle:'product title 5'
},

{
    imageUrl:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
    price:'100',
    producttitle:'product title 6'
},

{
    imageUrl:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
    price:'100',
    producttitle:'product title 7'
},

{
    imageUrl:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
    price:'100',
    producttitle:'product title 8'
},

{
    imageUrl:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
    price:'100',
    producttitle:'product title 9'
},

{
    imageUrl:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
    price:'100',
    producttitle:'product title 10'
},

{
    imageUrl:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
    price:'100',
    producttitle:'product title 11'
},

]
const Product = ({title,rowsCount,slidesPerView}) => {
  return (
    <section style={{
      boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px'
    }} className='w-full mt-6 p-2'>
        <h1 className='text-lg font-bold mt-2 ml-5 mb-3 text-[#0c356A] '>{title}</h1>

        <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Grid, Pagination,Mousewheel]}
       
      >

{productArr.map(({ imageUrl, price, producttitle }, index) => (
  <SwiperSlide key={index}>
    <ProductUnit imageUrl={imageUrl} 
    price={price} 
    producttitle={producttitle} 
    id={index} />
  </SwiperSlide>
))}

       
      </Swiper>

    </section>
  )
}

export default Product

const ProductUnit = ({imageUrl,price,producttitle})=>
<IconButton sx={{
    padding:'4px',
    borderRadius:'5px',
    color:'blue',
    margin:'3px',
    marginBottom:'30px',
}}>
<div className="w-full ">

<img src={imageUrl} alt={'product_unit${id}'} className="w-full object-contain"/>
    <h3 className='text-sm font-semibold text-[#0c356A] '>{producttitle}</h3>
    <Rating
     name={imageUrl}
     value={3.5}
     precision={0.1}
     size="small"
     readOnly
    />
    <h3 className='text-stone-900 font-bold text-lg'>Rs.{price}/=</h3>



   
</div>
</IconButton>