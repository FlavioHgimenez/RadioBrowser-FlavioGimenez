import { useContext } from "react"
import { IPropsSideBar } from "../../interface/userModel"
import { RadioContext } from "../../provider"
import HeaderHome from "./HeaderHome/HeaderHome"
import ListFavoriteHome from "./ListFavoriteRadios/ListFavoriteHome"

const Home = () => {

      const { RadioItems, sidebarOpen, handleSideBarOpen } = useContext(RadioContext)

      return (
            <div className={` bg-[#ece7e7] w-full ${sidebarOpen ? "lg:pl-72" : "lg:pl-[75px]"} transition-all duration-500 ease-in-out`}>
                  <div className="p-5 h-full container mx-auto">
                        <HeaderHome />
                        <div className="lg:pt-5">
                              <ListFavoriteHome />
                        </div>
                  </div>
            </div>
      )
}

export default Home