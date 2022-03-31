function parseCount(value) {
  const parsed = Number.parseInt(value);
  if (isNaN(parsed)){
    const err = new Error("Невалидное значение");
    throw err;    
  } return parsed;
  
}

function validateCount(value1) {
    try {
        return parseCount(value1);
    } catch (error) { 
        return error;
      }    
  }

  
  class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a+b < c || a+c < b || b+c < a) {
            const err = new Error("Треугольник с такими сторонами не существует");
            throw err;    
        }
    }
    getPerimeter() {
        let perimeter = this.a+this.b+this.c;
        return perimeter;
    }
    getArea() {
        let p = (this.a+this.b+this.c)/2;
        let area = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        return Number(area.toFixed(3));        
    }
  }
   
  function getTriangle(a, b, c) {
    
       try {
        const trianglenew = new Triangle(a, b, c);
        return trianglenew;
       } catch (error) {
           // 
        }
        return trianglenew;       
       }
    
  

  



