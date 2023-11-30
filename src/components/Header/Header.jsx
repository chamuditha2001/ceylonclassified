
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { IconButton } from '@mui/material';
import { useState } from 'react';




const Header = () => {
console.log('Header Re-renderring');
const [isSearch, setIsSearch] = useState(false)

  return (
    <header className='fixed top-0 left-0 z-[100] w-full p-1 bg-white-500 bg-slate-200 flex items-center justify-between drop-shadow-header-shadow'>

    {/*header left*/}
    <div className='flex items-center '>
      <IconButton sx={{color:'blue'}}>
      <MenuIcon className='text-[#0174BE] cursor-pointer'/>


      </IconButton>
      
     {/*menu*/}
     
      <h1  style ={{
          display:window.innerWidth <640? isSearch? 'none':
          'inline-block':'inline-block',
          
      }}
      className=' ml-2 text-sm font-bold '>
       <span className='text-[#0c356A] '>CEYLON</span>  <span className='text-[#0174BE]'>CLASSIFIED</span>
      </h1>

    {/*search div*/}

      <div 
      style ={{
        backgroundColor:window.innerWidth <640? isSearch? '#ffffff':
        'inherit':'#ffffff',
        
    }}
      className='overflow-hidden ml-2 flex items-center rounded-full bg-[#ffffff]'>
        <input 
        type='text' 
        placeholder="What are you looking for"
        style ={{
          display:window.innerWidth <640? isSearch? 'inline-block':
          'none':'inline-block',transition:'all 400ms ease-in-out',
          
      }}
        className=' hidden sm:inline-block ml-3 outline-none p-2 font-semibold text-sm w-[200p] bg-inherit'/>
     
     <IconButton onClick ={()=>{
      if(window.innerWidth<640){
        setIsSearch(!isSearch)

      }}} sx={{color:'blue'}}>
      <SearchIcon sx={{
        color:window.innerWidth <640? isSearch? '#0174BE':
        'black':'#0174BE',
      }}
      
      />
     </IconButton>
        
       
        
      </div>
    </div>


    {/*header right*/}

    <IconButton sx={{color:'blue'}}>

<div className='relative  p-1 '>
<AddShoppingCartOutlinedIcon className='text-[#0174BE] cursor-pointer'/>

<div className='absolute top-[2px] right-0 text-[7px] bg-slate-300 text-black p-[2px]  m-0  font-semibold flex items-center justify-center w-3 h-3 rounded-full'>2</div>
</div>

      
      </IconButton>
    


    </header>
    );
  
};

export default Header;