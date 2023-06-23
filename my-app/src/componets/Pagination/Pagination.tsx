import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid"
import { useContext } from "react"
import { RadioContext } from "../../provider"

const Pagination = () => {

      const { sidebarOpen, currentPage, handleCurrentPage } = useContext(RadioContext)


      return (
            <nav className={`${sidebarOpen ? "flex" : "hidden"} mt-5 items-center justify-between border-t border-gray-200 px-4 sm:px-0`}>
                  <div className="-mt-px flex w-0 flex-1">
                        {currentPage > 1 && (
                              <button
                                    onClick={() => handleCurrentPage(currentPage - 1)}
                                    className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                              >
                                    <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                              </button>
                        )}
                  </div>
                  <div className="hidden md:-mt-px md:flex">
                        {currentPage > 2 && (
                              <button
                                    onClick={() => handleCurrentPage(currentPage - 2)}
                                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                              >
                                    {currentPage - 2}
                              </button>
                        )}
                        {currentPage > 1 && (
                              <button
                                    onClick={() => handleCurrentPage(currentPage - 1)}
                                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                              >
                                    {currentPage - 1}
                              </button>
                        )}
                        <div
                              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm text-black font-[700] underline"
                        >
                              {currentPage}
                        </div>
                        <button
                              onClick={() => handleCurrentPage(currentPage + 1)}
                              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                              {currentPage + 1}
                        </button>
                        <button
                              onClick={() => handleCurrentPage(currentPage + 2)}
                              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                              {currentPage + 2}
                        </button>
                  </div>
                  <div className="-mt-px flex w-0 flex-1 justify-end">
                        <button
                              onClick={() => handleCurrentPage(currentPage + 1)}
                              className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        >
                              <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </button>
                  </div>
            </nav>
      )
}

export default Pagination