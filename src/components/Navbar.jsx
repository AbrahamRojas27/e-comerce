import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@images/logo.png"
import CartSvg from "svg/CartSvg";
import LoginSvg from "svg/LoginSvg";

const link = [
    {
        name: 'Home',
        to: '/',
    },
    {
        name: 'Shop',
        to: '/shop'
    }
]

export default function Navbar(){
    return(
        <header className="-mb-[80px] z-[1000] fixed top-0 w-[100%]">
            <nav className="flex justify-between items-center glass px-32 w-100% h-[80px] overflow-hidden">
                <figure className="w-[180px] h-[160px] overflow-hidden items-start">
                    <Image className="w-[100%] h-[100%] object-cover" src={logo} alt="Shop" />
                </figure>
                <ul className="flex space-x-4">
                    {
                        link.map(({name, to}) =>(
                            <li>
                                <Link href={to}>
                                    {name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex space-x-4">
                    <CartSvg/>
                    <Link href={'/login'}>
                        <LoginSvg/>
                    </Link>
                </div>
            </nav>
        </header>
    )
}