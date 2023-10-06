// Your component file
import "./globals.css";
import { Ubuntu } from "next/font/google";

const inter = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title:
    "Homepage - Clean Creations - New Orleans Healthy Gourmet Meal Prep & Delivery",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
