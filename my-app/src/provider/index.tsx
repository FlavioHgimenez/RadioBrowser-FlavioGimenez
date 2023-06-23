import {
      useEffect,
      createContext,
      ReactNode,
      useState,
      useRef
} from "react";
import { IDataRadios, IDataRadiosItem, IFilterStation } from "../interface/userModel";
import { toast } from "react-toastify";

export const RadioContext = createContext({} as any);

type ProductContextProvider = {
      children: ReactNode;
};

const BaseUrl = 'https://de1.api.radio-browser.info'

export const ProductContextProvider = ({ children }: ProductContextProvider) => {

      /* STATES */
      const [RadioItems, setProductItems] = useState<IDataRadios>();
      const [favoriteRadio, setFavoriteRadio] = useState([]);
      const [currentPage, setCurrentPage] = useState(1)
      const [sidebarOpen, setSidebarOpen] = useState(true)
      const [isLoading, setIsLoading] = useState(false)
      const [radioUrl, setRadioUrl] = useState("")
      const [filter, setFilter] = useState<IFilterStation>({
            limit: 10,
            type: "",
            value: ""
      });

      const timeOutRef = useRef<any>()
      const audioRef: any = useRef()

      /* funções setStates */
      const handleFavoritesRadio = (res: []) => setFavoriteRadio(res)
      const handleSideBarOpen = (res: boolean) => setSidebarOpen(res)
      const handleCurrentPage = (res: number) => setCurrentPage(res)
      const handleIsLoading = (res: boolean) => setIsLoading(res)
      const handleFilter = (res: any) => {

            if (timeOutRef.current) {
                  clearTimeout(timeOutRef.current)
            }

            if (res.value !== filter.value) {
                  timeOutRef.current = setTimeout(() => {
                        setCurrentPage(1)
                        getAllRadioItems()
                  }, 1000)
            }
            setFilter(res)
      }

      /* Requests Radio Api  */
      const getAllRadioItems = async () => {
            try {
                  const body: any = {}
                  if (filter.type === "nome") {
                        body.name = filter.value
                  } else if (filter.type === "linguagem") {
                        body.language = filter.value
                  } else if (filter.type === "pais") {
                        body.country = filter.value
                  }
                  const dataRadio =
                        await fetch(`${BaseUrl}/json/stations/search?limit=${filter?.limit}&offset=${(currentPage - 1) * 10}`, {
                              method: "POST",
                              body: JSON.stringify(body),
                              headers: { "Content-Type": "application/json" }
                        })
                              .then(res => res.json())
                  setProductItems({
                        data: dataRadio
                  })
            } catch (error) {
                  toast.error('Ops, ocorreu um erro! tente novamente mais tarde');
                  console.log(error);
            }
      };

      /* FUNÇÕES CRUD & FILTER */
      const addFavorite = (item: any) => {
            const storedList: any = localStorage.getItem("favorites")
            let favorites

            if (storedList) {
                  favorites = JSON.parse(storedList);
            } else {
                  favorites = []
            }
            if (!favorites?.some((fav: any) => fav.stationuuid === item.stationuuid)) {
                  favorites.push(item);
                  localStorage.setItem("favorites", JSON.stringify(favorites));
                  setFavoriteRadio(favorites)
            }
      }
      const removeFavorite = (id: string) => {
            const storedList: any = localStorage.getItem("favorites")
            let favorites = JSON.parse(storedList);
            const index = favorites.findIndex((el: IDataRadiosItem) => el.stationuuid === id)
            favorites.splice(index, 1)
            localStorage.setItem("favorites", JSON.stringify(favorites))
            setFavoriteRadio(favorites)
            toast.info("Rádio deletada com sucesso!", { autoClose: 1500 })
      }
      const editRadioFavorite = (id: string, name: string) => {
            const storedList: any = localStorage.getItem("favorites")
            let favorites = JSON.parse(storedList);
            const item = favorites.find((el: IDataRadiosItem) => el.stationuuid === id)
            item.name = name
            localStorage.setItem("favorites", JSON.stringify(favorites))
            setFavoriteRadio(favorites)
      }
      const filterFavoritesRadios = (value: string) => {
            const storedList: any = localStorage.getItem("favorites")
            let favorites = JSON.parse(storedList);

            if (value !== "") {
                  favorites = favorites.filter((item: any) => {
                        const propriedadeValue = item.name.toLowerCase();
                        const searchValue = value.toLowerCase();

                        const normalizedPropriedade = propriedadeValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        const normalizedSearch = searchValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

                        return normalizedPropriedade.includes(normalizedSearch);
                  });

            }
            setFavoriteRadio(favorites)
            return favorites;
      }
      const play = (url: string) => {
            setIsLoading(true)
            setRadioUrl(url)
      }
      const stop = () => {
            setRadioUrl("")
      }

      /* USEEFFECTS */
      useEffect(() => {
            getAllRadioItems();
      }, []);
      useEffect(() => {
            const storedList: any = localStorage.getItem("favorites")
            let favorites

            if (storedList) {
                  favorites = JSON.parse(storedList);
                  setFavoriteRadio(favorites)
            } else {
                  favorites = []
            }
      }, [])
      useEffect(() => {
            getAllRadioItems()
      }, [currentPage])

      return (
            <RadioContext.Provider
                  value={{
                        RadioItems,
                        sidebarOpen,
                        filter,
                        favoriteRadio,
                        currentPage,
                        audioRef,
                        radioUrl,
                        isLoading,
                        handleFavoritesRadio,
                        handleSideBarOpen,
                        getAllRadioItems,
                        handleFilter,
                        addFavorite,
                        editRadioFavorite,
                        handleCurrentPage,
                        filterFavoritesRadios,
                        removeFavorite,
                        play,
                        handleIsLoading,
                        stop
                  }}
            >
                  {children}
            </RadioContext.Provider>
      );
}