import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import ListTripPage from '../Pages/ListTripPage/ListTripPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage'
import AdminHomePage from '../Pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path="/trips/list" element={<ListTripPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/admin/trips/list" element={<TripDetailsPage />}/>
                <Route path="/admin/trips/:id" element={<AdminHomePage />}/>
                <Route path="/trips/application" element={<ApplicationFormPage />}/>
                <Route path="/admin/trips/create" element={<CreateTripPage />}/>
            </Routes>
        </BrowserRouter>
    )
};