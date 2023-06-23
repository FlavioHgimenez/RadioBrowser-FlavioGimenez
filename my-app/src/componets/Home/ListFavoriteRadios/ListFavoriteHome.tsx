import { useContext, useState } from "react"
import { RadioContext } from "../../../provider"
import { IDataRadiosItem } from "../../../interface/userModel"
import EmptyList from "../EmptyList/EmptyList"
import { toast } from "react-toastify";

const ListFavoriteHome = () => {

      const { favoriteRadio, editRadioFavorite, removeFavorite, radioUrl, play, stop, isLoading } = useContext(RadioContext)
      const [itemEdit, setItemEdit] = useState("")
      const [newName, setNewName] = useState("")

      const editName = () => {
            editRadioFavorite(itemEdit, newName)
            setItemEdit("")
            toast.success('Item Editado com sucesso!', { autoClose: 1500 });
      }

      const startEdition = (id: string, name?: string) => {
            setItemEdit(id)
            setNewName(name || "")
      }

      const getCurrentRadioName = () => {
            const radio = favoriteRadio.find((radio: IDataRadiosItem) => radio.url === radioUrl)
            return radio.name
      }

      return (
            <main className="bg-[#dde1ed] rounded-xl flex flex-col">
                  {radioUrl !== "" && (
                        <section className="bg-[#0b0c1c] flex items-center p-3 gap-3 shadow-md rounded-xl transition-opacity duration-700 delay-100 animate-opacity">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                              </svg>
                              <h2 className="text-[white]">{getCurrentRadioName()}</h2>
                        </section>
                  )}
                  <ul className="max-h-full overflow-y-scroll flex flex-col p-4 gap-2">
                        {
                              favoriteRadio?.map((favItem: IDataRadiosItem, index: number) => (
                                    <li key={index} className="bg-white p-3 flex justify-between items-center shadow-md rounded-xl transition-opacity duration-700 delay-100 animate-opacity">
                                          <div className="flex items-center gap-3">
                                                {favItem.url !== radioUrl &&
                                                      (
                                                            <button
                                                                  disabled={isLoading}
                                                                  className={`aspect-square rounded-full p-2 cursor-pointer h-full bg-[#1b1b1b] ${isLoading ? "bg-gray-400" : "bg-[#1b1b1b]"}`}
                                                                  onClick={() => play(favItem.url)}
                                                            >
                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                                                  </svg>
                                                            </button>
                                                      )
                                                      ||
                                                      (
                                                            <button
                                                                  disabled={isLoading}
                                                                  className={`aspect-square rounded-full p-2 cursor-pointer h-full  ${isLoading ? "bg-gray-200" : "bg-[#1b1b1b]"}`}
                                                                  onClick={stop}
                                                            >
                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                                                                  </svg>
                                                            </button>
                                                      )}

                                                {favItem.stationuuid === itemEdit && (
                                                      <div className="flex">
                                                            <input
                                                                  type="text"
                                                                  value={newName}
                                                                  className="bg-white shadow border rounded-l-full px-2"
                                                                  onChange={(e) => { setNewName(e.target.value) }}
                                                            />
                                                            <button
                                                                  onClick={editName}
                                                                  className="bg-[#2baa11] shadow border border-[#2baa11] rounded-r-full px-2 hover:bg-[#5ab149] hover:border-[#2baa11]">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                                  </svg>
                                                            </button>
                                                      </div>
                                                ) || (
                                                            <h1>{favItem.name && favItem.name.replaceAll(" ", "").length > 0 ? favItem.name : "Sem Nome"}</h1>
                                                      )}
                                          </div>
                                          <div className="flex gap-3">
                                                <button
                                                      className="p-2 rounded-lg bg-[#e3e3e3] hover:bg-[#d7d7d7]"
                                                      onClick={() => startEdition(favItem.stationuuid, favItem.name)}
                                                >
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                      </svg>
                                                </button>
                                                <button
                                                      className="p-2 rounded-lg bg-[#e3e3e3] hover:bg-[#d7d7d7]"
                                                      onClick={(e) => removeFavorite(favItem.stationuuid)}
                                                >
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                      </svg>
                                                </button>
                                          </div>
                                    </li>
                              ))
                        }
                        <EmptyList />
                  </ul>
            </main>
      )
}

export default ListFavoriteHome