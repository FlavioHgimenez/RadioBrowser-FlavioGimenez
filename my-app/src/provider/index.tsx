import {
      useEffect,
      createContext,
      ReactNode,
      useState,
} from "react";
import { IDataRadios, IFilterStation } from "../interface/userModel";
import { json } from "stream/consumers";

export const RadioContext = createContext({} as any/* IProductContext */);

type ProductContextProvider = {
      children: ReactNode;
};

const BaseUrl = 'https://de1.api.radio-browser.info'
export const ProductContextProvider = ({ children }: ProductContextProvider) => {

      /* STATES */
      const [RadioItems, setProductItems] = useState<IDataRadios>();
      const [favoriteRadio, setFavoriteRadio] = useState([]);
      const [filter, setFilter] = useState<IFilterStation>({ limit: 10 });
      const [sidebarOpen, setSidebarOpen] = useState(true)

      /* funções setStates */
      const handleFavoritesRadio = (res: []) => setFavoriteRadio(res)
      const handleSideBarOpen = (res: boolean) => setSidebarOpen(res)
      const handleFilter = (res: any) => setFilter(res)

      /* Requests Radio Api  */
      const getAllRadioItems = async () => {
            try {
                  const dataRadio =
                        await fetch(`${BaseUrl}/json/stations/search?limit=${filter?.limit}`)
                              .then(res => res.json())
                  setProductItems({
                        data: dataRadio
                  })
            } catch (error) {
                  console.log(error);
            }
      };

      const addFavorite = (item: any) => {
            const lastList: any = localStorage.getItem("favorites")
            let favorites

            if (lastList) {
                  favorites = JSON.parse(lastList);
            } else {
                  favorites = []
            }
            if (!favorites?.some((fav: any) => fav.name === item.name)) {
                  favorites.push(item);
                  localStorage.setItem("favorites", JSON.stringify(favorites));
                  setFavoriteRadio(favorites)
            }
      }

      const removeFavorite = () => {

      }

      const editRadioFavorite = () => {

      }

      // const filterFavoritesRadios = (value: string) => {
      //       const filteredStations = favoriteRadio.filter(station => {
      //             const { name, country, language }: any = station;
      //             const lowerCaseSearchTerm = value.toLowerCase();
      //             return (
      //                   name.toLowerCase().includes(lowerCaseSearchTerm) ||
      //                   country.toLowerCase().includes(lowerCaseSearchTerm) ||
      //                   language.toLowerCase().includes(lowerCaseSearchTerm)
      //             );
      //       });
      //       setFavoriteRadio(filteredStations)
      //       return filteredStations;
      // }

      useEffect(() => {
            getAllRadioItems();
      }, [filter, setProductItems]);

      useEffect(() => {
            const lastList: any = localStorage.getItem("favorites")
            let favorites

            if (lastList) {
                  favorites = JSON.parse(lastList);
                  setFavoriteRadio(favorites)
            } else {
                  favorites = []
            }
      }, [])

      return (
            <RadioContext.Provider
                  value={{
                        RadioItems,
                        sidebarOpen,
                        filter,
                        favoriteRadio,
                        handleFavoritesRadio,
                        handleSideBarOpen,
                        getAllRadioItems,
                        handleFilter,
                        addFavorite,
                        // filterFavoritesRadios
                  }}
            >
                  {children}
            </RadioContext.Provider>
      );
}