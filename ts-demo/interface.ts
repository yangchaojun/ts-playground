interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number | string
}

let square = {} as Square
square.color = 'blue'
square.penWidth = 5.0
square.sideLength = 10
