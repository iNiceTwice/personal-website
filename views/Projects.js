import SectionTitle from "../components/SectionTitle";
import items from "../data/projectsList.json" 
import Project from "../components/Project";

const Projects = () => {
    return ( 
        <section className="py-20 w-5/6">
            <span id="projects" className='relative top-[-100px] lg:top-[-200px]'></span>
            <SectionTitle title="Projects"/>
            {
                items.map(project => (
                    <Project key={ project.title } data={ project }/>
                ))
            }
        </section>
     );
}
 
export default Projects;