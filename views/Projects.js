import SectionTitle from "../components/SectionTitle";
import items from "../data/projectsList.json" 
import Project from "../components/Project";

const Projects = () => {
    return ( 
        <section className="py-20 w-5/6">
            <SectionTitle title="Projects"/>
            {
                items.map(project => (
                    <Project data={project}/>
                ))
            }
        </section>
     );
}
 
export default Projects;