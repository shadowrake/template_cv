"use client";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline' 
import Profile from '../components/profile'
import Experince from '../components/experience'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main>
      <Disclosure as="nav" className="bg-white shadow sticky top-0 z-40" >
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center text-black text-lg font-bold ">
                    {/* set logo img-link here */}
                    <img
                      className="h-8 w-auto"
                      src=""
                      alt=""
                    />
                    Template cv site
                  </div>
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  </div>
                </div>
              </div>
            </div>
          </>
      </Disclosure>
      <Profile />
      <Experince />
      <Footer />
    </main>
  );
}
