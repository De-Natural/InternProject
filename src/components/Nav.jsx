import React from 'react';

export default function Nav({ iconCounts = { cart: 0, heart: 0 } }) {
  return (
    <div className="h-[64px] lg:h-16 w-full flex items-center justify-evenly lg:justify-between">
      <nav className="h-full z-30 absolute lg:static top-0 lg:h-full w-full lg:w-[60%] flex flex-col lg:flex-row items-center justify-around">
        <label htmlFor="put">
          <i className="fa fa-rss" aria-hidden="true" id="icon"></i>
        </label>
        <p className="absolute top-2 left-6 lg:font-3xl mt-3">Bondage</p>
        <input type="checkbox" id="put" hidden />
        <ul className="list h-[100%] mt-16 lg:mt-0 lg:h-8 w-[100%] lg:w-[60%] flex flex-col lg:flex-row items-center justify-between lg:justify-around">
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
      </nav>

      <div className="shipping h-8 lg:h-8 w-[50%] lg:w-[30%] absolute justify-around top-2 right-0 flex items-center overflow-hidden mt-2">
        <div className="login h-8 w-[30%] gap-2 lg:w-[140px] flex items-center justify-around">
          <i className="fa fa-user" aria-hidden="true"></i>
          <a href="/login">Login</a> /
          <a href="/register">Register</a>
        </div>
        <div className="icon h-8 w-[40%] lg:w-[100px] flex items-center justify-around">
           {/* <i className="text-xl text-blue fa fa-search" aria-hidden="true">{iconCounts.search}</i> */}
          <i className="text-xl text-blue fa fa-shopping-cart" aria-hidden="true">{iconCounts.cart}</i>
          <i className="text-xl text-blue fa fa-heart" aria-hidden="true">{iconCounts.heart}</i>
        </div>
      </div>
    </div>
  );
}
