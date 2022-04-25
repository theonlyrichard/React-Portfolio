import "./about.css"
import aboutt from "../../img/aboutt.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={aboutt} alt="" className="a-img" />
                </div>

            </div>
            <div className="a-right"></div>


        </div>
    )
}

export default About