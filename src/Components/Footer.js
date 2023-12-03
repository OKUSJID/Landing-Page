import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-white shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 text-left sm:text-left dark:text-gray-400">
                    © 2023 <Link to="/" className="hover:underline">Usjid Nisar</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    
                    <li>
                        <Link to="/Products" className="hover:underline me-4 md:me-6">Products</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
