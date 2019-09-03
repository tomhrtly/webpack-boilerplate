import Point from './file';

const hello = 'hello';
console.log(hello);

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
