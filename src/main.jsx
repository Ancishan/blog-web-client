import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import {Toaster} from 'react-hot-toast'
// import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

// const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-[1400px] mx-auto'>
<React.StrictMode>
    <AuthProvider>
    {/* <QueryClientProvider client={queryClient}> */}
    <RouterProvider router={router}> </RouterProvider>
    {/* </QueryClientProvider> */}
    <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>
</div>
)
