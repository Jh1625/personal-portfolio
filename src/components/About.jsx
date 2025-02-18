import AboutMePic from "../assets/AboutMePic.jpg"

const About = () => {
  return  <div className = "border=b border-neutral-900 pb-4">
        <h2 className = "my-20 text-center text-4xl">About  
            <span className = "text-neutral-500"> Me</span>
        </h2>
        <div className = "w-full lg:w-1/2 lg:p-8">
            <div className = "flex items-center justify-center">
                <img className = "rounded-2xl" src = {AboutMePic} alt = "AboutMe"></img>
            </div>
        </div>
  </div>
}

export default About