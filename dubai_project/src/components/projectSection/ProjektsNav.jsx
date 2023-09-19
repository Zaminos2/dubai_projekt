import { useState } from 'react';
import './projectsNav.css'

export default function ProjectsNav() {
    const [activ,setActiv]=useState('All')
    function handleActiv(value){
        setActiv(value);
    }
  return (
    <>
      
        <div className="projectWrap">
          <div className="projektTitleWrap">
            <h2 className="projectTitle">Latest projects</h2>
            <div className="projectNavWrap">
              <p onClick={()=>handleActiv('All')} className={activ==='All'?'active':''}>All</p>
              <p onClick={()=>handleActiv('Building')} className={activ==='Building'?'active':''}>Building</p>
              <p onClick={()=>handleActiv('Interior')} className={activ==='Interior'?'active':''}>Interior</p>
              <p onClick={()=>handleActiv('View all projects')} className={activ==='View all projects'?'active':'allProjekts'}>View all projects</p>
            </div>
          </div>
        </div>
      
    </>
  );
}
