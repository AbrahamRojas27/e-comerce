import Image from "next/image"

export default function ProductCard(){
    return(
        <div className="group">
            <figure className="w-[280px] overflow-hidden">
                <Image className="w-[100%] group-hover:scale-105 ease-out duration-300" src={'https://img.freepik.com/free-photo/home-room-design-with-copy-space_23-2148786457.jpg?w=996&t=st=1696863876~exp=1696864476~hmac=b90bfd5bf62f36179c5a5f62e4bbc626612df4a710aa80d6b0064c8f0d891b6c'} width={400} height={400}/>
            </figure>
            <p className="text-[16px]">Product 1</p>
            <p className="text-[18px] font-bold">200$</p>
        </div>
    )
}