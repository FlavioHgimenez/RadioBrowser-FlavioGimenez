import { RadioContext } from "../../../provider"
import { useContext, useState } from "react"

const HeaderHome = () => {

      const { filterFavoritesRadios, filter } = useContext(RadioContext)

      return (
            <header className="flex flex-col lg:flex-row justify-around p-5">
                  <h1 className="text-[25px] pb-[10px] text-center lg:text-left underline font-[500]">Radio Browser</h1>
                  <div className="flex">
                        <input
                              type="text"
                              placeholder={`Procurar por...`}
                              className="py-2 px-4 rounded-full w-full bg-gray-100 text-gray-800 placeholder-gray-500 shadow-md focus:outline-none focus:ring"
                              onChange={(e) => filterFavoritesRadios(e.target.value)}
                        />
                  </div>
            </header>
      )
}

export default HeaderHome