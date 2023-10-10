export default function CategoryCard({ name }){
    return(
        <div className={`w-64 h-32 flex bg-image justify-center items-center `}>
            <p className="w-[100%] h-[100%] text-center pt-16 text-white hover:backdrop-brightness-50 ease-linear duration-200">{ name }</p>
        </div>
    )
}