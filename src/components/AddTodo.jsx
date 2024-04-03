import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useTaskCreateMutation } from "../redux/task/taskApi";
import { toast } from "react-toastify";
const AddTodo = ({ isOpen, onClose }) => {
  const [taskCreate, { isLoading }] = useTaskCreateMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  if (!isOpen) return null;
  const onSubmit = async (data) => {
   // console.log("data:", data);
    const result = await taskCreate(data);
    console.log("result:", result);
    if (result?.data?.success === true) {
      reset();
      onClose();
      toast.success("Task Created Successfully.");
    } else {
      toast.error(`${result?.error.data.message}`);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full rounded-lg  flex flex-col  "
      >
        <div className=" flex flex-col ">
          <label className=" mb-2 text-left ">Write Todo</label>
          <input
            type="text"
            id="todo"
            placeholder="Enter name"
            {...register("todo", {
              required: true,
            })}
            className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
          />
          {errors.todo && (
            <span className=" text-left text-sm text-red-500 ">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-left">Write description</label>
          <textarea
            id="des"
            placeholder="Enter description"
            {...register("des", {
              required: true,
            })}
            className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] h-[100px] mb-4 outline-none focus:border-gray-600 text-black resize-none"
          />
          {errors.des && (
            <span className="text-left text-sm text-red-500">
              This field is required
            </span>
          )}
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className=" p-2 border rounded-lg bg-blue-500 text-white border-gray-300 mt-2 mb-4 focus:border-gray-600"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
AddTodo.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleStateChange: PropTypes.func,
};
export default AddTodo;
