export default function Heading(){
const fName = "Muhammad";
const lName = "Kabeer";
const fullName = fName + " " + lName;
const getFullYear = new Date().getFullYear();
let hour = 13;
 let morning = "";
 let text = ""

if(hour >=0 && hour< 12){
   morning = {
    color : "red"
  }
   text = "morning"
}
else if(hour>=12 && hour<18){
   morning = {
    color : "green"
  }
  text = "evening"
}
else{
   morning = {
    color : "blue"
  }
   text = "night"
}

return (

  <> 
  <body>
    <div className="container">
      <h1 style={morning}>Good {text}</h1>
    </div>
</body>
  </>
)
}