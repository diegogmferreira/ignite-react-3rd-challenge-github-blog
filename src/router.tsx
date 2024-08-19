import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout'
import { HomePage } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Route>
    </Routes>
  )
}
