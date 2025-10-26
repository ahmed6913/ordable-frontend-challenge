"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconShoppingCart,
  IconPackage,
  IconShoppingBag,
} from "@tabler/icons-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();

  const cartIcon = (
    <div className="relative h-full w-full">
      <IconShoppingBag className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
          {cartCount > 99 ? "99+" : cartCount}
        </span>
      )}
    </div>
  );

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Products",
      icon: (
        <IconShoppingCart className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/products",
    },
    {
      title: "Cart",
      icon: cartIcon,
      href: "/cart",
    },
    {
      title: "Order Tracking",
      icon: (
        <IconPackage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/order",
    },
  ];

  return (
    <>
      {/* Desktop Navigation - Top */}
      <div className="hidden md:flex items-center justify-center h-20 w-full mt-15">
        <FloatingDock items={links} />
      </div>

      {/* Mobile Navigation - Top Fixed */}
      <div className="md:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={links} />
      </div>
    </>
  );
}
