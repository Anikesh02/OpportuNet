import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { courses } from "../assets/data/course";
import { Experience } from "../components/CourseBook/Experience";
import { UI } from "../components/CourseBook/UI";
import CourseCards from "../components/Courses/CourseCards";
import './Courses.css';
function Courses() {
  return (
    <>
    <section id="root1" className="h-[100svh]">
    {/* <h1 className="text-[30px] text-center text-[white]">Course Magazine</h1> */}
      
      <UI/>
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </section>
    
    

    <section className=" mt-0 bg-transparent">
    <div className="container max-w-8xl mx-auto">
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {courses.map((course)=>(
        <CourseCards key={course.id} course={course}/>
        ))}
        { console.log(courses) }
    </div>
    </div>
  </section>
  </>
);
}

export default Courses;
