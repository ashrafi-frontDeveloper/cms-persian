import React from 'react'
import './Sidebar.css'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { IoMdPricetag } from "react-icons/io";
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h1 className="sidebar-title">به داشبورد  خود خوش آمدید</h1>

        <ul className="sidebar-links">
            <li>
                <Link to='/'>
                  <IoHomeOutline className='icon'/>
                  صفحه اصلی</Link>
            </li>
            <li>
                <Link to='/product'>
                  <MdOutlineProductionQuantityLimits className='icon'/>
                  محصولات</Link>
            </li>
            <li>
                <Link to='/comments'>
                  <FaRegComments className='icon'/>
                  کامنت ها</Link>
            </li>
            <li>
                <Link to='/users'>
                  <FaUsers className='icon' />
                  کاربران</Link>
            </li>
            <li>
                <Link to='/orders'>
                  <IoBagCheck className='icon'/>
                  سفارشات</Link>
            </li>
            <li>
                <Link to='/offs'>
                  <IoMdPricetag className='icon'/>
                  تخفیف ها</Link>
            </li>
        </ul>

    </div>
  )
}
