// import React, { useState } from 'react';
// import axios from 'axios';
// import { setToken } from '../auth';
// import RentalLogo from "../assets/Images/LogoRental.png";
// import BackgroundImage from "../assets/Images/BackgroundImage.jpg"; // Make sure to import your background image
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [modalMessage, setModalMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/login', { email, password })
//       .then(response => {
//         console.log(response); // Log the response to the console
//         const { token, status, role } = response.data;
//         setToken(token);
//         localStorage.setItem('role', role); // Save the role in local storage

//         if (status === 'Pending' || status === 'Rejected') {
//           setModalMessage(`Your request is ${status}`);
//         } else if (status === 'Accepted') {
//           navigate('/');
//         }
//       })
//       .catch(() => {
//         setError('Invalid credentials');
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center w-full bg-cover justify-center bg-gray-100 p-4 relative">
//       <div className="absolute inset-0">
//         <img src={BackgroundImage} alt="Background" className="w-full h-full object-cover blur-sm" />
//       </div>
//       <div className="relative bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-full max-w-md backdrop-filter backdrop-blur-lg ">
//         <div className='flex justify-center mb-4'>
//           <img src={RentalLogo} alt="Rental Logo" className="w-32 h-24"/>
//         </div>
//         <h1 className="text-3xl md:text-4xl font-bold text-customColor-circleColor mb-6 text-center">Login</h1>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700">Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-customColor-circleColor"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-customColor-circleColor"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-customColor-circleColor text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <p className="text-gray-700">Don't have an account?</p>
//           <button
//             onClick={() => navigate('/signup')}
//             className="text-customColor-circleColor  hover:bg-white hover:text-gray-900 transition duration-300 underline bg-white border border-gray-800"
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>
//       {modalMessage && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <p className='font-bold'>{modalMessage}</p>
//             <div className='flex items-center justify-center'>
//             <button
//               onClick={() => setModalMessage('')}
//               className="mt-4 bg-customColor-circleColor flex justify-center items-center text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300"
//             >
//               Close
//             </button>
//           </div>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { setToken } from '../auth';
import RentalLogo from "../assets/Images/LogoRental.png";
import BackgroundImage from "../assets/Images/BackgroundImage.jpg"; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/login', { email, password })
      .then(response => {
        console.log(response); // Log the response to the console
        const { token, status, role } = response.data;
        setToken(token);
        localStorage.setItem('role', role); // Save the role in local storage

        if (status === 'Pending' || status === 'Rejected') {
          setModalMessage(`Your request is ${status}`);
        } else if (status === 'Accepted') {
          navigate('/');
        }
      })
      .catch(() => {
        setError('Invalid credentials');
      });
  };

  return (
    <div className="min-h-screen flex items-center w-full bg-cover justify-center bg-gray-100 p-4 relative">
      <div className="absolute inset-0">
        <img src={BackgroundImage} alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="relative bg-white bg-opacity-20 p-6 rounded-lg shadow-lg w-full max-w-md backdrop-filter backdrop-blur-md">
        <div className='flex justify-center mb-4'>
          <img src={RentalLogo} alt="Rental Logo" className="w-32 h-24"/>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-customColor-circleColor mb-6 text-center">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-customColor-circleColor"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-customColor-circleColor"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-customColor-circleColor text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700">Don't have an account?</p>
          <button
            onClick={() => navigate('/signup')}
            className="text-customColor-circleColor hover:bg-white hover:text-gray-900 transition duration-300  bg-white border border-gray-800"
          >
            Sign Up
          </button>
        </div>
      </div>
      {modalMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className='font-bold'>{modalMessage}</p>
            <div className='flex items-center justify-center'>
              <button
                onClick={() => setModalMessage('')}
                className="mt-4 bg-customColor-circleColor flex justify-center items-center text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

