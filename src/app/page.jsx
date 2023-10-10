import CategoryCard from "components/CategoryCard";
import Hero from "components/Hero";
import ProductCard from "components/ProductCard";
import PromoCard from "components/PromoCard";
import React from "react";

export default function Home(){
    return(
        <div className="text-3xl space-y-[80px]">
            <Hero/>
            <div className="px-[120px] space-y-[140px]">
                <section className={'flex justify-center gap-8'}>
                    <PromoCard
                        title={'-50%'}
                        text={'Super promo'}
                    />
                    <PromoCard
                        title={'-50%'}
                        text={'Super promo'}
                    />
                    <PromoCard
                        title={'-50%'}
                        text={'Super promo'}
                    />
                </section>
                <section className={'flex flex-col items-center justify-center'}>
                    <h2>Choose from all our categories</h2>
                    <div className="flex gap-8 mt-8">
                        <CategoryCard 
                            name={'Category-1'}
                        />
                        <CategoryCard 
                            name={'Category-2'}
                        />
                        <CategoryCard 
                            name={'Category-3'}
                        />
                        <CategoryCard 
                            name={'Category-4'}
                        />
                    </div>
                </section>
                <section className={'grid justify-center space-y-4'}>
                    <h2 className="text-center">New Arrivals</h2>
                    <div className="flex gap-8">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </section>
                <section className="grid grid-cols-3">
                    <div className="">
                        product info
                    </div>
                    <div className="col-span-2 bg-blue-500">
                        slider
                    </div>
                </section>
            </div>
        </div>
    )
}