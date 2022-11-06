import Image from 'next/image'
export default function Hero (props) {
    return(
     <>
    <section className="flex pb-4 pt-24 lg:pt-40 group">
    <div className={`max-w-[77rem] mx-4 lg:m-auto lg:h-full flex ${props.className} overflow-hidden`}>
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
  