import { v4 as uuidv4 } from 'uuid';
let cars = [
    {
        id: uuidv4(),
        owner_id: 1,
        car_name: "gentra",
        car_id: 3,
        color: "balck",
        color_id: 23
    },
    {
        id: uuidv4(),
        owner_id: 2,
        car_name: "matiz",
        car_id: 1,
        color: "balck",
        color_id: 23
    },
    {
        id: uuidv4(),
        owner_id: 4,
        car_name: "cobalt",
        car_id: 8,
        color: "grey",
        color_id: 3
    },
    {
        id: uuidv4(),
        owner_id: 5,
        car_name: "tiko",
        car_id: 6,
        color: "red",
        color_id: 2
    },
    {
        id: uuidv4(),
        owner_id: 2,
        car_name: "spark",
        car_id: 7,
        color: "blue",
        color_id: 12
    },
    {
        id: uuidv4(),
        owner_id: 5,
        car_name: "gentra",
        car_id: 3,
        color: "balck",
        color_id: 23
    }
]


export const getAll = (req,res) =>{
    res.json(cars)
}
export const createCar = (req,res) => {
    const new_car = req.body
    new_car.id = uuidv4()
    cars.push(new_car)
    res.status(201).json({car_id: `${new_car.id}`}) 
}
export const updateCar = (req,res) => {
    const idx = req.params.id
    cars = cars.filter(elem => elem.id !== idx)
    const updcar = req.body
    updcar.id = idx
    cars.push(updcar)
    res.status(201).json({massage: `${idx}`})
}

export const deleteCar = (req,res) => {
    const idx = req.params.id
    cars = cars.filter(elem => elem.id !== idx)
    res.status(201).json({massage: `${idx}`})
    
}


export const colorId = (req,res) => {
    const identical_cars = cars.filter(elem => elem.color_id === +req.params.id)
    res.json(identical_cars)
} 