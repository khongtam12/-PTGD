import './Item.css'
export default function Item({name,Image,Fave}){
    return(
        <div >
            <img src={Image} alt="" width='250px' height='100px'/>
            <div id="title">
            <p>{name}</p>
            <img src={Fave} alt="" width='20px' height='20px' />
            </div>

        </div>
    )

}