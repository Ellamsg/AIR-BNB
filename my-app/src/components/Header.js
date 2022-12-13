import React, { useState } from 'react'
import Button from './Button';
import { Link } from "react-router-dom"


const Header = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Place to stay",link:"/Nfts"},
      {name:"NFTs",link:"/"},
      {name:"Community",link:"/"},
    
    ];
    let [open,setOpen]=useState(false);
  return (
    <div>

<div className="opacity hidden left-0 bottom-0 right-0 fixed top-0  justify-center flex">
        <div className="flex flex-col bg-white gap-y-2 absolute top-8 bottom-0 pb-4 h-21 rounded-md ">
        <div className="border-2 flex flex-row justify-between px-4 py-3 rounded-md  border-boxwind">
          <p className="text-xl font-bold">connect wallet:</p>
          <p className="text-2xl">x</p>
          </div>
        <div className="mx-4">choose your prefered wallet</div>
        <div className="flex flex-row mx-4 gap-18 px-4 py-2 rounded-md justify-between border-2  border-boxwind"><img className="" src="image/long (1).png"/> <img className="w-2 mt-3 h-2" src="image/row.png"/></div>
        <div  className="flex flex-row mx-4 gap-18 px-4 py-2 rounded-md justify-between border-2 border-boxwind"><img className="" src="image/long (2).png"/> <img className="w-2 mt-3 h-2" src="image/row.png"/></div>
      
        </div>
      </div>
    <div className=' sticky  top-0 left-0 md:p-0  lg:text-xl text-xl md:text-base'>
      <div className='md:flex items-center md:py-4  justify-around bg-white '>
      <div className="md:pl-0 pl-2">
       <img className='' src="image/Group.png"/>
      </div>
      
      <div onClick={()=>setOpen(!open)} className=' absolute right-2 top-2 cursor-pointer md:hidden'>
  
      <img className='w-4' name={open ? 'close':'menu'} src='image/menu-svgrepo-com.svg'/>
      <p className="text-white">.</p>
      </div>
      
      <ul className={`md:flex md:items-center  lg:gap-6 pt-6 md:pt-0 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-0 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li className=' px-2 py-4 md:py-2 md:px-1 lg:px-0 lg:pr-4'>
              <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
            </li>
          ))
        }
        <Button className="">
        connects wallets
        </Button>
      </ul>
      </div>
    </div>
    </div>
  )
}

export default Header