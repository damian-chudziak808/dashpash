import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '~/layouts'
import { Home, NotFound } from '~/pages'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
