import React from 'react'

export default function FooterSlhop() {
  return (
    <div className='buy h-[480px] w-full bg-transparent text-black flex flex-col items-center justify-around'>
        <div className="nam h-[100px] w-[90%] flex items-center justify-between px-4">
            <aside className='side h-20 w-96 flex flex-col gap-2 text-left'>
                <h2 className='text-3xl font-bold'>Bandage</h2>
            </aside>
            <div className="icon w-24 h-5 flex items-center justify-around">
            <i className="text-[#23A6F0] fa fa-facebook-official" aria-hidden="true"></i>
            <i className="text-[#23A6F0] fa fa-instagram" aria-hidden="true"></i>
            <i className="text-[#23A6F0] fa fa-twitter" aria-hidden="true"></i>
            </div>
        </div>
        <main className='foot h-[300px] w-[90%] flex items-center justify-around'>
            <ul className='ul h-[180px] w-[200px] flex flex-col items-center justify-around text-md'>
                <li>Company Info</li>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
            </ul>
            <ul className='ul h-[180px] w-[200px] flex flex-col items-center justify-around text-md'>
                <li>Legal</li>
                <li>About us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
            </ul>
            <ul className='ul h-[180px] w-[200px] flex flex-col items-center justify-around text-md'>
                <li>Features</li>
                <li>Business Marketing</li>
                <li>User Analytics</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
            </ul>
            <ul className='ul h-[180px] w-[200px] flex flex-col items-center justify-around text-md'>
                <li>Resourse</li>
                <li>ios and Andriod</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
            </ul>
            <ul className='ul h-[180px] w-[180px] flex flex-col items-center justify-around text-md'>
                <h2>Get In Touch</h2>
                <div className="leadEmail h-16 w-52 flex">
                    <input className='h-full w-36 outline-none indent-2 p-4 bg-gray-300' type="text" placeholder='Your email' />
                    <button className='h-full w-24 bg-blue-600 text-white text-sm'>Subscribe</button>
                </div>
                <p>ready to go</p>
            </ul>
        </main>
        <figure className='fig h-5 w-[90%] flex items-center justify-between px-8'>
            <p>Made with love By Finland All right Reserved</p>
            
        </figure>
    </div>
  )
}
