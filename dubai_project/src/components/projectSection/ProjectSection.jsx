import ProjectSlider from "./ProjectSlider";
import ProjectsNav from "./ProjektsNav";


export default function ProjectSection(){
    return(
        <>
        <section className="projektSection">
        <ProjectsNav/>
        <ProjectSlider/>
        </section>
        </>
    )
}