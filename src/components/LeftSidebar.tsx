import React from 'react';
import { FaHome, FaSearch, FaCompass, FaCog, FaComments, FaBell, FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

export default function LeftSidebar() {
    const menuItems = [
        { icon: <FaHome />, label: 'Home' },
        { icon: <FaSearch />, label: 'Search' },
        { icon: <FaCompass />, label: 'Explore' },
        { icon: <FaCog />, label: 'Settings' },
        { icon: <FaComments />, label: 'Chats' },
        { icon: <FaBell />, label: 'Notification' },
        { icon: <FaUser />, label: 'Account' },
        { icon: <FaSignInAlt />, label: 'Login' },
        { icon: <FaSignOutAlt />, label: 'Logout' },
    ];

    return (
        <div className='flex flex-col fixed top-0 left-0 h-full w-16 sm:w-64 bg-gray-800 text-white transition-all duration-300 ease-in-out'>
            <div className='flex flex-col items-center sm:items-start p-4'>
                <div className='flex items-center justify-center w-full mb-4'>
                    <span className='text-2xl font-bold'>Logo</span>
                </div>
                <div className='flex flex-col space-y-4'>
                    {menuItems.map((item, index) => (
                        <div key={index} className='flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer transition-all duration-300 ease-in-out'>
                            {item.icon}
                            <span className='hidden sm:inline'>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
