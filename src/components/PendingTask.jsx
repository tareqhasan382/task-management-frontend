

import { toast } from "react-toastify";

import { useState } from "react";
import Loading from "./Loading";
import { useAllTodotasksQuery } from "../redux/task/taskApi";


const PendingTask = () => {
  const [limit] = useState(20);
  const [page, setPage] = useState(1);
  const query = {
    limit,
    page,
    status:"InProgress"
  };
  const {data,isLoading}=useAllTodotasksQuery({...query});
//=================pagination===================================
const totalPage = Math.ceil(data?.meta?.total / limit);
const prevPage = () => {
  if (page > 1) {
    setPage(page - 1);
  } else {
   toast.warning("Page can't be less than 1");
 }
};
const nextPage = () => {
  if (page < totalPage) {
    setPage(page + 1);
  } else {
   toast.warning("Page can't be more than");
 }
};
  return (
    <div className=" text-black lg:px-5 px-1 max-w-[1280px] h-full mx-auto py-10 " >
      <div className=" w-full h-screen ">
      <h1>All CompletedTask</h1>
      {isLoading && <Loading />}
      <div className=" w-full h-full flex flex-wrap gap-5 items-start justify-center mt-5  ">
      
        {data?.data && data?.data.map(task=>(
          <div key={task._id} >
            <div className=" w-[220px] h-auto bg-yellow-500 text-white flex flex-wrap gap-5 p-4 rounded-md " >
            <h3 className=" font-bold ">{task?.todo}</h3>
            <h3>{task?.des}</h3>
          </div>
          </div>
        ))}
        <div className=" w-full  flex flex-row items-center justify-center gap-4 my-10 ">
        <button onClick={prevPage} className=" px-2 py-1 bg-gray-700 text-white rounded-md ">Prev</button>
        <button onClick={nextPage} className=" px-2 py-1 bg-gray-700 text-white rounded-md ">Next</button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default PendingTask;


//export default PendingTask;
