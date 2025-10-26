import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconShoppingCart, IconPackage } from "@tabler/icons-react";


export default function Navbar() {
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
