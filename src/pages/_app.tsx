import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 overflow-hidden lg:px-48 my-14 sm:px-20 mx:px-20">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <SideBar />
        </div>
        <div className="flex flex-col col-span-12 bg-white lg:col-span-9 dark:bg-dark-500 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <NavBar />
          <AnimatePresence>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}
