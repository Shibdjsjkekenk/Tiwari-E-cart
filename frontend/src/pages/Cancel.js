import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom if using it for routing
import CANCEL from '../assest/cancel.gif';

const Success = () => {
  return (
    <div className="bg-slate-200 w-full mt-10  max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded">
      <img
        src={CANCEL}
        alt="Success"
        width="200"
        height="200"
        className='mix-blend-multiply'
      />
      <p className="text-red-600 font-bold text-xl">Payment Cancel</p>
      <Link to="/" className="p-2 px-3 mt-5 border-2 border-red-600 rounded font-semibold text-red-600 hover:text-white hover:bg-red-600">
        See Order
      </Link>
    </div>
  );
}

export default Success;
