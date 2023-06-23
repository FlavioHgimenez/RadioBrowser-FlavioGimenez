import { useContext } from "react"
import { RadioContext } from "../../provider"
import HeaderHome from "./HeaderHome/HeaderHome"
import ListFavoriteHome from "./ListFavoriteRadios/ListFavoriteHome"
import Radio from "../Radio/Radio"

const Home = () => {

      const { sidebarOpen } = useContext(RadioContext)

      return (
            <div className={`bg-[#ece7e7] w-full ${sidebarOpen ? "lg:pl-[400px]" : "lg:pl-[75px]"} transition-all duration-500 ease-in-out`}>
                  <div className="p-5 h-full container mx-auto">
                        <HeaderHome />
                        <div className="lg:pt-5">
                              <ListFavoriteHome />
                        </div>
                        <Radio />
                  </div>
            </div>
      )
}

export default Home