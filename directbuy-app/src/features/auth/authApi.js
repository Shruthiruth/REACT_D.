import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8081/api/',
        credentials: 'include' 
    }),
    endpoints: builder => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: data
            })
        }),

        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout',
                method: 'POST',
            })
        }),
        getMe: builder.query({
            query: () => 'auth/me'
        })
    })
})
export const { useLoginMutation, useGetMeQuery, useLogoutMutation } = authApi