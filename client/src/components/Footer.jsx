import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsTwitter, BsGithub} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8  border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link to='/' className='whitespace-nowrap self-center text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg text-white'> Dilshan's </span>
                    Blog
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='About' />
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='https://www.100jsprojects.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            100 JS Projects
                        </Footer.Link>
                    </Footer.LinkGroup>
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='/about'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Dilshan's Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow Us' />
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='https://www.github.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Github
                        </Footer.Link>
                    </Footer.LinkGroup>
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='#'
                            
                        >
                            Dilshan's Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='#'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Privacy Policy
                        </Footer.Link>
                    </Footer.LinkGroup>
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='#'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Terms and Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="Dilshan's Blog" year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsTwitter}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
