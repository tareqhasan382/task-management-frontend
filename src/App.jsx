

// import CandidateNav from "./components/CandidateNav";
import AllTodo from "./components/AllTodo";


const App = () => {
  return (
<main >
<div className=" text-black lg:px-5 px-1 max-w-[1280px] h-full mx-auto py-10 " >
      <div className=" w-full h-screen " >
     <div>
        {/* <CandidateNav /> */}
     </div>
     <div>
        {/* <Table /> */}
        <AllTodo/>
     </div>
      </div>
    </div>
</main>
  )
}

export default App