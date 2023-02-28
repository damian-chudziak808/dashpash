import { NavLink, Link } from 'react-router-dom'
import { RiMenuLine, RiHome2Line, RiQuestionMark, RiBook2Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { sidebarSlice } from '~/features/sidebar/sidebarSlice'
import Sidebar from '~/features/sidebar/Sidebar'

const navlinks = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/translator',
    text: 'About',
  },
  {
    to: '/learn',
    text: 'Learn',
  },
]

const Header = () => {
  const dispatch = useDispatch()
  return (
    <>
      <Sidebar />
      <div className="sticky inset-x-0 top-0 z-40 flex h-20 border-b border-gray-200 bg-gray-50/75 px-4 backdrop-blur">
        <div className=" mx-auto flex w-full max-w-6xl items-center">
          <Link to="/" className=" mr-4 select-none text-xl tracking-tight">
            dash<span className="font-bold">pash</span>
          </Link>
          <div className="mx-4 hidden flex-1 items-center gap-6 text-sm font-medium text-gray-500 md:flex">
            {navlinks.map((link, index) => (
              <NavLink className="flex items-center" key={index} to={link.to}>
                {link.text}
              </NavLink>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link to="/login" className="btn--dark btn hidden md:flex">
              Sign Up
            </Link>
            <Link to="/login" className="btn--outline btn hidden md:flex">
              Log In
            </Link>
            <button
              onClick={() => dispatch(sidebarSlice.actions.toggleSidebar())}
              className="ml-2 flex items-center justify-center p-2 md:hidden"
            >
              <RiMenuLine className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
