export default function Button (props) {
    return(
     <>
     <button className={`bg-[#5135ff] mt-4 py-3 px-8 rounded-sm text-white  font-mont-regular cursor-pointer tracking-widest ${props.className} `}>
       {props.name}
     </button>
    </>
    )
  }
  