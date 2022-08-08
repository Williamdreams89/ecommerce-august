import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://127.0.0.1:8000/"}),
    tagTypes : ["Products"],
    endpoints: builder => ({
        getAllProducts: builder.query({
            query: () => "/main__products_api/",
            providesTags: ["Products"]
        }),

        getSingleProduct: builder.query({
            query: (productid) => `/main__products_api/view__product/${productid}/`,
            providesTags: ["Products"]
        }),

        addProduct: builder.mutation({
            query: (product) => ({
                url: "main__products_api/add_products/",
                method: "POST",
                body: product
            }),
            invalidatesTags: ["Products"]
        })

    })
})

export const {useGetAllProductsQuery, useGetSingleProductQuery, useAddProductMutation} = ApiSlice