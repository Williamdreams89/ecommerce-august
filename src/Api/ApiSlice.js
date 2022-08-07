import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const TheApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://127.0.0.1:8000/"}),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => "main__products_api/"
        }), 
    })
})

export const {useGetProductsQuery} = TheApiSlice;