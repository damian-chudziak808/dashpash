import { Outlet } from 'react-router-dom'
import { Header } from '~/components'

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout
