import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import ROLE from '../common/role';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GrUnorderedList } from "react-icons/gr";
import { MdAdminPanelSettings } from "react-icons/md";

const AdminPanel = () => {
  const user = useSelector(state => state?.user?.user)

  const navigate = useNavigate()

  const location = useLocation()
  const currentPage = location.pathname.split("/").pop(); // Get the last part of the path


  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden'>

      <aside className='bg-white min-h-full  w-full  max-w-60 customShadow'>
        <div className='h-32  flex justify-center items-center flex-col'>
          <div className='text-5xl cursor-pointer relative flex justify-center pt-6'>
            {
              user?.profilePic ? (
                <img src={user?.profilePic} className='w-20 h-20 rounded-full' alt={user?.name} />
              ) : (
                <FaRegCircleUser />
              )
            }
          </div>
          <p className='capitalize text-lg font-semibold icon'><MdAdminPanelSettings /> {user?.name}</p>
          <p className='text-sm '>({user?.role})</p>
        </div>

        {/***navigation */}
        <div className='pt-7'>
          <nav className='grid p-4 gap-2'>
            <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100 icon' style={currentPage === 'all-users' ? { backgroundColor: "#d3d3d38c" , borderRadius: "10px"} : {} }><FaRegUser /> All Users</Link>
            <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100 icon' style={currentPage === 'all-products' ? { backgroundColor: "#d3d3d38c" , borderRadius: "10px"} : {} }><MdOutlineProductionQuantityLimits /> All Products</Link>
            <Link to={"all-order"} className='px-2 py-1 hover:bg-slate-100 icon' style={currentPage === 'all-order' ? { backgroundColor: "#d3d3d38c" , borderRadius: "10px"} : {} }><GrUnorderedList /> All Orders</Link>
          </nav>
        </div>
      </aside>

      <main className='w-full h-full p-2'>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminPanel
