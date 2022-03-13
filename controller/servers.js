let cars = [
    {
        id: 3,
        color: "balck"
    }
]


export const getAll = (req,res) =>{
    res.json(cars)
}
