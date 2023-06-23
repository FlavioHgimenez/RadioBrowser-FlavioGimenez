import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { RadioContext } from '../../../provider'

const classNames = (...classes: any[]) => {
      return classes.filter(Boolean).join(' ')
}

const DropdawnFilter = () => {

      const { handleFilter, filter, sidebarOpen } = useContext(RadioContext)

      return (
            <Menu as="div" className={`relative inline-block text-left h-full ${sidebarOpen ? "" : "opacity-0"}`}>

                  <Menu.Button
                        disabled={!sidebarOpen}
                        className="inline-flex rounded-r-full w-full h-full items-center justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-lg ring-inset ring-gray-300 hover:bg-gray-50 bg-white focus:outline-none focus:ring">
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </Menu.Button>

                  <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                  >
                        <Menu.Items className="absolute right-0 z-50 bg-[white] mt-2 w-56 origin-top-right rounded-md shadow-lg border ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                    <Menu.Item>
                                          {({ active }) => (
                                                <button
                                                      className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm w-full text-start'
                                                      )}
                                                      onClick={(e) => handleFilter({
                                                            ...filter,
                                                            type: "nome"
                                                      })}
                                                >
                                                      Nome
                                                </button>
                                          )}
                                    </Menu.Item>
                                    <Menu.Item>
                                          {({ active }) => (
                                                <button
                                                      className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm w-full text-start'
                                                      )}
                                                      onClick={(e) => handleFilter({
                                                            ...filter,
                                                            type: "linguagem"
                                                      })}
                                                >
                                                      Linguagem
                                                </button>
                                          )}
                                    </Menu.Item>
                                    <Menu.Item>
                                          {({ active }) => (
                                                <button
                                                      className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm w-full text-start'
                                                      )}
                                                      onClick={(e) => handleFilter({
                                                            ...filter,
                                                            type: "pais"
                                                      })}
                                                >
                                                      País
                                                </button>
                                          )}
                                    </Menu.Item>
                              </div>
                        </Menu.Items>
                  </Transition>
            </Menu>
      )
}

export default DropdawnFilter