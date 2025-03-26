import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { DefaultLayout } from './layouts/default-layout'
 
 export function Router() {
   return (
     <Routes>
       <Route path="/" element={<DefaultLayout />}>
         <Route path="/" element={<Home />} />
       </Route>
     </Routes>
   )
 }