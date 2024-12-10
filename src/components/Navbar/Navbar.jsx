// import React from 'react';
// import Logo from '../../assets/logo.png';
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import DarkMode from './DarkMode';

// // Menu List for lower Navbar 
// const Menu = [
//     {
//         id: 1,
//         name: 'Home',
//         link: '/#',
//     },
//     {
//         id: 2,
//         name: 'Top Rated',
//         link: '/#',
//     },
//     {
//         id: 3,
//         name: 'Kids Wear',
//         link: '/#',
//     },
//     {
//         id: 4,
//         name: 'Electronics',
//         link: '/#',
//     },
    

// ]

// // Dropdown Menu for lower Navbar
// const DropdownLinks = [
//     {
//         id: 1,
//         name: 'Home Decor',
//         link: '/',
//     },
//     {
//         id: 2,
//         name: 'Gadgets',
//         link: '/',
//     },
//     {
//         id: 3,
//         name: 'Sports',
//         link: '/',
//     }
// ]




// const Navbar = () => {
//     return (
//         <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
//             {/* upper Navbar */}
//             <div className='bg-primary/40 py-2'>
//                 <div className='container flex justify-between items-center'>
//                     {/* logo */}
//                     <div>
//                         <a href="http://"
//                             className='flex gap-2 font-bold font-w text-2xl sm:text-3xl '>
//                             <img src={Logo} alt="Logo" className='w-10' /> Online shop
//                         </a>
//                     </div>

//                     {/* Right part */}
//                     <div className='flex justify-between items-center gap-4'>
//                         {/* search Bar */}
//                         <div className=' relative group hidden sm:block'>
//                             <input 
//                             type='text' 
//                             placeholder='search'
//                             className='
//                             w-[200px] 
//                             sm:w-[200px] 
//                             group-hover:w-[300px]
//                             transition-all
//                             duration-200 
//                             border 
//                             border-gray-300
//                             rounded-full 
//                             px-2 py-1 
//                             focus:outline-none 
//                             focus:border-2 
//                             focus:border-primary 
//                             dark:border-gray-500 
//                             dark:bg-gray-800'
//                             />
//                             <IoMdSearch className='
//                             text-gray-500 g
//                             roup-hover:text-primary 
//                             absolute 
//                             top-1/2 
//                             -translate-y-1/2 
//                             right-3' />
//                         </div>
                        
//                         {/* order btn */}
//                         <button
//                             onClick={() => handleOrderPopup()} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
//                             <span className="group-hover:block hidden transition-all duration-200">Order</span>
//                             <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
//                         </button>

//                         {/* Darkmode switch */}
//                         <div>
//                             <DarkMode/>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* lower Navbar */}
//             <div className='flex justify-center'>
//                 <ul className='sm:flex hidden items-center gap-4'>
//                     {Menu.map((data) => (
//                             <li key={data.id}>
//                                 <a href={data.link}
//                                 className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
//                             </li>
//                     ))}

//                     {/* Dropdown List Item */}
//                     <li className='group relative cursor-pointer'>
//                         <a href="/"
//                             className='flex items-center gap-[2px] py-2 hover:text-primary duration-200
//                         '>More
//                         <span>
//                             <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//                         </span>
//                         </a>
//                         <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
//                             <ul>
//                                 {DropdownLinks.map((data) => (
//                                     <li key={data.id}>
//                                         <a
//                                             href={data.link}
//                                             className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
//                                         >
//                                             {data.name}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// };

// export default Navbar;