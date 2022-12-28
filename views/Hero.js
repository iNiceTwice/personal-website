import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { MdInsertDriveFile } from "react-icons/md"

const Hero = () => {
    return ( 
        <>
            <section className="w-full flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-20">
                <div className="flex flex-row-reverse justify-center lg:justify-start items-center playfair text-5xl lg:text-7xl">
                    <div>
                        <h2>Hi,</h2>
                        <h2>I'm <span className="text-rose-800 italic">Martín</span></h2>
                        <h2>web developer</h2>
                        <div className="flex gap-4 mt-6">
                            <BsLinkedin className="hover:scale-105 cursor-pointer text-[#0e76a8]" size={30}/>
                            <BsGithub className="hover:scale-105 cursor-pointer" size={30}/>
                            <MdInsertDriveFile className="hover:scale-105 cursor-pointer text-[#4688F4]" size={30}/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-start lg:pt-0 pt-20">
                    <div className="relative h-[20rem] w-[20rem] lg:h-[30rem] lg:w-[30rem] rounded-full overflow-hidden">
                        <Image fill src="/assets/pfp.png"/>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Hero;