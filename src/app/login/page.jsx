export default function Login(){
    return(
        <div className="bg-login bg-bottom bg-no-repeat bg-cover w-[100%] h-[100vh]">
            <div className="w-[100%] h-[100%] grid grid-cols-3 ">
                <div className="col-span-2 py-8 pr-72 pl-8 flex flex-col justify-end gap-4">
                    <p className="text-4xl">Register and enjoy our shop</p>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perferendis similique dolores in sapiente provident numquam necessitatibus aliquid voluptate officia sequi inventore corrupti harum error vel, nam, voluptatem aspernatur. Error.</p>
                </div>
                <div className="flex flex-col justify-center h-[100%] w-[100%] backdrop-brightness-[.40] px-20 space-y-[80px]">
                    <h3 className="text-[32px] text-white">Sign Up</h3>
                    <form className="space-y-8" action="">
                        <div className="flex flex-col">
                            <label className="text-white" htmlFor="">E-mail</label>
                            <input className="input ease-out duration-300" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white" htmlFor="">Password</label>
                            <input className="input" type="password" name="" id="" />
                        </div>
                        <button className="border-[1px] border-white px-[12px] py-[4px] text-white">sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}