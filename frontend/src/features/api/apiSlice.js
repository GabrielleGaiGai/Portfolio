import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Project'],
    endpoints: builder => ({
        getProjects: builder.query({
            query: () => '/projects',
            providesTags: (result = [], error, arg) => [
                'Project',
                ...result.map(({ id }) => ({ type: 'Project', id }))
            ]
        }),

        getProject: builder.query({
            query: projectId => `/projects/${projectId}`,
            providesTags: (result, error, arg) => [{ type: 'Project', id: arg }]
        }),

        AddProject: builder.mutation({
            query: project => ({
                url: '/projects',
                method: 'POST',
                body: project
            }),
            invalidatesTags: ['Project']
        }),

        EditProject: builder.mutation({
            query: project => ({
                url: '/projects',
                method: 'PATCH',
                body: project
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Project', id: arg._id }]
        }),
        
        DeleteProject: builder.mutation({
            query: projectId => ({
                url: '/projects',
                method: 'DELETE',
                body: projectId
            }),
            invalidatesTags: ['Project']
        })
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetProjectsQuery, useGetProjectQuery, useAddProjectMutation, useEditProjectMutation, useLazyGetProjectQuery, useDeleteProjectMutation } = apiSlice