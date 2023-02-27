import { useDispatch, useSelector } from 'react-redux'
import { sidebarSlice } from '~/features/sidebar/sidebarSlice'
import { RootState } from '~/app/store'
import { createPortal } from 'react-dom'
import { RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import useMediaQuery from '~/hooks/useMediaQuery'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const dispatch = useDispatch()
  const sidebar = useSelector((state: RootState) => state.sidebar)

  useEffect(() => {
    if (!isMobile) dispatch(sidebarSlice.actions.closeSidebar())
  }, [isMobile])

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth
    const isOverflowing = document.body.scrollHeight > window.innerHeight
    if (sidebar.isOpen) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.style.overflow = 'hidden'
      if (isOverflowing) document.body.style.paddingRight = `${scrollbarWidth}px`
    }
  }, [sidebar.isOpen])

  return (
    <>
      {createPortal(
        <AnimatePresence
          onExitComplete={() => {
            document.body.style.overflow = 'auto'
            document.body.style.paddingRight = '0'
          }}
        >
          {sidebar.isOpen && (
            <div className="fixed inset-0 z-40 flex">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => dispatch(sidebarSlice.actions.closeSidebar())}
                className="flex-1 bg-slate-900/10 backdrop-blur-sm"
              ></motion.div>
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="absolute right-0 top-0 bottom-0 flex w-[18rem] flex-col border-l border-gray-300 bg-gray-50 shadow-sm"
              >
                <div className="flex items-center border-b p-4">
                  <div className="text-sm font-medium text-gray-500">MENU</div>
                  <button
                    onClick={() => dispatch(sidebarSlice.actions.toggleSidebar())}
                    className="ml-auto"
                  >
                    <RiCloseLine className="text-xl" />
                  </button>
                </div>
                <ul className="flex w-full flex-1 flex-col py-2">
                  <li className="flex ">
                    <Link
                      to="/"
                      className="my-1 w-full px-4 py-2 font-medium hover:bg-gray-100"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="flex ">
                    <Link
                      to="/about"
                      className="my-1 w-full px-4 py-2 font-medium hover:bg-gray-100"
                    >
                      About
                    </Link>
                  </li>
                  <li className="flex ">
                    <Link
                      to="/learn"
                      className="my-1 w-full px-4 py-2 font-medium hover:bg-gray-100"
                    >
                      Learn
                    </Link>
                  </li>
                  <ul className="mt-2 flex flex-col gap-3 border-t py-6 px-4">
                    <li className="flex flex-1 ">
                      <Link to="/login" className="btn btn--dark w-full">
                        Sign Up
                      </Link>
                    </li>
                    <li className="flex flex-1">
                      <Link to="/login" className="btn btn--outline w-full">
                        Log In
                      </Link>
                    </li>
                  </ul>
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

export default Sidebar
