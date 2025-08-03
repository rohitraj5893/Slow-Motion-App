import { TbHexagonLetterS } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";

import { Link } from "react-router";
import { toast } from "react-hot-toast";


export default function Header(props) {
   let isLoggedIn = props.isLoggedIn;
   let setisLoggedIn = props.setisLoggedIn;


   return (
      <div className=" w-11/12 max-w-[1160px] flex justify-between mt-4 mx-auto">

         <Link to="/" className="flex cursor-pointer">
            <div className="text-4xl text-[#e6e7ec] ">
               <TbHexagonLetterS />
            </div>
            <h2 className="text-2xl text-[#e6e7ec] font-semibold ml-1">SlowMotion</h2>
         </Link>



         <nav className="flex justify-center">
            <ul className="flex decoration-none space-x-6 text-[#DBDDEA] justify-center items-center ">
               <li className="cursor-pointer hover:text-white font-semibold transition-all duration-100">
                  <Link to="/">Home</Link>
               </li>
               <li className="cursor-pointer hover:text-white font-semibold transition-all duration-100">
                  <Link to="/">About</Link>
               </li>
               <li className="cursor-pointer hover:text-white font-semibold transition-all duration-100">
                  <Link to="/">Support</Link>
               </li>
               <li className="cursor-pointer hover:text-white font-semibold transition-all duration-100">
                  <Link to="/">Contact</Link>
               </li>
            </ul>
         </nav>

         <div className="text-[#DBDDEA] flex space-x-4">
            {!isLoggedIn &&
               <Link to="/login">
                  <button className="bg-[#161d29] px-3 py-2 rounded-md font-semibold border
                  border-[#2c333f] cursor-pointer hover:text-white"
                  >Log in</button>
               </Link>
            }

            {!isLoggedIn &&
               <Link to="/signup">
                  <button className="bg-[#161d29] px-3 py-2 rounded-md font-semibold border
                border-[#2c333f] cursor-pointer hover:text-white"
                  >Sign up</button>
               </Link>
            }
            {isLoggedIn &&
               <Link to="/">
                  <button className="bg-[#161d29] px-3 py-2 rounded-md font-semibold border
               border-[#2c333f] cursor-pointer hover:text-white"
                     onClick={() => {
                        setisLoggedIn(false);
                        toast.success("Logged out")
                     }}
                  >Log out</button>
               </Link>
            }
            {isLoggedIn &&
               <Link to="/dashboard">
                  <button className="bg-[#161d29] px-3 py-2 rounded-md font-semibold border
               border-[#2c333f] cursor-pointer hover:text-white"
                  >Dashboard</button>
               </Link>
            }
         </div>


         <div className="text-3xl hidden items-center max-[780px]:flex">
            <IoMdMenu />
         </div>
          


      </div>
   );
}