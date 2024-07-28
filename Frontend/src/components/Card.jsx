import React from "react";

const Card = ( {item} ) => {
  return (
    <>
      <div className="card w-[90%] h-[450px] mb-10 bg-slate-700 shadow-2xl hover:scale-110 duration-300">
        <figure>
          <img
            src={item.image}
            alt="Error 404"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white  cursor-pointer">
            {item.title}
            <div className="badge badge-secondary text-center p-4 font-semibold">{item.category}</div>
          </h2>
          <p>{item.name}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline h-6">₹{" "}{item.price}</div>
            <div className="badge badge-outline h-8 hover:scale-110 hover:text-white hover:font-semibold hover:bg-gray-500 cursor-pointer">Buy Now</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
