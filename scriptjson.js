
 let myCar={
    Dimension:{
        "overall length": 3.500,
        "overall width" : 1.600,
        "overall height": 1.490,
        "wheelbase": 2.360,
        "track width":{
            front: 1.405,
            rear: 1.400
        },
        "minimum turning radius": 1.70
       },
       Capacities:{
           "seating capacity": 5,
           "fuel tank capacity": 35,
       },
       Engine:{
           "type": "KB-Series",
           "number of culinders": 3,
           "number of valves": 12,
           "capacity": 998,
           "bore*stroke":"73.0*79.5",
           "compression ratio": 10.1,
           "maximum power": "67/6.200",
           "maximum torque": "90/3/500",
           "fuel distribution": "multipoint injection"
       },
       Transmission:{
           type: "5-speed MT"
       },
       Chassis:{
           "steering": "Rack pinion, Power assisted",
           "brakes":{
               front: "ventilated discs",
               rear: "drums"
           },
           "suspension":{
               front: "MacPherson strut & coil spring",
               rear: "Isolated trailing link & coil spring"
           },
           "shock absorbers": "Gas filled",
           "tyre(tubeless": "155/80R13"
       },
       Weights:{
           "kerb weight": "860-880",
           "gross vechile weight": 1.320
       }

    }

    console.log(myCar)
