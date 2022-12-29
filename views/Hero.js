import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/HI"

const Hero = () => {
    return ( 
        <section className="h-screen w-full flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-20">
            <div className="flex flex-row-reverse justify-center lg:justify-start items-center playfair text-5xl lg:text-7xl">
                <div>
                    <h2>Hi,</h2>
                    <h2>I'm <span className="text-rose-800 italic">Martín</span></h2>
                    <h2>web developer</h2>
                    <div className="flex gap-4 mt-6 items-center">
                        <BsLinkedin className="hover:scale-105 cursor-pointer text-[#0e76a8]" size={30}/>
                        <BsGithub className="hover:scale-105 cursor-pointer" size={30}/>
                        <a href="https://drive.google.com/file/d/1sIEj6f7wONCw3b84R7jNwV-FmZNaUDrI/view?usp=share_link" target="_blank" className="text-base text-white font-sans flex justify-center items-center p-3 bg-rose-800 hover:bg-rose-800/90 transition-colors">
                            My resume
                            <HiDownload className="ml-2 cursor-pointer text-white" size={20}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center lg:justify-start lg:pt-0 pt-20">
                <div className="relative h-[20rem] w-[20rem] lg:h-[30rem] lg:w-[30rem] rounded-full overflow-hidden">
                    <Image fill src="/assets/pfp.png"/>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;