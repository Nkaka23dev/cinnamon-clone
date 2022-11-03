export default function Input (props) {
    return(
     <>
      <form>
      <label className="relative">
        <input type="text" className="w-[70%] border-b bg-transparent focus:outline-none border-opacity-50 focus:border-b-2 focus:border-[#5135ff] input-text" />
        <span className="absolute -left-1 -top-3 mx-2 text-lg text-white text-opacity-80 input-text ">Your E-mail</span>
      </label>
    </form>
    </>
    )
  }
  