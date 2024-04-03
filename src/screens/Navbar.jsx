import { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../components/Modal";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../redux/auth/authSlice";
import SignUp from "../components/SignUp";


const Navbar = () => {
  const dispatch=useDispatch()
  const user = useSelector((state) => state?.auth);
  const [isLogin,setIsLogin]= useState(false)
  const [showProfile, setShowProfile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const toggleStateChange = () => {
    setIsLogin(!isLogin)
  };
  const toggleModalLogin = () => {
    setIsOpenLogin(!isOpenLogin);
  };

  return (
    <div className=" px-5 max-w-[1280px] mx-auto">
      <div className="flex items-center justify-between w-full py-4 relative">
        <div className="flex items-center justify-center md:space-x-0 lg:space-x-20 ">
          <div className="font-semibold text-2xl">
            <Link to="/task" className=" text-blue-950 text-xl font-bold ">
              Task
            </Link>
          </div>
          <nav className="max-md:hidden flex flex-row items-center  ">
            <ul className="flex items-center space-x-3  font-semibold text-[15px]">
              <li>
                <Link
                  to="/todo"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  All ToDo
                </Link>
              </li>
              <li>
                <Link
                  to="/pending"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  Pending Tasks
                </Link>
              </li>
              <li>
                <Link
                  to="/complete"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  Completed Tasks
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* <SearchBar /> */}
          <p className=" flex text-right items-end font-semibold cursor-pointer hover:text-[#5636f3] duration-300 max-md:hidden ">
      
            Contact Sales
          </p>
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="relative cursor-pointer"
          ></div>

          <div className=" lg:text-xl text-[16px] lg:py-3 py-2 bg-[#5636f3] hover:bg-[#7559ff] text-white rounded-md">
            {
              user?.accessToken ? <button onClick={()=>dispatch(userLoggedOut())} className=" px-4 " >
              Sign Out
            </button>:<button onClick={toggleModalLogin} className=" px-4 ">
              Log In
            </button>
            }
          </div>
          <div>
           {
            isLogin ?
            <Modal
            isOpen={isOpenLogin}
            onClose={toggleModalLogin}
            title="Please Sign Up"
          >
            <SignUp  isOpen={isOpenLogin}  onClose={toggleModalLogin} toggleStateChange={toggleStateChange} />
          </Modal>
          :
          <Modal
          isOpen={isOpenLogin}
          onClose={toggleModalLogin}
          title="Please Login"
        >
          <Login  isOpen={isOpenLogin}  onClose={toggleModalLogin} toggleStateChange={toggleStateChange} />
        </Modal>
           }
          </div>

          <span
            onClick={() => setShowNav(!showNav)}
            className=" p-[9px] bg-gray-100 rounded-md md:hidden"
          >
            {showNav ? (
              <AiOutlineClose
                size={30}
                className="transition ease-in duration-150"
              />
            ) : (
              <CiMenuBurger
                size={30}
                className="transition ease-in duration-150"
              />
            )}
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? "pb-4  rounded-lg " : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15px] opacity-100 ">
       
              <li>
                <Link
                  to="/todo"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  All ToDo
                </Link>
              </li>
              <li>
                <Link
                  to="/pending"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  Pending Tasks
                </Link>
              </li>
              <li>
                <Link
                  to="/complete"
                  className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}
                >
                  Completed Tasks
                </Link>
              </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
