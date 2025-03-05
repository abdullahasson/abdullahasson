"use client"
// React library
import { TypeAnimation } from "react-type-animation";

const WriteEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                'Front End Developer',
                2000,
                'Freelancer',
                2000,
                'Next Js Developer',
                2000,
                "Web Developer",
                2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />
    )
}

export default WriteEffect;