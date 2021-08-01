//write a class to calculate uber price.

class UberCost
{
    constructor(base_fare=20,cost_per_minute=3,cost_per_mile=15,booking_fee=30)
    {
        this.base_fare = base_fare;
        this.cost_per_minute = cost_per_minute;
        this.cost_per_mile = cost_per_mile;
        this.booking_fee = booking_fee;
    }

    setData(time_in_ride, riding_distance)
    {
        this.time_in_ride = time_in_ride;
        this.riding_distance = riding_distance;
    }

    calculatePrice()
    {
        return(this.base_fare+(this.cost_per_minute*this.time_in_ride)+(this.cost_per_mile*this.riding_distance)+this.booking_fee)
    }
    showData()
    {
        let price = this.calculatePrice();
        console.log(`Riding Distance --- ${this.riding_distance} | Total Time --- ${this.time_in_ride}`);
        console.log("Total Price :",price);
    }
}

myRide1 = new UberCost(30,5,15,20);
myRide1.setData(20,5);
myRide1.showData();