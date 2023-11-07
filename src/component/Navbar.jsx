// import React from 'react';
import { FiMenu } from 'react-icons/Fi';
import { AiOutlineClose} from 'react-icons/ai';

import Link from "./link/LInk";
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { name: "User", id: 1, path: "/user/:id" },
        { name: "Dashboard", id: 2, path: "/dashboard/:section/:id" },
        { name: "Products", id: 3, path: "/products/:category?" },
        { name: "Blog Post", id: 4, path: "/blog/:year/:month/:day" },
        { name: "Search Results", id: 5, path: "/search/*" }
      ];
      

    return (
        <nav>
            <div className='text-2xl bg-gray-600 md:hidden  p-4' onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose>
                    :<FiMenu></FiMenu>
                }   
            </div>
            <ul className={`md:flex absolute duration-1000
            ${open ? 'top-14' : '-top-56'} bg-gray-400 md:static p-4 text-white gap-3 hover:bg-gray-600`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;