import SeatsContainer from "./app/seats/components/SeatsContainer";
import ReservationContainer from "./app/reservations/components/ReservationContainer";

export const MenuItems = [
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
