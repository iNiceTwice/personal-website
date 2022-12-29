import Image from "next/image"
import { BsGithub, BsLinkedin } from "react-icons/bs"

const Footer = () => {
    return ( 
        <div className="bg-dark w-full py-20 flex justify-center items-center gap-4 mt-20">
            <div className="flex flex-col items-center">
                <Image src="/assets/logo.svg" width="250" height="180" objectFit="contain"/>
                <p className="text-white">Developer in development.</p>
            </div>
            <div className="text-white p-4 border-l-2 border-zinc-100">
                <h3 className="text-xl font-medium mb-2">Contact</h3>
                <p>Tel. +54 9 1130582058</p>
                <p>Email: planiscig.martin@gmail.com</p>
                <div className="flex items-center gap-3 mt-2">
                    <a href="https://www.linkedin.com/in/martin-planiscig/" target="_blank">
                        <BsLinkedin className="hover:scale-110" size={20} />
                    </a>
                    <a href="https://github.com/iNiceTwice" target="_blank">
                        <BsGithub className="hover:scale-110" size={20} />
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;