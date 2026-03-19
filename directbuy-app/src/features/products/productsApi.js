import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8081/api/'
    }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => 'product',
            providesTags: ['product']
        }),
        getProductById: builder.query({
            query: (id) => `product/${id}`,
            providesTags: (result, error, id) => [{ type: 'product', id }]
        })
    })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi