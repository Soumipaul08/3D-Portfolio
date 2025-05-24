import React, { useRef } from 'react'
import codingimg from '../assets/coding-pov.png'
import Card from '../components/Card'
import csharp from '../assets/logos/csharp-pink.png'
import net from '../assets/logos/dotnet-pink.png'
import blazor from '../assets/logos/blazor-pink.png'
import { Globe } from '../components/Globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from '../components/FrameWorks'


const About = () => {
    const grid2Container = useRef();
  return (
    <section className='c-space section-spacing'>
      <h2 className='text-heading'>About Me</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        {/* Grid 1 */}
        <div className="relative flex items-end grid-default-color grid-1 overflow-hidden">
          <img
            src={codingimg}
            alt="Coding POV"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-[50%] md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10 p-4">
            <p className="headtext">Hi, I'm Soumi paul</p>
            <p className="subtext">
             MBA candidate with a dual focus in Human Resources and Finance, complemented by hands-on experience in web development through a 3-month internship. Skilled in both business strategy and technical execution, I aim to contribute to roles that bridge people, processes, and technology.
            </p>
          </div>
          <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'></div>
        </div>
        {/* Grid 2 */}
        <div className='grid-default-color grid-2'>
            <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                <p className='flex items-end text-5xl text-gray-500'>CODE IS CRAFT</p>
                <Card style={{rotate:"75deg", top:"30%", left:"20%"}} containerRef={grid2Container} text="GRASP"/>
                <Card style={{rotate:"30deg", top:"60%", left:"45%"}} containerRef={grid2Container}  text="SOLID"/>
                <Card style={{rotate:"90deg", bottom:"30%", left:"70%"}} containerRef={grid2Container}  text="Design Patterns"/>
                <Card style={{rotate:"45deg", top:"55%", left:"0%"}} containerRef={grid2Container}  text="Design Principles"/>
                <Card style={{rotate:"20deg", top:"10%", left:"38%"}} containerRef={grid2Container}  text="SRP"/>
                <Card style={{rotate:"30deg", top:"10%", left:"70%"}} containerRef={grid2Container}  image={csharp}/>
                <Card style={{ rotate: "-45deg", top: "70%", left: "70%" }} containerRef={grid2Container}  image={net}/>
                <Card style={{ rotate: "45deg", top: "5%", left: "10%" }} containerRef={grid2Container}  image={blazor}/>
            </div>
        </div>
        {/* Grid 3 */}
        <div className='grid-black-color grid-3'>
            <div className="z-10 w-[50]">
                <p className='headtext'>Time Zone</p>
                <p className='subtext'>OPEN TO REMOTE WORK</p>
            </div>
            <figure className='absolute left-[30%] top-[10%]'><Globe/></figure>
        </div>
        {/* Grid 4 */}
        <div className='grid-special-color grid-4'>
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className='text-center headtext'>Do you want to start project together?</p>
                <CopyEmailButton/>
            </div>
        </div>
        {/* Grid 5 */}
        <div className='grid-default-color grid-5'>
          <div className="z-10 w-[50%] ">
            <p className='headtext'> ⚡  TECH STACK</p>
            <p className='subtext'>
            ✔️ HTML, CSS, JavaScript, React, Git  <br />
            📚 Currently Learning: TypeScript, Node.js, Express</p>
          </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                <Frameworks/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
