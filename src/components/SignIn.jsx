import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLoginMutation } from "../redux/auth/authApi";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate=useNavigate()
  const [login,{isLoading}]= useLoginMutation();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
     
  const result = await login(data);
  if(result?.data?.status === true){
    reset()
    toast.success("User LoggedIn Successfully.")
    navigate("/task")
  }else{
    toast.error(`${result?.error.data.message}`)
  }
    };
  return (
    <div className=" text-black lg:px-5 px-1 max-w-[1280px] h-full mx-auto py-10 ">
      <div className=" w-full h-screen ">
      <div className=" w-full flex flex-col items-center justify-center ">
      <h1 className=" font-bold text-xl py-4 ">LogIn Now</h1>
     <form
        onSubmit={handleSubmit(onSubmit)}
        className="  w-full items-center justify-center rounded-lg  flex flex-col  "
      >
        <div className=" flex flex-col ">
          <label className=" mb-2 text-left ">Enter Your Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Email"
            {...register("email", {
              required: true,
            })}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          {errors.email && (
            <span className=" text-left text-sm text-red-500 ">
              This field is required
            </span>
          )}
        </div>
        <div className=" flex flex-col ">
          <label className=" mb-2 text-left ">Enter Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            {...register("password", {
              required: true,
            })}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          {errors.password && (
            <span className=" text-left text-sm text-red-500 ">
              This field is required
            </span>
          )}
        </div>
      <div>
        {/* <button onClick={toggleStateChange}>Signup</button> */}
        <div>
        <span className=" text-right ">
            Don`t Have an account ?
            <Link to="/register" className=" text-blue-600 underline pl-2 ">
              Sign up
            </Link>
          </span>
        </div>
      </div>
        <button
    
         disabled={isLoading}
          type="submit"
          className=" w-[300px] text-xl p-2 border rounded-lg bg-blue-500 text-white border-gray-300 mt-2 mb-4 focus:border-gray-600"
        >
          {isLoading? "Loading...":"Submit"}
        </button>
      </form> 
    </div>
      </div>
    </div>
  );
}

export default SignIn;
