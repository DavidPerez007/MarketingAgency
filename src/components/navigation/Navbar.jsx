import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

function Navbar() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <img src={logo} height={140} width={250} className=""/>
        </div>

        <div className="ml-4 mt-2 flex-shrink-0">
        <Link to='/cases' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-900">Cases</Link>
        <Link to='/services' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-900">Services</Link>
        <Link to='/us' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-900">us</Link>
        <Link to='/careers' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-900">Careers</Link>
        <Link to='/blog' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-900">Blog</Link>
        <Link to='/contact' className="text-lg inline-flex mx-4 font-medium leading-6 text-gray-900">Contact</Link>
          <button
            type="button"
            className="relative inline-flex ml-12 items-center rounded-md border border-transparent bg-blue-600 px-8 py-4 text-md font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Hire Us
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
