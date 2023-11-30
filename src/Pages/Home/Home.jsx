import { useState } from "react";
import Ads from "./Ads";
import Product from "./Product";
import Loading from "../../components/Loading/Loading";


const Home = () => {
const[loading,setLoading]=useState(false);


if (loading) return <Loading/>;



  return(
  <div className="py-[100px] px-5 w-full h-screen overflow-y-scroll">
    <Ads/>
    <Product title="Trending Products" rowsCount={1} slidesPerView={3}/>
    <Product title="Vehicles" rowsCount={1} slidesPerView={3}/>
    <Product title="Electronic Items" rowsCount={1} slidesPerView={3}/>
    </div>
  );
};

export default Home;