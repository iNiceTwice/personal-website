import Image from "next/image"
import SectionTitle from "../components/SectionTitle"

const About = () => {
    return ( 
        <section id="about" className="w-5/6 py-20 flex flex-col items-center">
            <SectionTitle title="About me"/>
            <div className="lg:h-60 flex lg:flex-row flex-col items-center justify-center gap-4 mt-8">
                <div className="relative lg:w-60 lg:h-60 w-20 h-20 shadow-md">
                    <Image fill src="/assets/logo_min.svg"/>
                </div>
                <div className=" flex h-full items-center shadow-md p-8 w-full lg:w-4/6 bg-zinc-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit illum deserunt iste dolorum excepturi, rerum dolorem vero id, quo ratione odio unde, corrupti commodi. Omnis ad voluptate harum consectetur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit illum deserunt iste dolorum excepturi, rerum dolorem vero id, quo ratione odio unde, corrupti commodi. Omnis ad voluptate harum consectetur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo suscipit illum deserunt iste dolorum excepturi, rerum dolorem vero id, quo ratione odio unde, corrupti commodi. Omnis ad voluptate harum consectetur.
                </div>
            </div>
        </section>
     );
}
 
export default About; 