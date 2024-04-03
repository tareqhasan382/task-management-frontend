import baseApi from "../api/baseApi";
export const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    tasks: build.query({
      query: (arg) => ({
        url: "/api/v1/task/tasks",
        method: "GET",
        params:arg
      }),
      providesTags: ["tasks"],
    }),
    taskCreate: build.mutation({
        query: (data) => ({
          url: "/api/v1/task/create-task",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["tasks"],
      }),
      updateTask: build.mutation({
        query: ({id,data}) => ({
          url: `/api/v1/task/update/${id}`,
          method: "PATCH",
          body:data
        }),
        invalidatesTags: ["tasks"],
      }),
      allTodotasks: build.query({
        query: (arg) => ({
          url: "/api/v1/task/status-task",
          method: "GET",
          params:arg
        }),
        providesTags: ["tasks"],
      }),
   
  }),
});

export const { useTaskCreateMutation,useTasksQuery ,useUpdateTaskMutation ,useAllTodotasksQuery} = taskApi;
