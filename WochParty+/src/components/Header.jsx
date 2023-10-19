import React from 'react'
import logo from './../assets/Images/logo.png'
import {HiHome , HiMagnifyingGlass, HiStar, HiTv, HiPlayCircle} from 'react-icons/hi2'
import {HiDotsVertical , HiPlus } from 'react-icons/hi'
import Headeritem from './Headeritem'

function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass
    },
    {
      name: "WATCH LATER",
      icon: HiPlus
    },
    {
      name: "ORIGINALS",
      icon: HiStar
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle
    },
    {
      name: "SERIES",
      icon: HiTv
    }
  ]
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center gap-8 justify-between'>
      <img src={logo} className='w-[150px] md:w-[115px] object-cover'/>
      {menu.map((item)=>(
        <Headeritem name={item.name} Icon={item.icon}/>
      ))}
      </div>
      <div className='flex'>
        <img src='https://img.freepik.com/fotos-premium/cartoon-boy-in-blue-jacket-3d-image-in-32k-uhd-style_899449-14851.jpg?w=2000' className='w-[60px] rounded-full'/>
      </div>
    </div>
  )
}

export default Header