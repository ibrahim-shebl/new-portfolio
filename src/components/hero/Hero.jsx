import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import heroImg from '../../assetes/me.jpg'
import { Link } from "react-router-dom";

const Hero = () => {
    const lottieRef = useRef();

    return (
        <section className="hero flex">
            <div className="left-section  ">
                <div className="parent-avatar flex">
                    <motion.img
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1.1)" }}
                        transition={{ damping: 6, type: "spring", stiffness: 100 }}
                        src={heroImg}
                        className="avatar"
                        alt=""
                    />
                    <div className="icon-verified"></div>
                </div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="title"
                >
                    Front End Devloper ReactJs.
                     
                </motion.h1>

                <p className="sub-title">
                I am Ibrahim Shebl, a graduate of the Faculty of Computers and Information, Menoufia University, with a very good grade, one year of professional work experience, and a training certificate from the ITI Institute. I received 3 months of training at SmartSync and worked for a period of time at notFound Agency. This is a portfolio containing all the projects you have worked on.
                </p>

                <div className="all-icons flex">
                    <Link to="https://www.linkedin.com/in/ebrahim-shebl-0ab761276/"><div className="icon icon-linkedin"></div></Link>
                    <Link to="https://github.com/ibrahim-shebl"><div className="icon icon-github"></div></Link>
                    <div className="icon icon-twitter"></div> 
                    <div className="icon icon-instagram"></div>
                     
                    
                </div>
            </div>

            <div className="right-section animation ">
                <Lottie
                    lottieRef={lottieRef}
                    className=""
                    onLoadedImages={() => {
                         
                        lottieRef.current.setSpeed(0.5);
                    }}
                    animationData={devAnimation}
                />
            </div>
        </section>
    );
};

export default Hero;
