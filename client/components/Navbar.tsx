import Image from "next/image"
import Logo from "../public/logo.jpg"
import { BiBell, BiChevronDown } from 'react-icons/bi'
import avatar from '../public/favicon.ico'

const Navbar = () => {
  return (
    <div className="flex items-center h-[65px] p-4 px-5 bg-offwhite shadow shadow-primary4 z-1 relative">
      <div className="flex items-center mr-auto ">
        {/* logo */}
        <Image
          src={Logo}
          alt="IITJ-logo"
          width={45}
          height={45}
          objectFit="cover"
          className="rounded-full "
        />

        {/* title */}
        <h1 className="ml-8 font-bold text-3xl tracking-wide ">CC ERP</h1>
      </div>


      <div className="flex items-center ">
        <BiBell className="text-gray-500 mr-6 text-2xl cursor-pointer " />
        <div className="flex items-center gap-3 cursor-pointer ">
          <Image
            src={avatar}
            alt="avatar"
            width={35}
            height={35}
            className="rounded-full "
          />
          <h1 className="text-gray-500 text-large font-medium ">Samarth</h1>
          <BiChevronDown className="text-xl text-gray-500 " />
        </div>
      </div>

    </div>
  )
}

export default Navbar