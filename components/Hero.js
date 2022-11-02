import Image from 'next/image'
export default function Hero (props) {
    return(
     <>
    <section className="flex pt-10 pb-4 group">
    <div className={`max-w-[73rem] h-[85vh] 2xl:h-full flex ${props.className} overflow-hidden m-auto `}>
    <Image
      src={props.img}
      alt="Picture of the author"
      className={`m-auto transition group-hover:scale-110 overflow-hidden`}
      width={props.width}
      height={props.height}
    />
    </div>
    </section>
    </>
    )
  }
  