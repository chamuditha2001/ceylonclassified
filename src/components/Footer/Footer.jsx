import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const Footer = () => {
const[whoIsClick,setWhoIsClick]=useState({
  Home:true,
  Category:false,
  Profile:false
});

  return (
  
  <footer className='fixed bottom-0 left-0 z-[100] w-full p-1 bg-slate-200 flex items-center justify-between drop-shadow-header-shadow'>
<FooterIcon clickFun={{whoIsClick,setWhoIsClick}} Icon={HomeOutlinedIcon} IconText='Home'/>
<FooterIcon clickFun={{whoIsClick,setWhoIsClick}} Icon={AppsOutlinedIcon} IconText='Category'/>
<FooterIcon clickFun={{whoIsClick,setWhoIsClick}} Icon={AccountCircleOutlinedIcon} IconText='Profile'/>

    </footer>
  );
};

export default Footer;

const FooterIcon = ({Icon,IconText,clickFun })=>{

  const clickHandle =() =>{

    const obj = 
      {
        Home:true,
        Category:false,
        Profile:false
      }
    if(IconText==="Category"){
      obj.Category=true;
      obj.Home=false;
      obj.Profile=false;
    }else if(IconText==='Profile'){
      obj.Home=false;
      obj.Category=false;
      obj.Profile=true;
    }

    clickFun.setWhoIsClick(obj);
  };


  return (

<Link to={IconText==="Home"?'/':`/${String(IconText).toLocaleLowerCase()}`}>
<IconButton sx={{
  padding:'4px',
  paddingTop:'0',
  borderRadius:'5px',
  color:'blue'
}}>

<div
  style={{
    color:clickFun.whoIsClick[IconText] && '#0c356A',
   
  }}
 

  
  className='text-[#0174BE] hover:text-[#0c356A] transition-all duration-300' onClick={clickHandle} >
  <Icon/>
<p className='text-xs font-semibold'>{IconText}</p>
  </div>

</IconButton></Link>
)};
