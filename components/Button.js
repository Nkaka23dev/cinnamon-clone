export default function Button (props) {
    return(
     <>
     <button className="bg-[#5135ff] mt-4 py-3 px-8 rounded-sm text-white  font-semibold cursor-pointer tracking-widest">
       {props.name}
     </button>
    </>
    )
  }
  