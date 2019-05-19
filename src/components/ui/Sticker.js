import React from 'react'

class Sticker extends React.Component {

    render() {

        let { sticker, defaultSticker } = this.props

        if (defaultSticker) {
            sticker = '/rick_and_morty.png'
        }

        return (
            <img src={sticker} alt="sticker"/>
        )
    }
}

export default Sticker