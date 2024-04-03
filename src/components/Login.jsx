import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/auth/authApi";
import { toast } from "react-toastify";

const Login = ({isOpen,onClose,toggleStateChange}) => {
  const [login,{isLoading}]= useLoginMutation();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    if (!isOpen) return null;
    const onSubmit = async (data) => {
     
  const result = await login(data);
  if(result?.data?.status === true){
    reset()
    toast.success("User LoggedIn Successfully.")
    onClose()
  }else{
    toast.error(`${result?.error.data.message}`)
  }
    };
    
  return (
    <div className=" w-full flex flex-col items-center justify-center ">
     <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full rounded-lg  flex flex-col  "
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
        <button onClick={toggleStateChange}>Signup</button>
      </div>
        <button
    
         disabled={isLoading}
          type="submit"
          className=" p-2 border rounded-lg bg-blue-500 text-white border-gray-300 mt-2 mb-4 focus:border-gray-600"
        >
          {isLoading? "Loading...":"Submit"}
        </button>
      </form> 
    </div>
  );
}
Login.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleStateChange:PropTypes.func,
};
export default Login;
