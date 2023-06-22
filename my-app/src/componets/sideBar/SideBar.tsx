import { IPropsSideBar } from "../../interface/userModel";
import { RadioContext } from "../../provider";
import ListRadios from "./ListRadios/ListRadios";
import { useContext } from "react"

const Sidebar = () => {

      const { RadioItems, sidebarOpen, handleSideBarOpen } = useContext(RadioContext)

      return (
            <div className={
                  `hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex justify-between bg-[#f1ecec] ${sidebarOpen ? "lg:w-72" : "lg:w-[75px]"}  lg:flex-col transition-all duration-500 ease-in-out`
            }>
                  <div className={
                        `flex grow flex-col rounded-r-xl shadow-xl ${sidebarOpen ? "px-6" : "px-4"}`
                  }>

                        <div className={
                              `flex  justify-end fixed transition-all duration-500 ease-in-out
                              ${sidebarOpen ? "left-[15px] gap-2 top-[65px]" : "left-[0px] gap-0 top-[65px] animate-pulse"}`
                        }>
                              <input
                                    type="text"
                                    placeholder="Procurar Rádio..."
                                    className={`ease-in-out placeholder:text-[14px] placeholder-gray-500 shadow-md focus:outline-none focus:ring px-2 py-2 rounded-full transition-width duration-500 ${sidebarOpen ? "w-[245px]" : "opacity-0 w-0"} `}
                                    style={{ transitionDelay: "300ms" }}
                              />
                              <button
                                    className={`text-whit font-[600] rounded-md transform transition-transform bg-white shadow-md p-1 ${sidebarOpen ? 'rotate-180 duration-500' : 'rotate-0 duration-500'}`}
                                    onClick={(e) => {
                                          handleSideBarOpen(!sidebarOpen)
                                    }}
                              >
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth={1.5}
                                          stroke="currentColor"
                                          className={`w-8 h-8`}>
                                          <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                              </button>
                        </div>
                        <div className={`ease-in-out mt-[130px] w-full ${sidebarOpen ? "w-50" : "opacity-0 w-0"} px-2 py-1 rounded-md transition-width duration-500`}>
                              <ListRadios />
                        </div>
                  </div>
            </div>
      )
}

export default Sidebar