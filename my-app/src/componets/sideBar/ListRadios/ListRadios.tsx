import { useContext, useState } from "react"
import { RadioContext } from "../../../provider"

const ListRadios = () => {

      const { RadioItems, sidebarOpen, addFavorite, favoriteRadio } = useContext(RadioContext)

      return (
            <ul className={`w-full flex flex-col gap-2 transition-transform duration-500 ease-linear transform ${sidebarOpen ? "translate-x-0 delay-300" : "-translate-x-full"}`}>
                  {RadioItems?.data?.map((radio: any, index: number) => {

                        const itemInList = favoriteRadio?.some((fav: any) => fav.name === radio.name)

                        return (
                              <li
                                    key={index}
                                    className={`bg-white flex justify-between cursor-pointer rounded-lg p-2 shadow-md hover:bg-slate-300 ${sidebarOpen ? "flex w-full translate-x-0" : "hidden"}`}
                                    onClick={(e) => {
                                          addFavorite(radio)
                                    }}
                              >
                                    <span className="text-sm font-medium truncate">{radio.name}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className={`w-5 h-5 ${itemInList ? "flex" : "hidden"}`}>
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                              </li>
                        )
                  })}
            </ul>
      )
}
export default ListRadios