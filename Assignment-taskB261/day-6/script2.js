

//Convert the UML diagram to class


class Circle
{
    constructor(radius=1.0,color="red")
    {
        this.radius = radius;
        this.color = color;
    }

    setRadius(radius)
    {
        this.radius = radius;
    }
    setColor(color)
    {
        this.color = color;
    }
    getRadius()
    {
        console.log("Radius : ",this.radius);
    }
    getColor()
    {
        console.log("Color : ",this.color);
    }
    toString()
    {
        console.log(`Circle[radius= ${this.radius}, color= ${this.color}]`)
    }
    getArea()
    {
        return((3.14*this.radius*this.radius).toFixed(2));
    }
    getCircumference()
    {
        return((2*3.14*this.radius).toFixed(2));
    }
}

let obj1 = new Circle(10,"Blue");
obj1.toString();
console.log(obj1.getArea());
console.log(obj1.getCircumference()); 

let obj2 = new Circle();
obj2.toString();
obj2.setRadius(25);
obj2.getRadius();
obj2.setColor("Green");
obj2.getColor();
obj2.toString();