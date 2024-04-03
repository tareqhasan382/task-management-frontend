import { useState } from "react";
// import Checkbox from "./Checkbox";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import AddTodo from "./AddTodo";
import { useTasksQuery, useUpdateTaskMutation } from "../redux/task/taskApi";
import Loading from "./Loading";
import FormateDate from "./FormateDate";
import { toast } from "react-toastify";
const Table = () => {
  const [limit] = useState(20);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const query = {
    limit,
    page
  };
  console.log("query:",query)
  const {data,isLoading}=useTasksQuery({...query})
  const[updateTask]=useUpdateTaskMutation()
const todoUpdateTask =async(id)=>{
   await updateTask({ id, data: { status: "InProgress" } })
}
const progressUpdateTask =async(id)=>{
   await updateTask({ id, data: { status: "Completed" } })
}
const deleteUpdateTask =async(id)=>{
  await updateTask({ id, data: { status: "Done" } })
}
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
//pagination...........
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
// const total = data?.meta?.total 
// const page = data?.meta?.page
// const limit = data?.meta?.limit || 10
// const per_page_data= limit
// const hasPrev = ()=>{
//   if(per_page_data*(page-1) > 0){
//     setPage(page-1)
//   }
// }
// const hasNext =per_page_data*(page-1)+per_page_data<total
  return (
    <div className=" relative min-w-full flex flex-col overflow-x-auto ">
       {isLoading && <Loading/>}
      <div className=" min-w-full flex flex-row  ">
      <div className=" w-full flex flex-row gap-2 ">
      <Modal
          isOpen={isOpen}
          onClose={toggleModal}
          title="Add Todo" 
          >
            <AddTodo isOpen={isOpen}  onClose={toggleModal}  />
          </Modal>
         
        <div className="min-w-[400px] text-center flex flex-col overflow-hidden ">
          <div className="w-full font-bold bg-blue-500 sticky top-0 px-6 py-3 text-white mb-1 flex justify-between rounded-md ">
          <span>To Do </span>
          <span onClick={toggleModal} ><FaPlus size={20} /></span>
          
             </div>
            {
              data?.data && data?.data.filter((task) => task.status === "Pending").map((task)=>(
                <div key={task._id} className=" w-full h-auto bg-blue-500 my-2 rounded-md ">
              <div className=" w-full h-full bg-white m-1 rounded-md ">
               <h3 className=" font-semibold ">{task.todo}</h3>
               <p >{task?.des}</p>
                   <div><FormateDate date={task?.createdAt}/> </div>
                   <button onClick={()=>todoUpdateTask(task._id)} className=" px-2 py-1 bg-black text-white rounded-md ">Progress</button>
               </div>
              </div>
              ))
            }
        
  
        </div>
        <div className="min-w-[400px] text-center flex flex-col overflow-hidden ">
          <h1 className="w-full font-bold bg-yellow-500 sticky top-0 px-6 py-3 text-white mb-1 text-start rounded-md ">In Progress</h1>
          {
              data?.data && data?.data.filter((task) => task.status === "InProgress").map((task)=>(
                <div key={task._id} className=" w-full h-auto bg-yellow-500 my-2 rounded-md ">
              <div className=" w-full h-full bg-white m-1 rounded-md ">
               <h3>{task.todo}</h3>
               <p>{task?.des}</p>
               <div><FormateDate date={task?.updatedAt}/> </div>
               <button onClick={()=>progressUpdateTask(task._id)} className=" px-2 py-1 bg-black text-white rounded-md ">Completed</button>
               </div>
              </div>
              ))
            }
        </div>
        <div className="min-w-[400px] text-center flex flex-col overflow-hidden ">
          <h1 className="w-full font-bold bg-green-500 sticky top-0 px-6 py-3 text-white mb-1 text-start rounded-md ">Completed</h1>
          {
              data?.data && data?.data.filter((task) => task.status === "Completed").map((task)=>(
                <div key={task._id} className=" w-full h-auto bg-green-500 my-2 rounded-md ">
              <div className=" w-full h-full bg-white m-1 rounded-md ">
               <h3>{task.todo}</h3>
               <p>{task?.des}</p>
               <div><FormateDate date={task?.updatedAt}/> </div>
               <button onClick={()=>deleteUpdateTask(task._id)} className=" px-2 py-1 bg-black text-white rounded-md ">Delete</button>

               </div>
              </div>
              ))
            }
           
        </div>
      </div>
      
    </div>
    <div className=" w-full  flex flex-row items-center justify-center gap-4 my-10 ">
        <button onClick={prevPage} className=" px-2 py-1 bg-gray-700 text-white rounded-md ">Prev</button>
        <button onClick={nextPage} className=" px-2 py-1 bg-gray-700 text-white rounded-md ">Next</button>
      </div>
    </div>
  );
};

export default Table;
