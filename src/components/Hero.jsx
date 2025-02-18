import PF from "../assets/PF.png"

<PF className="jpg"></PF>

const Hero = () => {
  return (<div className = "border-b border-neutral-900 pb-4 lg:mb-35">
    <div className = "flex flex-wrap">
        <div className = "w-full lg:w-1/2">
            <div className = "flex flex-col items-center lg:items-start">
                <h1 className = "pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                    Choy Jin Hui
                    </h1>
                    <span className = "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Multimedia University Fresh Graduate
                    </span>
                    <p className = "my-2 max-w-xl py-6 font-light tracking-tight">A fresh graduate with degree in Data Communication and Networking from Multimedia University. 
                      Currently, I am actively seeking for a full-time position in Information Technology. 
                      Eager to contribute to dynamic teams and grow in a challenging environment. 
                      Always keen to learn and adapt to the latest trends in technology.
                    </p>
            </div>
        </div>
        <div className = "w-full lg:w-1/2 lg:p-8">
          <div className = "flex justify-center">
              <img src = {PF} alt = "Profile Pic"></img>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Hero