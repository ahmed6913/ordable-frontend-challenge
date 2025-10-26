"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  IconCheck,
  IconPackage,
  IconArrowRight,
  IconMail,
} from "@tabler/icons-react";

export default function OrderSuccess() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (orderId) {
      // Load order details from localStorage
      const loadOrder = () => {
        const orders = JSON.parse(localStorage.getItem("orders") || "[]");
        const foundOrder = orders.find((o) => o.id === orderId);
        setOrder(foundOrder);
      };

      loadOrder();
    }
  }, [orderId]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  if (!orderId) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-24 md:pt-8">
          <div className="max-w-4xl mx-auto px-8 py-16 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Invalid Order
            </h1>
            <p className="text-gray-600 mb-8">No order ID provided.</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 md:pt-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 py-16">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <IconCheck className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Thank you for your purchase. Your order has been successfully
              placed.
            </p>
            {order && (
              <p className="text-gray-600">
                Order #{order.id} • Total: {formatPrice(order.total)}
              </p>
            )}
          </div>

          {/* Order Details Card */}
          {order && (
            <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Order Info */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Order Details
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">Order Number:</span>
                      <span className="font-medium text-gray-900 ml-2">
                        {order.id}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Order Date:</span>
                      <span className="font-medium text-gray-900 ml-2">
                        {new Date(order.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-medium text-gray-900 ml-2">
                        {formatPrice(order.total)}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Status:</span>
                      <span className="inline-flex items-center gap-1 ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                        <IconPackage className="w-3 h-3" />
                        Processing
                      </span>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Shipping Address
                  </h2>
                  <div className="text-gray-600">
                    <p className="font-medium text-gray-900">
                      {order.customer.name}
                    </p>
                    <p>{order.shipping.address}</p>
                    <p>
                      {order.shipping.city}, {order.shipping.state}{" "}
                      {order.shipping.zipCode}
                    </p>
                    <p>{order.shipping.country}</p>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Items Ordered ({order.items.length})
                </h3>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                        <IconPackage className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity} × {formatPrice(item.price)}
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
            </div>
          )}

          {/* What's Next */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              What happens next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconMail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Confirmation Email
                </h3>
                <p className="text-sm text-gray-600">
                  You&apos;ll receive an order confirmation email shortly with
                  all the details.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <IconPackage className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Order Processing
                </h3>
                <p className="text-sm text-gray-600">
                  We&apos;ll prepare your items for shipment within 1-2 business
                  days.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Delivery</h3>
                <p className="text-sm text-gray-600">
                  Your order will be delivered within 3-5 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <IconPackage className="w-5 h-5" />
              Track Your Order
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Continue Shopping
              <IconArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Support */}
          <div className="text-center mt-12 pt-8 border-t">
            <p className="text-gray-600 mb-2">Need help with your order?</p>
            <p className="text-sm text-gray-500">
              Contact our support team at{" "}
              <a
                href="mailto:support@store.com"
                className="text-blue-600 hover:text-blue-700"
              >
                support@store.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:text-blue-700"
              >
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
