import AboutMePic from "../assets/AboutMePic.jpg"

const About = () => {
  return  <div className = "border=b border-neutral-900 pb-4">
        <h2 className = "my-20 text-center text-4xl">About  
            <span className = "text-neutral-500"> Me</span>
        </h2>
        
        <div className = "flex flex-wrap">
            <div className = "w-full lg:w-1/2 lg:p-8">
                <div className = "flex items-center justify-center">
                    <img className = "rounded-2xl" src = {AboutMePic} alt = "AboutMe"></img>
                </div>
            </div>
            <div className = "w-full lg:w-1/2">
                    <div className = "flex justify-center lg:justify-start">
                        <p className = "my-2 max-w-xl py-6 text-xl">
                        I am a dedicated and versatile fresh graduate with a passion for creating efficient and user-friendly web applications. 
                        I have worked with a variety of technologies such as React, Node.js, MySQL, and Jetpack Compose. 
                        My approach to development focuses on clean, maintainable code and delivering solutions that enhance user experience. 
                        I am always eager to dive into new tools and frameworks to expand my skillset and bring innovative ideas to life. 
                        Whether working independently or within a team, I am committed to producing high-quality results that align with project goals and timelines.
                        </p>
                    </div>
            </div>
        </div>
        
  </div>
}

export default About