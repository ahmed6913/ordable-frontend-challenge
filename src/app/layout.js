import "../globals.css";

export const metadata = {
  title: "Ordable Frontend Challenge",
  description: "E-commerce application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}