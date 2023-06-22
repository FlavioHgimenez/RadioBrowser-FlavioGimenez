import { useContext } from "react"
import { RadioContext } from "../../../provider"
import { IDataRadios, IDataRadiosItem } from "../../../interface/userModel"
import EmptyList from "../EmptyList/EmptyList"

const ListFavoriteHome = () => {

      const { favoriteRadio } = useContext(RadioContext)

      return (
            <main className="bg-[#dde1ed] rounded-xl flex flex-col">
                  <section className="bg-[#0b0c1c] flex items-center p-3 shadow-md rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <h2 className="text-[white]">Best FM</h2>
                  </section>
                  <ul className="h-[650px] flex flex-col p-4 gap-2 overflow-y-scroll">
                        {
                              favoriteRadio?.map((favItem: IDataRadiosItem, index: number) => (
                                    <li key={index} className="bg-white p-3 shadow-md rounded-xl transition-opacity duration-700 delay-100 animate-opacity">
                                          <h1>{favItem.name}</h1>
                                    </li>
                              ))
                        }
                        <EmptyList />
                  </ul>
            </main>
      )
}

export default ListFavoriteHome