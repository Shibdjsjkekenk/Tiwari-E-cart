import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom if using it for routing
import SUCCESS from '../assest/success.gif';

const Success = () => {
  return (
    <div className="bg-slate-200 w-full mt-10  max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded">
      <img
        src={SUCCESS}
        alt="Success"
        width="200"
        height="200"
      />
      <p className="text-green-600 font-bold text-xl">Payment Successfully</p>
      <Link to="/order" className="p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:text-white hover:bg-green-600">
        See Order
      </Link>
    </div>
  );
}

export default Success;
