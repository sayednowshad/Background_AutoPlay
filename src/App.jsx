import { useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Background/Navbar/Navbar";
import Hero from "./Components/Background/Hero/Hero";

function App() {

    let heroData = [

      {text1:" Dive Into" , text2: "What you have"},
      {text1:"Indulge" , text2: "your Passions"},
      {text1: "Give in to" , text2 : "your passions"},
    ]

    const [heroCount , setHeroCount] = useState(2);
    const [playStatus , setPlayStatus] = useState(false);

  return (
    <div>

      <Background playStatus={playStatus} heroCount= {heroCount}/>
      <Navbar />
      <Hero  
          setPlayStatus = {setPlayStatus}
          heroData = {heroData}
          setHeroCount = {setHeroCount}
          heroCount = {heroCount}
          playStatus = {playStatus}
      />
      
        
    </div>
  )
}

export default App