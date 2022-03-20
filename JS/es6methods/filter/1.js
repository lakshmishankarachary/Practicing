let cars=[{name:"maruthi",mode:"2012",price:1000000},
        {name:"zen",mode:"2013",price:800000},
        {name:"swift",mode:"2014",price:700000}]

        // using forof:
        // let new_cars=[]
        // for(car of cars){
        //     if(car.price<1000000){
        //         new_cars.push(car)
        //     }

        // }
        // console.log(new_cars)

        // using filter method

        let new_cars=cars.filter((car)=>{
            return car.price<1000000
        })
        console.log(new_cars)
