import "../globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Ordable Frontend Challenge",
  description: "E-commerce application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}