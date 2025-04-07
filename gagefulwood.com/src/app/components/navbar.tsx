"use client";
import Link from 'next/link';
import React, {useEffect, useState} from 'react'

export default function Navbar() {
    // States used to track visibility of the navbar
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(
        () => {
        const handleScroll = () => { // Defines the scroll handler
        if (window.scrollY > 200) setIsVisible(true); // Determines when the navbar appears
        else setIsVisible(false);
    };
    // Listens for scroll events
    window.addEventListener("scroll",handleScroll);
    // Cleanup: Removes the event listener once the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-deep-indigo text-white shadow-md ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
            <div className="flex items-center justify-between">
                <h1 className="text-2x1 font-bold">Your Logo</h1>
                <ul className="flex gap-4">
                    <li>
                        <Link href="#" className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
    
}