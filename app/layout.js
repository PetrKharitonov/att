import { Inter } from "next/font/google";
import "./globals.css";
import "./normalize.css";
import Header from "./components/Header/header";
import { MotionProvider } from "./MotionContext";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "АТТ",
  description: "Общество с ограниченной ответственностью «Аукционы. Торги. Тендеры»",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MotionProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </MotionProvider>
    </html>
  );
}
