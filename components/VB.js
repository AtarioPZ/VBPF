import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const VB = () => {
  return (
    <div className='px-6 pt-4'>
        <section className= "bg-slate-700 body-font text-white">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                  <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-16 overflow-hidden">
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                      <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div className="rounded-full overflow-hidden items-center justify-center">
                            <Image width={200} height={200} alt="content" className="object-cover object-center" src="/DP.png" />
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                          <h2 className="font-medium title-font mt-4 text-neutral-400 text-lg">Victor Basumatary</h2>
                          <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                          <p className="text-base">Game Developer based in India</p>
                        </div>
                      </div>
                      <motion.div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1.5 }}
                      
                      >
                        <p className="leading-relaxed text-xl mb-4">Hello. I am a Indie Game Developer   <br></br>
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center font-medium text-xl'>
                  <h2>Technology Stacks</h2>
                </div>
                  <div className='text-xl flex text-center justify-center'>
                      
                        <section className="text-gray-600 body-font">
                          <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="C-sharp" width={100} height={100} className="object-cover object-center w-full h-full block" src="/c-s.png" />
                                </a>
                              </div>
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="DOT NET" width={100} height={100} className="object-cover object-center w-full h-full block" src="/dotnet.png" />
                                </a>
                              </div>
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="JS" width={100} height={100} className="object-cover object-center w-full h-full block" src="/js.png" />
                                </a>
                              </div>
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="MySQL" width={100} height={100} className="object-cover object-center w-full h-full block" src="/mysql.png" />
                                </a>
                              </div>
                              <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                  <Image alt="Unity" width={100} height={100} className="object-cover object-center w-full h-full block" src="/unity.png" />
                                </a>
                              </div>
                              
                            </div>
                          </div>
                        </section>
                  </div>
                </section> 
    </div>
  )
}

export default VB