import {add,sub,div,mul} from "./calculator.js";
let x = 4;
let y= 3;
export default function App(){  
  return (
    <>
    <ul>
      <li>Addition: {add(x,y)}</li>
      <li>Subtraction: {sub(x,y)}</li>
      <li>Multiplication: {mul(x,y)}</li>
      <li>Division: {div(x,y)}</li>
    </ul>
    </>
  )
}