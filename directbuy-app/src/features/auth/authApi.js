
import { baseApi } from "../../app/baseApi";


export const authApi =  baseApi.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: data
            }),
            invalidatesTags:['auth']
            
        }),

        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout',
                method: 'POST',
            }),
            invalidatesTags:['auth']
        }),
        getMe: builder.query({
            query: () => 'auth/me',
            providesTags:['auth']
        })
    })
})
export const { useLoginMutation, useGetMeQuery, useLogoutMutation } = authApi