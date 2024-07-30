// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import RentalLogo from "../assets/Images/LogoRental.png";
// import { removeToken } from '../auth';

// const Sidebar = () => {
//     const navigate = useNavigate();
//     const role = localStorage.getItem('role'); // Get the role from local storage

//     const handleLogout = () => {
//         removeToken();
//         localStorage.removeItem('role'); // Remove the role from local storage
//         navigate('/login');
//     };

//     return (
//         <div className="sidebar items-center flex flex-col gap-2 w-[20%]">
//             <img src={RentalLogo} alt="rentalLogo" />
//             <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//                 <Link to="/">Dashboard</Link>
//             </div>
//             {role === 'superAdmin' && (
//                 <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//                     <Link to="/adminuser">Admin User</Link>
//                 </div>
//             )}
//             <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//                 <Link to="/users">Users</Link>
//             </div>
//             <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//                 <Link to="/inventory">Inventory</Link>
//             </div>
//             <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//                 <Link to="/add-inventory">Add Product</Link>
//             </div>
//             <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//                 <Link to="/rentals">Rentals History</Link>
//             </div>
//             <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//                 <Link to="/payments">Payments History</Link>
//             </div>
//             <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//                 <Link to="/feedback">Feedback History</Link>
//             </div>
//             <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//                 <Link to="/uploadGallery">Upload Gallery Images</Link>
//             </div>
//             <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//                 <Link to="/deleteGallery">Delete Gallery Images</Link>
//             </div>
//             <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold cursor-pointer' onClick={handleLogout}>
//                 <div>Logout</div>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import RentalLogo from "../assets/Images/LogoRental.png";
// import { removeToken } from '../auth';
// import { FaBars, FaTimes } from 'react-icons/fa'; // Importing Font Awesome icons

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();
//   const role = localStorage.getItem('role'); // Get the role from local storage

//   const handleLogout = () => {
//     removeToken();
//     localStorage.removeItem('role'); // Remove the role from local storage
//     navigate('/login');
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const renderLinks = () => (
//     <>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//         <Link to="/">Dashboard</Link>
//       </div>
//       {role === 'superAdmin' && (
//         <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//           <Link to="/adminuser">Admin User</Link>
//         </div>
//       )}
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//         <Link to="/users">Users</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//         <Link to="/inventory">Inventory</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//         <Link to="/add-inventory">Add Product</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//         <Link to="/rentals">Rentals History</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//         <Link to="/payments">Payments History</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//         <Link to="/feedback">Feedback History</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//         <Link to="/uploadGallery">Upload Gallery Images</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold'>
//         <Link to="/deleteGallery">Delete Gallery Images</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold cursor-pointer' onClick={handleLogout}>
//         <div>Logout</div>
//       </div>
//     </>
//   );

//   return (
//     <>
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <FaBars className="text-3xl cursor-pointer text-white" onClick={toggleSidebar} />
//       </div>

//       <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex sidebar items-center flex-col gap-5 w-[20%]`}>
//         <div className="flex items-center justify-between w-full p-4 bg-gray-800 md:hidden">
//           <img src={RentalLogo} alt="rentalLogo" className="w-24" />
//           <FaTimes className="text-3xl cursor-pointer text-white" onClick={toggleSidebar} />
//         </div>
//         <img src={RentalLogo} alt="rentalLogo" className="hidden md:block w-24" />
//         {renderLinks()}
//       </div>
//     </>
//   );
// };

// export default Sidebar;


// //23/july/24
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import RentalLogo from "../assets/Images/LogoRental.png";
// import { removeToken } from '../auth';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();
//   const role = localStorage.getItem('role');

//   const handleLogout = () => {
//     removeToken();
//     localStorage.removeItem('role');
//     navigate('/login');
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const renderLinks = () => (
//     <div className="flex flex-col gap-3 p-4">
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-1 px-16 rounded-full w-full font-bold'>
//         <Link to="/">Dashboard</Link>
//       </div>
//       {role === 'superAdmin' && (
//         <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold'>
//           <Link to="/adminuser">Admin User</Link>
//         </div>
//       )}
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold'>
//         <Link to="/users">Users</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold'>
//         <Link to="/inventory">Inventory</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold'>
//         <Link to="/add-inventory">Add Product</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold'>
//         <Link to="/rentals">Rentals History</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold'>
//         <Link to="/rentalRequest">Rentals Request</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold'>
//         <Link to="/payments">Payments History</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold'>
//         <Link to="/feedback">Feedback History</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold'>
//         <Link to="/deleteGallery">Gallery</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold'>
//         <Link to="/newQuote">Quote Request</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold'>
//         <Link to="/generate">Generate</Link>
//       </div>
//       <div className='bg-white items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 px-1 rounded w-full font-bold cursor-pointer' onClick={handleLogout}>
//         <div>Logout</div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <FaBars className="text-3xl cursor-pointer text-white" onClick={toggleSidebar} />
//       </div>

//       <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex sidebar items-center flex-col w-[20%] overflow-y-auto`}>
//         <div className="flex items-center justify-between w-full p-4 bg-gray-800 md:hidden">
//           <img src={RentalLogo} alt="rentalLogo" className="w-24" />
//           <FaTimes className="text-3xl cursor-pointer text-white" onClick={toggleSidebar} />
//         </div>
//         <img src={RentalLogo} alt="rentalLogo" className="hidden md:block w-24" />
//         {renderLinks()}
//       </div>
//     </>
//   );
// };

// export default Sidebar;




import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RentalLogo from "../assets/Images/LogoRental.png";
import { removeToken } from '../auth';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    removeToken();
    localStorage.removeItem('role');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderLinks = () => (
    <div className="flex flex-col gap-3 p-4">
      <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 ps-10 pe-10 rounded w-full font-bold ${location.pathname === '/' ? 'bg-yellow-500' : 'bg-white'}`}>
        <Link to="/">Dashboard</Link>
      </div>
      <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 ps-10 pe-10 rounded w-full font-bold ${location.pathname === '/' ? 'bg-yellow-500' : 'bg-white'}`}>
        <Link to="/sale">Sale</Link>
      </div>
      {role === 'superAdmin' && (
        <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold ${location.pathname === '/adminuser' ? 'bg-yellow-500' : 'bg-white'} ${location.pathname === '/adminuser' ? 'text-white' : 'text-black'} `}>
          <Link to="/adminuser">Admin User</Link>
        </div>
      )}
      <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold ${location.pathname === '/users' ? 'bg-yellow-500' : 'bg-white'} ${location.pathname === '/users' ? 'text-white' : 'text-black'}`}>
        <Link to="/users">Users</Link>
      </div>
      <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold ${location.pathname === '/inventory' ? 'bg-yellow-500' : 'bg-white'} ${location.pathname === '/inventory' ? 'text-white' : 'text-black'} `}>
        <Link to="/inventory">Inventory</Link>
      </div>
      <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold ${location.pathname === '/rentals' ? 'bg-yellow-500' : 'bg-white'} ${location.pathname === '/rentals' ? 'text-white' : 'text-black'}`}>
        <Link to="/rentals">Rentals History</Link>
      </div>
      <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold ${location.pathname === '/rentalRequest' ? 'bg-yellow-500' : 'bg-white'} ${location.pathname === '/rentalRequest' ? 'text-white' : 'text-black'}`}>
        <Link to="/rentalRequest">Rentals Request</Link>
      </div>
      <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold ${location.pathname === '/payments' ? 'bg-yellow-500' : 'bg-white'} ${location.pathname === '/payments' ? 'text-white' : 'text-black'}`}>
        <Link to="/payments">Payments History</Link>
      </div>
      <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold ${location.pathname === '/feedback' ? 'bg-yellow-500' : 'bg-white'} ${location.pathname === '/feedback' ? 'text-white' : 'text-black'}`}>
        <Link to="/feedback">Feedback History</Link>
      </div>
      <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold ${location.pathname === '/deleteGallery' ? 'bg-yellow-500' : 'bg-white'} ${location.pathname === '/deleteGallery' ? 'text-white' : 'text-black'}`}>
        <Link to="/deleteGallery">Gallery</Link>
      </div>
      <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold ${location.pathname === '/newQuote' ? 'bg-yellow-500' : 'bg-white'} ${location.pathname === '/newQuote' ? 'text-white' : 'text-black'}`}>
        <Link to="/newQuote">Quote Request</Link>
      </div>
      <div className={`items-center justify-center flex text-black hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold ${location.pathname === '/generate' ? 'bg-yellow-500' : 'bg-white'} ${location.pathname === '/generate' ? 'text-white' : 'text-black'}`}>
        <Link to="/generate">Generate</Link>
      </div>
      <div className='items-center justify-center flex text-white hover:bg-customColor-circleColor hover:text-white py-3 rounded w-full font-bold cursor-pointer' onClick={handleLogout}>
        <div>Logout</div>
      </div>
    </div>
  );

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <FaBars className="text-3xl cursor-pointer text-white" onClick={toggleSidebar} />
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex sidebar items-center flex-col w-[20%] overflow-y-auto`}>
        <div className="flex items-center justify-between w-full p-4 bg-gray-800 md:hidden">
          <img src={RentalLogo} alt="rentalLogo" className="w-24" />
          <FaTimes className="text-3xl cursor-pointer text-white" onClick={toggleSidebar} />
        </div>
        <img src={RentalLogo} alt="rentalLogo" className="hidden md:block w-24" />
        {renderLinks()}
      </div>
    </>
  );
};

export default Sidebar;
