import { RadioContext } from "../../../provider"
import { useContext, useState } from "react"

const HeaderHome = () => {

      const { filterFavoritesRadios } = useContext(RadioContext)
      const [value, setValue] = useState("")

      return (
            <header className="flex flex-col lg:flex-row justify-around p-5">
                  <h1 className="text-[25px] pb-[10px] text-center lg:text-left underline font-[500]">Radio Browser</h1>
                  <div className="relative">
                        <input
                              type="text"
                              placeholder="Procurar..."
                              className="py-2 px-4 rounded-full w-full bg-gray-100 text-gray-800 placeholder-gray-500 shadow-md focus:outline-none focus:ring"
                              onChange={(e) => filterFavoritesRadios(e.target.value)}
                        />
                        <button className="absolute right-0 top-0 mt-2 mr-2" onClick={(e) => filterFavoritesRadios(value)}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                        </button>
                  </div>
            </header>
      )
}

export default HeaderHome