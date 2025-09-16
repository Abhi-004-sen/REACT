import CardContainer from "./CardContainer"
import Navbar from "./Navbar"

function MainContainer({colorTheme, colorChangeTheme}) {
   
    //  console.log(colorTheme,colorSetTheme,colorChangeTheme)
    return (
        <div className="main-conatiner">
            <Navbar colorTheme1={colorTheme} colorChangeTheme2={colorChangeTheme} />
            <CardContainer />
        </div>
    )
}

export default MainContainer