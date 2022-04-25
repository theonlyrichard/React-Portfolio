import "./intro.css"
import Me from "../img/me.png"


const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello! My name is</h2>
                    <h1 className="i-name">Richard Cardoza</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Full Stack Developer</div>
                            <div className="i-title-item">JavaScript</div>
                            <div className="i-title-item">React</div>
                            <div className="i-title-item">SQL</div>
                            <div className="i-title-item">Dog Lover</div>


                        </div>
                    </div>
                    <div className="i-desc"> Freshly graduated BOOTCAMP Full Stack Developer in search of his oppurtunity to shine in his new career! </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;