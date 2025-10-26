"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import {
  IconPackage,
  IconTruck,
  IconCheck,
  IconClock,
  IconSearch,
} from "@tabler/icons-react";

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Load orders from localStorage (in a real app, this would be from an API)
    const loadOrders = () => {
      const savedOrders = localStorage.getItem("orders");
      if (savedOrders) {
        try {
          const parsedOrders = JSON.parse(savedOrders);
          setOrders(parsedOrders);
        } catch (error) {
          console.error("Error loading orders:", error);
        }
      }
    };

    loadOrders();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <IconClock className="w-5 h-5 text-yellow-500" />;
      case "processing":
        return <IconPackage className="w-5 h-5 text-blue-500" />;
      case "shipped":
        return <IconTruck className="w-5 h-5 text-purple-500" />;
      case "delivered":
        return <IconCheck className="w-5 h-5 text-green-500" />;
      default:
        return <IconClock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 md:pt-8">
        <div className="max-w-6xl mx-auto px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Order Tracking
            </h1>
            <p className="text-gray-600">Track and manage your orders</p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search orders by ID or product name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Orders List */}
          {filteredOrders.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <IconPackage className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                No orders found
              </h2>
              <p className="text-gray-600 mb-8">
                {searchTerm
                  ? "No orders match your search criteria."
                  : "You haven't placed any orders yet. Start shopping to see your orders here!"}
              </p>
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <IconPackage className="w-5 h-5" />
                Start Shopping
              </a>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-lg shadow-sm border p-6"
                >
                  {/* Order Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Order #{order.id}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Placed on {formatDate(order.date)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-3 sm:mt-0">
                      <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusIcon(order.status)}
                        <span className="capitalize">{order.status}</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(order.total)}
                      </span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Items ({order.items.length})
                    </h4>
                    <div className="space-y-3">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <IconPackage className="w-6 h-6 text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">
                              {item.title}
                            </p>
                            <p className="text-sm text-gray-600">
                              Quantity: {item.quantity} ×{" "}
                              {formatPrice(item.price)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Progress */}
                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Order Progress
                    </h4>
                    <div className="flex items-center justify-between">
                      {["pending", "processing", "shipped", "delivered"].map(
                        (status, index) => {
                          const isActive =
                            [
                              "pending",
                              "processing",
                              "shipped",
                              "delivered",
                            ].indexOf(order.status) >= index;
                          const isCurrent = order.status === status;

                          return (
                            <div
                              key={status}
                              className="flex flex-col items-center"
                            >
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  isActive
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-400"
                                } ${isCurrent ? "ring-4 ring-blue-200" : ""}`}
                              >
                                {getStatusIcon(status)}
                              </div>
                              <span
                                className={`text-xs mt-1 capitalize ${
                                  isActive
                                    ? "text-blue-600 font-medium"
                                    : "text-gray-400"
                                }`}
                              >
                                {status}
                              </span>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="border-t pt-4 mt-4 flex gap-3">
                    <button className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                    {order.status === "delivered" && (
                      <button className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Reorder
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
