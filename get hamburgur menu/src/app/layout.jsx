import "../styles/globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ReactLenis } from "@/helpers/lenisScroll";

const whiteList = localFont({
  src: "./_fonts/Whitelist.woff2",
  display: "swap",
  variable: "--whiteList",
});
const jetBrainsMono = localFont({
  src: "./_fonts/JetBrainsMono-Regular.ttf",
  display: "swap",
  variable: "--jet-brains-mono",
});
const SFProDisplay = localFont({
  src: "./_fonts/SF-pro-display-regular.woff",
  display: "swap",
  variable: "--sf-pro-display",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const metadata = {
  title: "Mohammad Khakshoor",
  description: "personal porfolio for mohammad khakshoor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root animatedScroll={50}>
        <body
          className={`${inter.variable} ${SFProDisplay.className} ${whiteList.variable} ${SFProDisplay.variable} ${jetBrainsMono.variable}  antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
