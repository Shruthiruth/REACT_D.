
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
        }),
        deleteProductById: builder.mutation({
            query: (id) => ({
                url: `product/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['product']
        }),
        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/product',
                method: 'POST',
                body: newProduct
            }),
            invalidatesTags: ['product']
        }),
        updateProduct: builder.mutation({
            query: ({ id, product }) => ({
                url: `product/${id}`,
                method: 'PUT',
                body: product
            }),
            invalidatesTags: ['product']
        })
    })
})

export const { useGetProductsQuery, useGetProductByIdQuery ,useAddProductMutation,useDeleteProductByIdMutation,useUpdateProductMutation} = productsApi