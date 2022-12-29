import SectionTitle from "../components/SectionTitle";
import { BsFillBrushFill } from "react-icons/bs"
import { FiMonitor } from "react-icons/fi"
import { FaServer } from "react-icons/fa"

const Skills = () => {
    return ( 
        <section className="py-20 w-5/6">
            <SectionTitle title="Skills"/>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col gap-4">
                    <div className="bg-dark flex justify-center text-white p-8 shadow-md">
                        <BsFillBrushFill className="text-white mr-4" size={25}/>
                        Design
                    </div>
                    <div className="bg-zinc-100 p-10 shadow-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati asperiores praesentium dicta ea ipsa et sit quos minima, fugiat voluptatum, molestias modi deserunt quas libero enim aperiam vitae suscipit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati asperiores praesentium dicta ea ipsa et sit quos minima, fugiat voluptatum, molestias modi deserunt quas libero enim aperiam vitae suscipit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati asperiores praesentium dicta ea ipsa et sit quos minima, fugiat voluptatum, molestias modi deserunt quas libero enim aperiam vitae suscipit?
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="bg-dark flex justify-center text-white p-8 shadow-md">
                        <FiMonitor className="text-white mr-4" size={25}/>
                        Frontend
                    </div>
                    <div className="bg-zinc-100 p-10 shadow-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati asperiores praesentium dicta ea ipsa et sit quos minima, fugiat voluptatum, molestias modi deserunt quas libero enim aperiam vitae suscipit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati asperiores praesentium dicta ea ipsa et sit quos minima, fugiat voluptatum, molestias modi deserunt quas libero enim aperiam vitae suscipit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati asperiores praesentium dicta ea ipsa et sit quos minima, fugiat voluptatum, molestias modi deserunt quas libero enim aperiam vitae suscipit?
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="bg-dark flex justify-center text-white p-8 shadow-md">
                        <FaServer className="text-white mr-4" size={25}/>
                        Backend
                    </div>
                    <div className="bg-zinc-100 p-10 shadow-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati asperiores praesentium dicta ea ipsa et sit quos minima, fugiat voluptatum, molestias modi deserunt quas libero enim aperiam vitae suscipit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati asperiores praesentium dicta ea ipsa et sit quos minima, fugiat voluptatum, molestias modi deserunt quas libero enim aperiam vitae suscipit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati asperiores praesentium dicta ea ipsa et sit quos minima, fugiat voluptatum, molestias modi deserunt quas libero enim aperiam vitae suscipit?
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;