import React from 'react';

const JobTable = () => {
  return (
    <div>
      <table className="min-w-full table-auto border-collapse whitespace-no-wrap bg-white table-striped relative">
        <thead className=" bg-red-500 ">
          <tr className=" bg-yellow-500 w-screen ">
            <th className="sticky top-0 px-6 py-3 text-gray-600  ">Name</th>
            <th className="sticky top-0 px-6 py-3 text-gray-600  ">Email</th>
            <th className="sticky top-0 px-6 py-3 text-gray-600  ">
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="p-2 bg-yellow-500 border-[1px] rounded-lg outline-none text-gray-600"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </th>
            <th className="sticky top-0 px-6 py-3 text-gray-600 ">
              <select
                value={selectedStatus}
                onChange={handleSelectChangeStatus}
                className="p-2 bg-yellow-500 border-[1px] rounded-lg outline-none text-gray-600"
              >
                <option value="">Status</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="rejected">Rejected</option>
              </select>
            </th>
            <th className="sticky top-0 px-6 py-3 text-gray-600 ">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            !isError &&
            data?.data &&
            data?.data.map((item) => (
              <tr key={item._id} className=" hover:bg-orange-100  ">
                <td className="border-t-0  text-center px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {item?.name}
                </td>
                <td className="border-t-0 px-6 text-center align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {item?.email}
                </td>
                <td className="border-t-0 px-6 text-center align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {item?.gender}
                </td>
                <td className="border-t-0 px-6 text-center align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  {item?.status}
                </td>
                <td className="border-t-0 px-6 text-center align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <div className=" flex flex-row gap-2 items-center justify-center w-full ">
                    <div className=" flex flex-row items-center justify-center w-full ">
                      <button
                        onClick={() => handleRejected(item?._id)}
                        disabled={item.status !== "shortlisted"}
                        className={`${
                          item.status !== "shortlisted"
                            ? " opacity-60 p-2 rounded cursor-not-allowed font-semibold bg-red-950 duration-150 text-white"
                            : "p-2 rounded font-semibold bg-red-700 hover:bg-red-950 duration-150 text-white"
                        }`}
                      >
                        Rejected
                      </button>
                      <span
                        onClick={() => handledelete(item?._id)}
                        className="inline-block p-2 rounded transition duration-200 transform hover:bg-white hover:scale-110"
                      >
                        <AiTwotoneDelete size={25} color="Red" />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobTable;
