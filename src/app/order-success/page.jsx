import { Suspense } from "react";
import OrderSuccessContent from "./OrderSuccessContent";
import Navbar from "@/components/Navbar";

export default function OrderSuccessPage() {
  return (
    <Suspense 
      fallback={
        <>
          <Navbar />
          <div className="min-h-screen pt-24 md:pt-8 bg-gray-50">
            <div className="max-w-4xl mx-auto px-8 py-16">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading order details...</p>
              </div>
            </div>
          </div>
        </>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
