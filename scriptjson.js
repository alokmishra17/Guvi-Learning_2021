
 let myCar={
    dimension:{
        overall_length: 3.500,
        overall_width : 1.600,
        overall_height: 1.490,
        wheelbase: 2.360,
        track_width:{
            front: 1.405,
            rear: 1.400
        },
        minimum_urning_radius: 1.70
       },
       capacities:{
           seating_capacity: 5,
           fuel_tank_capacity: 35,
       },
       engine:{
           type: "KB-Series",
           number_of_culinders: 3,
           number_of_valves: 12,
           capacity: 998,
           bore_stroke:{
               bore:73.0,
               stroke:79.5,
            },
           compression_ratio: 10.1,
           maximum_power: [67,6.200],
           maximum_torque: [90,3,500],
           fuel_distribution: "multipoint injection"
       },
       transmission:{
           type: "5-speed MT"
       },
       Chassis:{
           steering: "Rack pinion, Power assisted",
           brakes:{
               front: "ventilated discs",
               rear: "drums"
           },
           suspension:{
               front: "MacPherson strut & coil spring",
               rear: "Isolated trailing link & coil spring"
           },
           shock_absorbers: "Gas filled",
           tyre:{
               tubeless:[155,"80R13"]
           } 
       },
       Weights:{
           kerb_weight: "860-880",
           gross_vechile_weight: 1.320
       }

    }

    console.log(myCar)
