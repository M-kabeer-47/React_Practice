export default function Img(props){
    return(
        <>
        <img className="circle-img"
            src = {props.src}
            alt="avatar_img"
          />
        </>
    )
}