import React from 'react'
// import { Animated } from 'react-animated-css'

const animationsIn = [ 'bounceInDown']
const animationsOut = [ 'fadeDown']

class Sticker extends React.Component {

    nextAnimationIn = () => {
        const random = Math.floor(Math.random() * animationsIn.length)
        return animationsIn[random]
    }

    nextAnimationout = () => {
        const random = Math.floor(Math.random() * animationsOut.length)
        return animationsOut[random]
    }

    render() {

        // const animationIn = this.nextAnimationIn()
        // const animationOut = this.nextAnimationout()


        return (
            // <Animated animationIn={animationIn} animationInDuration={2000} >
                <div className="sticker" style={{ bottom: 0 }}>
                    <img src="/rick_and_morty.png" alt="sticker"/>
                </div>
            // </Animated>
        )
    }
}

export default Sticker