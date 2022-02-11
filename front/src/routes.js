import SpecialOffer from './pages/SpecialOffer';
import { ABOUTUS_ROUTE, BOOKING_ROUTE, HOME_ROUTE, HOTEL_ROUTE, SPECIAL_ROUTE } from './utils/consts';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import HotelInfo from './pages/HotelInfo';
import BookingInfo from './pages/BookingInfo';

export const hotelRoutes = [
    {
        path: SPECIAL_ROUTE,
        Component: SpecialOffer
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ABOUTUS_ROUTE,
        Component: AboutUs
    },
    {
        path: HOTEL_ROUTE,
        Component: HotelInfo
    },
    {
        path: BOOKING_ROUTE,
        Component: BookingInfo
    }
]