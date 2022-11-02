import Image from 'next/image'
export default function SubHero (props) {
    return(
     <>
    <section className="pt-4 pb-24 max-w-[68.3rem] mx-auto">
    <div className='flex flex-col gap-6 items-start'>
    <div className='flex gap-10'>
        <span className='text-[#666666] text-sm font-semibold'>{props.heading1}</span>
        <span className='text-[#666666] text-sm font-semibold'>{props.heading2} </span>
    </div>
    <h3 className='text-4xl leading-9  font-bold font-mont-bold text-[#222222]'>
       {props.title} <br></br>{props.title2}
    </h3>
    <p className='max-w-2xl font-mont-semiBold text-[#666666]'>{props.content}</p>
    </div>
    </section>
    </>
    )
  }
  