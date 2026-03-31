import { baseApi } from "../../app/baseApi";


export const ordersApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getOrders : builder.query({
            query:()=>'orders',
            providesTags:['orders']
        }),
        getMyOrders : builder.query({
            query:()=>'orders/my',
            providesTags:['orders']
        }),
        createOrder : builder.mutation({
            query:()=>({
                url:'orders/place',
                method:'POST'
            }),
            invalidatesTags:['orders']      
            })


    })
})

export const { useGetOrdersQuery, useGetMyOrdersQuery, useCreateOrderMutation } = ordersApi 