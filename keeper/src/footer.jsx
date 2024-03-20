import "./styles.css"
let year = new Date().getFullYear()
export default function Footer(){
    return(
        <>
    <footer>
        <p>Copyright &#169; {year}</p>
    </footer>
        </>
    )
}