import React from 'react'
import Navbar from '@/components/Navbar'

export default function Order() {
  return (
    <>
      <Navbar />
      <div className="p-8 pt-24 md:pt-8">
        <h1 className="text-2xl font-bold">Order Tracking</h1>
        <p className="mt-4 text-gray-600">Track your orders here</p>
      </div>
    </>
  )
}