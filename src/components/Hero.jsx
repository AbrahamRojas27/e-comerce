import Image from "next/image";

export default function Hero(){
    return (
        <section>
          <figure className="w-[99vw] h-[100vh]">
            <Image className="w-[100%]" src="https://img.freepik.com/free-vector/online-delivery-banner-with-realistic-laptop-parcels-clouds-social-icons-realistic-style_548887-53.jpg?w=1380&t=st=1696617901~exp=1696618501~hmac=cf22675ea408663e731ae818a0bdeff5c318938cbc15823d8bfda593760d67ec" alt="banner" width={1024} height={1024}/>
          </figure>
        </section>
      );
}


