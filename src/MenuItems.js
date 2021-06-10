import SeatsContainer from "./app/seats/components/SeatsContainer";
import ReservationContainer from "./app/reservations/components/ReservationContainer";
import HomeContainer from "./app/home/components/HomeContainer";

export const MenuItems = [
    {
        title: "Strona Główna",
        url: "/",
        componentName: HomeContainer
    },
    {
        title: "Miejsca",
        url: "/seats",
        componentName: SeatsContainer
    },
    {
        title: "Podsumowanie",
        url: "/summary",
        componentName: ReservationContainer
    }
]

export default MenuItems;
