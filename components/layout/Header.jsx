import NavBar from "./NavBar";

export default function Header (props) {
  return (
    <>
      <section className='hidden lg:block background-image pb-52'>
        <NavBar />
        <div className='max-w-[70rem] mx-auto pt-[5rem]'>
          <div className='pt-36 space-y-5'>
            <h3 className='tracking-wide leading-[7rem] text-[4.8rem] font-mont-heavy text-white'>
              Results focused design &<br></br>
              development agency.
            </h3>
            <p className='text-[#CFCFCF] text-2xl max-w-[48rem] font-mont-regular text-white'>
              Extend your team with our high performing specialists or hire us
              to shape your product from scratch. Either way, we’ll get your
              product off the ground and build a momentum for your success.
            </p>
          </div>
        </div>
      </section>
      {/*Header for small devices */}
      <section className='block lg:hidden background-image pb-28'>
        <NavBar />
        <div className='max-w-[78rem] mx-auto pt-[5rem] px-6'>
          <div className='py-3 space-y-5'>
            <h3 className='tracking-wide leading-[4rem] text-5xl font-mont-heavy text-white'>
              Results focused design &<br></br>
              development agency.
            </h3>
            <p className='text-[#CFCFCF] text-xl max-w-[55rem] font-mont-regular text-white'>
              Extend your team with our high performing specialists or hire us
              to shape your product from scratch. Either way, we’ll get your
              product off the ground and build a momentum for your<br></br> success.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
