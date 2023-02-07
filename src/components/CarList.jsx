import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
    const dispatch = useDispatch();

    // const cars = useSelector((state) => {

    //     return state.cars.data;
    // });

    //derived state in useSeletor
    // const cars = useSelector(({ cars: { data, searchTerm } }) => {
    //     return data.filter((car) =>
    //         car.name.toLowerCase().includes(searchTerm.toLowerCase()),
    //     );
    // });
    const { cars, name } = useSelector(
        ({ form, cars: { data, searchTerm } }) => {
            const filteredCars = data.filter((car) =>
                car.name.toLowerCase().includes(searchTerm.toLowerCase()),
            );

            return {
                cars: filteredCars,
                name: form.name,
            };
        },
    );

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const rerenderCars = cars.map((car) => {
        const bold =
            name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={car.id} className={`panel ${bold && "bold"}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button
                    className="button is-danger"
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {rerenderCars} <hr />
        </div>
    );
};

export default CarList;
