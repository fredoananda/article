import React, { useState } from 'react'
import FooterUser from '../../components/organisms/FooterUser'
import FooterLayout from '../../components/layouts/FooterLayout'
import Link from 'next/link'
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai'
import { Dropdown } from '../../components/layouts/Dropdown'
import ReactCountryFlag from 'react-country-flag'
import { CiLogin } from 'react-icons/ci'
import ReactPaginate from 'react-paginate'

const Blog = () => {
  const [activePage, setActivePage] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageClick = (selected: { selected: number }) => {
    setCurrentPage(selected.selected)
  }

  return (
    <FooterLayout>
      <div className="flex gap-10 max-w-[90rem] mx-auto px-2 py-5 w-full items-start justify-between ">
        <div className="flex items-center gap-14 text-sm font-semibold">
          <Link href="/">
            <img src="/logo.png" alt="logo" />
          </Link>
          <div className="flex items-center space-x-8">
            <AiOutlineSearch size={30} />
            <Dropdown position="start">
              <div className="cursor-pointer">USER GUIDE</div>
              <div className="flex flex-col">
                <Link
                  href="/request"
                  className="py-2 px-4 w-full max-w-xs rounded hover:bg-slate-100"
                >
                  I want to request something
                </Link>
              </div>
            </Dropdown>
            <Link href="/">HELP</Link>
            <Link href="/">CONTACT</Link>
          </div>
        </div>
        <div className="flex items-center font-semibold gap-14 text-sm">
          <div className="flex items-center gap-7">
            <Dropdown position="end" button>
              <div className="flex items-center gap-2">
                <ReactCountryFlag countryCode="US" svg />
                <span>USD</span>
                <div>
                  <AiFillCaretDown size={10} />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm hover:bg-blue-200    rounded-md p-2 mb-2">
                <ReactCountryFlag countryCode="ID" svg />
                <span className=" ">IDR</span>
              </div>
              <div className="flex items-center justify-between text-sm hover:bg-blue-200    rounded-md p-2 mb-2">
                <ReactCountryFlag countryCode="JP" svg />
                <span className=" ">JPY</span>
              </div>
            </Dropdown>
            <div className="w-[2px] h-10 bg-black"></div>
            <Dropdown position="end" button>
              <div className="flex items-center gap-2">
                <ReactCountryFlag countryCode="GB" svg />
                <span>EN</span>
                <div>
                  <AiFillCaretDown size={10} />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm hover:bg-blue-200    rounded-md p-2 mb-2">
                <ReactCountryFlag countryCode="JP" svg />
                <span className=" ">JPN</span>
              </div>
            </Dropdown>
          </div>
          <label
            htmlFor="my-modal-3"
            className="flex cursor-pointer gap-2 items-center"
          >
            <span>SIGN IN</span>
            <CiLogin size={25} />
          </label>
        </div>
      </div>
      <header className="py-5 bg-light border-bottom mb-4">
        <div className="w-full">
          <div className="ml-4 grid grid-cols-2 gap-x-4 mt-10">
            <div className="col-lg-6 ">
              <div className="mb-4 w-full">
                <a href="#!">
                  <img
                    className="card-img-top w-full"
                    src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-4 ml-20">
                <div className="">
                  <div className="text-muted"></div>
                  <h1 className="w-full card-title text-blue-700 text-5xl">
                    Featured Post Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-2 gap-x-4 w-full mt-10">
        <div className="">
          <div className="row">
            <div className="ml-4">
              <div className="grid grid-cols-2 gap-x-4 w-full mt-10 ">
                <div className="flex-item">
                  <div className="card mb-4" style={{ width: '20rem;' }}>
                    <a href="#!">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="p-2">
                      <div className="small text-muted">January 1, 2023</div>
                      <h2 className="card-title h4 text-blue-700">
                        Post Title
                      </h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <button className="bg-white border border-blue-500 rounded-lg py-2 px-4">
                        News
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-item">
                  <div className="card mb-4" style={{ width: '20rem;' }}>
                    <a href="#!">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="p-2">
                      <div className="small text-muted">January 1, 2023</div>
                      <h2 className="card-title h4 text-blue-700">
                        Post Title
                      </h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <button className="bg-white border border-blue-500 rounded-lg py-2 px-4">
                        Culture
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 w-full mt-10 flex-container wrap-container margin-15px ">
                <div className="flex-item">
                  <div className="card mb-4" style={{ width: '20rem;' }}>
                    <a href="#!">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="p-2">
                      <div className="small text-muted">January 1, 2023</div>
                      <h2 className="card-title h4 text-blue-700">
                        Post Title
                      </h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <button className="bg-white border border-blue-500 rounded-lg py-2 px-4">
                        Lifestyle
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-item">
                  <div className="card mb-4" style={{ width: '20rem;' }}>
                    <a href="#!">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="p-2">
                      <div className="small text-muted">January 1, 2023</div>
                      <h2 className="card-title h4 text-blue-700">
                        Post Title
                      </h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <button className="bg-white border border-blue-500 rounded-lg py-2 px-4">
                        Travel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 w-full mt-10 flex-container wrap-container margin-15px ">
                <div className="flex-item">
                  <div className="card mb-4" style={{ width: '20rem;' }}>
                    <a href="#!">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="p-2">
                      <div className="small text-muted">January 1, 2023</div>
                      <h2 className="card-title h4 text-blue-700">
                        Post Title
                      </h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <button className="bg-white border border-blue-500 rounded-lg py-2 px-4">
                        News
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-item">
                  <div className="card mb-4" style={{ width: '20rem;' }}>
                    <a href="#!">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </a>
                    <div className="p-2">
                      <div className="small text-muted">January 1, 2023</div>
                      <h2 className="card-title h4 text-blue-700">
                        Post Title
                      </h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <button className="bg-white border border-blue-500 rounded-lg py-2 px-4">
                        News
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <li
                  style={{ display: 'flex' }}
                  className="flex overflow-hidden"
                >
                  <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={10} // Jumlah total halaman
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'flex mt-5 mb-20 '}
                    pageClassName={'px-2'}
                    previousClassName={'px-2 border-r'}
                    nextClassName={'px-2 border-l'}
                    pageLinkClassName={'px-2 py-1'}
                    activeClassName={'bg-blue-500 text-white rounded-full'}
                  />
                </li>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <div className="bg-blue-300 text-blue-700 items-center text-lg font-bold mr-52 pr-5 pl-5">
            TOP ARTICLE
          </div>
          <div
            className="card"
            style={{
              width: '70%',
              marginTop: '40px',
              borderRadius: '5px',
              marginRight: '10px',
            }}
          >
            <div className="card-body" style={{ padding: '10px' }}>
              You can put anything you want inside of these side widgets. They
              are easy to use, and feature the Bootstrap 5 card component!
            </div>
            <div className="card-body" style={{ padding: '10px' }}>
              You can put anything you want inside of these side widgets. They
              are easy to use, and feature the Bootstrap 5 card component!
            </div>
            <div className="card-body" style={{ padding: '10px' }}>
              You can put anything you want inside of these side widgets. They
              are easy to use, and feature the Bootstrap 5 card component!
            </div>
            <div className="card-body" style={{ padding: '10px' }}>
              You can put anything you want inside of these side widgets. They
              are easy to use, and feature the Bootstrap 5 card component!
            </div>
            <div className="card-body" style={{ padding: '10px' }}>
              You can put anything you want inside of these side widgets. They
              are easy to use, and feature the Bootstrap 5 card component!
            </div>
          </div>
        </div>
      </div>
      <div>
        <FooterUser />
      </div>
    </FooterLayout>
  )
}

export default Blog
