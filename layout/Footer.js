import Image from "next/image"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { MdInsertDriveFile } from "react-icons/md"
import { IoMdMail } from "react-icons/io"
import Tooltip from "../components/Tooltip"

const Footer = () => {
    return ( 
        <div className="bg-dark w-full py-20 flex flex-col lg:flex-row justify-center items-center gap-4 mt-20">
            <div className="flex flex-col items-center">
                <Image src="/assets/logo.svg" width="250" height="180" objectFit="contain"/>
                <p className="text-white">Developer in development.</p>
            </div>
            <div className="text-white p-4 border-t-2 lg:border-t-0 lg:border-l-2 border-zinc-100">
                <h3 className="text-xl font-medium mb-2">Contact</h3>
                <p>Phone: +54 9 1130582058</p>
                <p>Email: planiscig.martin@gmail.com</p>
                <div className="flex items-center gap-3 mt-2">
                    <a href="https://www.linkedin.com/in/martin-planiscig/" target="_blank">
                        <Tooltip text="LinkedIn">
                            <BsLinkedin className="hover:scale-110" size={20} />
                        </Tooltip>
                    </a>
                    <a href="https://github.com/iNiceTwice" target="_blank">
                        <Tooltip text="Github">
                            <BsGithub className="hover:scale-110" size={20} />
                        </Tooltip>
                    </a>
                    <a href="mailto:planiscig.martin@gmail.com" target="_blank">
                        <Tooltip text="Email">
                           <IoMdMail className="hover:scale-110" size={20} />
                        </Tooltip>
                    </a>
                    <a href="https://drive.google.com/file/d/1sIEj6f7wONCw3b84R7jNwV-FmZNaUDrI/view?usp=share_link" target="_blank">
                        <Tooltip text="My resume">
                            <MdInsertDriveFile className="hover:scale-110" size={20} />
                        </Tooltip>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;