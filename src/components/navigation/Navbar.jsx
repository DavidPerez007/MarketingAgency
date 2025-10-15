import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import loading_dots from '../../assets/images/loading-dots.gif'

function Navbar() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <img src={logo} height={140} width={250} className=""/>
        </div>

        <div className="ml-4 mt-2 flex-shrink-0">
        <Link to='/cases' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-600  hover:underline hover:underline-offset-2 hover:text-blue-500">Cases</Link>
        <Link to='/services' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-600 hover:underline hover:underline-offset-2 hover:text-blue-500">Services</Link>
        <Link to='/us' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-600 hover:underline hover:underline-offset-2 hover:text-blue-500">Us</Link>
        <Link to='/careers' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-600 hover:underline hover:underline-offset-2 hover:text-blue-500">Careers</Link>
        <Link to='/blog' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-600 hover:underline hover:underline-offset-2 hover:text-blue-500">Blog</Link>
        <Link to='/contact' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-600 hover:underline hover:underline-offset-2 hover:text-blue-500">Contact</Link>
          <button
            type="button"
            className="relative inline-flex ml-12 items-center rounded-md border border-transparent bg-blue-600 px-6 py-2 text-md font-medium text-white shadow-sm hover:bg-blue-900 transition duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Hire Us 
            <img src={loading_dots} className='w-12 pl-4' />
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
