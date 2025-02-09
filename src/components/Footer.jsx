import React from 'react'

function Footer() {
  return (
    <div className='min-h-screen w-full bg-[#252B42] text-white flex flex-col items-center justify-around'>
        <div className="h-[100px] mb-6 w-[90%] flex flex-col lg:flex-row items-center justify-between px-4">
            <aside className=' h-20 w-11/12 lg:w-96 flex flex-col gap-2 text-center lg:text-left'>
                <h2 className='text-base lg:text-xl'>Consulting Agency for your Business</h2>
                <p className='text-sm'>The quick fox jumps over the lazy dog</p>
            </aside>
            <button className='h-10 w-24 rounded-md cursor-pointer bg-[#23A6F0] text-white'>Contact Us</button>
        </div>
        <main className='gap-4 h-fit lg:h-[300px] w-[90%] flex flex-col lg:flex-row items-center justify-around'>
            <ul className='h-[180px] w-[200px] flex flex-col items-center justify-around text-md'>
                <li>Company Info</li>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
            </ul>
            <ul className='h-[180px] w-[200px] flex flex-col items-center justify-around text-md'>
                <li>Legal</li>
                <li>About us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
            </ul>
            <ul className='h-[180px] w-[200px] flex flex-col items-center justify-around text-md'>
                <li>Features</li>
                <li>Business Marketing</li>
                <li>User Analytics</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
            </ul>
            <ul className='h-[180px] w-[200px] flex flex-col items-center justify-around text-md'>
                <li>Resourse</li>
                <li>ios and Andriod</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
            </ul>
            <ul className='h-[180px] w-[200px] flex flex-col items-center justify-around text-md'>
                <li>Get in Touch</li>
                <li><i class="fa fa-phone" aria-hidden="true"></i>
                       (456)-6784-79
                    </li>
                <li><i class="fa fa-map-marker" aria-hidden="true"></i>
                      2345 Washinton Ave
                </li>
                <li><i class="fa fa-envelope" aria-hidden="true"></i>
                      debra@hotemail.com
                </li>
                <li></li>
            </ul>
        </main>
        <figure className='h-5 w-[90%] flex flex-col lg:flex-row items-center justify-between px-8'>
            <p>Made with love By Finland All right Reserved</p>
            <div className="icon w-24 h-5 flex items-center justify-around">
            <i className="text-[#23A6F0] fa fa-facebook-official" aria-hidden="true"></i>
            <i className="text-[#23A6F0] fa fa-instagram" aria-hidden="true"></i>
            <i className="text-[#23A6F0] fa fa-twitter" aria-hidden="true"></i>

            </div>
        </figure>
    </div>
  )
}

export default Footer