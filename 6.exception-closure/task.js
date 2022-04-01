function parseCount(value) {
  const parsed = Number.parseInt(value);
  if (isNaN(parsed)){
    throw new Error("Невалидное значение"); 
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
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return this.a+this.b+this.c;
    }
    getArea() {
        let p = this.getPerimeter()/2;
        let area = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        return Number(area.toFixed(3));        
    }
  }
   
  function getTriangle(a, b, c) {    
       try {
        return new Triangle(a, b, c);
       } catch (error) {
        class notTriangle {                     
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
         return new notTriangle (a, b, c);
      }           
  }
             
       
    
  

  



