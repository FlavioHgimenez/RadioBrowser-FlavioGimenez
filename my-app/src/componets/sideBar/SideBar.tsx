import { RadioContext } from "../../provider";
import Pagination from "../Pagination/Pagination";
import DropdawnFilter from "./DropdawnFilter/DropdawnFilter";
import ListRadios from "./ListRadios/ListRadios";
import { useContext } from "react"

const Sidebar = () => {

      const { sidebarOpen, handleSideBarOpen, filter, handleFilter } = useContext(RadioContext)

      return (
            <div className={
                  `fixed lg:inset-y-0 z-50 flex justify-between h-full bg-[#f1ecec] ${sidebarOpen ? "w-full lg:w-[400px]" : "w-0 lg:w-[77px]"}  lg:flex-col transition-all duration-500 ease-in-out`
            }>
                  <div className={
                        `grow lg:flex flex-col rounded-r-xl shadow-xl ${sidebarOpen ? "px-6" : "lg:px-4"}`
                  }>
                        <div className={`ease-in-out mt-[130px] w-full ${sidebarOpen ? "w-50" : "opacity-0 w-0"} px-2 py-1 rounded-md transition-width duration-500`}>
                              <ListRadios />
                              <Pagination />
                        </div>
                        <div className={
                              `flex  justify-center fixed transition-all duration-500 ease-in-out lg:w-fit
                              ${sidebarOpen ? "left-[15px] gap-2 top-[65px] w-full" : "lg:left-[0px] left-[15px] gap-0 top-[60px] animate-pulse"}`
                        }>
                              <div className={`${sidebarOpen ? "flex" : "hidden"} lg:flex items-center`}>
                                    <input
                                          type="text"
                                          disabled={filter.type === ""}
                                          placeholder={`${filter.type === "" ? "Selecione o tipo do filtro..." : `Procurar por ${filter.type}`}`}
                                          className={`ease-in-out placeholder:text-[14px] border placeholder-gray-500 shadow-md focus:outline-none focus:ring px-2 py-2 rounded-l-full transition-width duration-500 ${sidebarOpen ? "w-max lg:w-[315px]" : "opacity-0 w-0"} `}
                                          style={{ transitionDelay: "300ms" }}
                                          onChange={(e) => {
                                                if (sidebarOpen) {
                                                      handleFilter({
                                                            ...filter,
                                                            value: e.target.value
                                                      })
                                                }
                                          }}
                                    />
                                    <DropdawnFilter />
                              </div>
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
                  </div>
            </div>
      )
}

export default Sidebar