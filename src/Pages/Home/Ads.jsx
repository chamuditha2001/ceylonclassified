import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';

const adsElement = [
  {
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/013/421/067/non_2x/black-friday-sale-banner-modern-minimal-design-with-black-and-purple-typography-template-for-promotion-advertising-web-social-and-fashion-ads-illustration-free-vector.jpg'
  },
  {
    imageUrl: 'https://cdn1.epicgames.com/ue/product/Screenshot/Page2-1920x1080-18671f5234dae60b435c05206f06f313.png?resize=1&w=1920'
  },
  {
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/004/941/340/non_2x/hydrating-facial-charcoal-cream-for-annual-sale-or-festival-sale-black-cream-mask-bottle-isolated-on-glitter-particles-background-for-product-presentation-graceful-cosmetic-ads-illustration-vector.jpg'
  },
  {
    imageUrl: 'https://media.licdn.com/dms/image/C4D12AQHDTi5QxhFgJw/article-cover_image-shrink_720_1280/0/1599718214367?e=2147483647&v=beta&t=a6D-HeQ6UiRcEklr-XqODZYdkot7IkOfoQDdd4jCw8Q'
  },
  {
    imageUrl: 'https://t4.ftcdn.net/jpg/02/54/26/61/360_F_254266198_5NbM7Cv3s93lYdQscnUKmizmAUKDY3YU.jpg'
  },
]


const Ads = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay]}
    className='rounded-lg overflow-hidden'
   
  >
    {adsElement.map(({imageUrl},index)=> (

      <SwiperSlide key={index}>
        <AdUnit imageUrl={imageUrl} id={index}/>
      </SwiperSlide>
    ))}
    </Swiper>
  );
};

export default Ads;

const AdUnit =({imageUrl,id})=>(

<img src={imageUrl}
      alt={'ad${id}'} 
      className='w-full object-contain rounded-lg'/>
);