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
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub"> My name is Richard! Im currently a Insurance Agent and have made the desicion to make a career change to become a Software Developer.</p>
                <p className="a-desc"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatum doloremque nisi maiores ipsum, culpa consequuntur expedita commodi possimus accusantium distinctio facilis alias, necessitatibus consequatur nesciunt fugit quod ducimus accusamus!</p>
            </div>


        </div>
    )
}

export default About