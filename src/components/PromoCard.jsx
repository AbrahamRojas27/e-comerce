export default function PromoCard({title, text, image}){
    return(
        <div className={`w-96 h-64 flex flex-col justify-end p-4 items-end bg-center bg-[url('https://img.freepik.com/free-photo/gray-wooden-table-front-blur-white-sofa-living-room_23-2147907240.jpg?w=900&t=st=1696621266~exp=1696621866~hmac=04b8629746eb56b5ab913d2df301d30319335b9702e500880a5afedc23293c93')]`}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}