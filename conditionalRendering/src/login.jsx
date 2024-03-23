import Input  from "./input";
import "./styles.css"
export default function Login(){
    return(
        <>
         <form className="form">
        <Input
        type = "text"
        placeHolder = "Username"
        />
        <Input
        type ="password"
        placeHolder = "Password"
        />
         <button type="submit">Login</button>
      </form>
        </>
    )
}