import React from 'react'
import Navbar from '@/components/Navbar'

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="p-8 pt-24 md:pt-8">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="mt-4 text-gray-600">Browse our products</p>
      </div>
    </>
  )
}