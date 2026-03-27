
import { baseApi } from "../../app/baseApi";


export const productsApi = baseApi.injectEndpoints({
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