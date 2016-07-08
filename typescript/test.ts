class Polygon {
  height : number
  
  constructor (height: number){
    this.height = height;
  }
  
  computeArea(): number {
    return 0;
  }
}

/**
 * tringle  extends Polygon
 */
class tringle extends Polygon {
  base: number;
  constructor(height: number, base: number) {
    super(height);
    this.base = base;
  }
  computeArea(){
    return .5 * this.base * this.height;
  }
}

/**
 * Rectangular
 */
class Rectangular extends Polygon {
  width : number;
  constructor(height: number, width: number) {
    super(height);
    this.width = width;
  }
  
  computeArea(){
    return this.width * this.height;
  }
}

/**
 * Square extends Rectangular
 */
class Square extends Rectangular {
  constructor(length: number) {
    super(length, length);
  }
}