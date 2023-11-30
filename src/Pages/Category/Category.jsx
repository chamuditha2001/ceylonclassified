import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";



const CategoryArr =[
  {
    imageUrl:'https://mistermobile.lk/wp-content/uploads/2022/08/iphone-x-silver.jpg',
    tittle:'Category Tittle 1',
    categoryId:'category1'
  },

  {
    imageUrl:'https://mistermobile.lk/wp-content/uploads/2022/08/iphone-x-silver.jpg',
    tittle:'Category Tittle 2',
    categoryId:'category1'
  },

  {
    imageUrl:'https://mistermobile.lk/wp-content/uploads/2022/08/iphone-x-silver.jpg',
    tittle:'Category Tittle 3',
    categoryId:'category1'
  },

  {
    imageUrl:'https://mistermobile.lk/wp-content/uploads/2022/08/iphone-x-silver.jpg',
    tittle:'Category Tittle 4',
    categoryId:'category1'
  },

  {
    imageUrl:'https://mistermobile.lk/wp-content/uploads/2022/08/iphone-x-silver.jpg',
    tittle:'Category Tittle 5',
    categoryId:'category1'
  },

  {
    imageUrl:'https://mistermobile.lk/wp-content/uploads/2022/08/iphone-x-silver.jpg',
    tittle:'Category Tittle 6',
    categoryId:'category1'
  },

  {
    imageUrl:'https://mistermobile.lk/wp-content/uploads/2022/08/iphone-x-silver.jpg',
    tittle:'Category Tittle 7',
    categoryId:'category1'
  },

  
]


const Category = () => {
    return (
    <div className=" py-[100px] px-5 w-full h-screen overflow-y-scroll ">
       <section
       
       style={{
      boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px'
    }}
    
    className="w-full p-2 "
    >

<h1 className='text-lg font-bold mt-2 ml-5 mb-3 text-[#0c356A] '>Main Categories</h1>
<div className="grid grid-cols-3 grid-rows-[auto] gap-5">
  {CategoryArr.map(({imageUrl,tittle},index,categoryId)=><CategoryItems key={index} imageUrl={imageUrl} tittle={tittle} 
  
  categoryId={categoryId}
  />)}




       </div>
       </section>
        </div >
    );
  };
  
  export default Category;

  const CategoryItems =({imageUrl,tittle,categoryId})=> (

    <Link to={`/Category/${categoryId}`}>
  <IconButton sx={{
    color:'#0c356A',
    padding:'1px',
    borderRadius:'6px',
  }}>



  
  <div style={{
      boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px'
    }}
     className='m-1 w-full py-6 px-3 rounded-sm border-3 border-slate-800 flex flex-col items-center'>
    <img src={imageUrl} alt={tittle}
    className="rounded-full w-[50px] h-[50px]"/>


    <h2 className="text-[10px] text-[#0c356A] mt-3 font-bold">{tittle}</h2>
  </div>  </IconButton> </Link>

  )