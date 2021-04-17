import React, {useEffect, useState} from "react"
import styles from "./index.css"

const Cell = (props) => {
    const cell = props.color

    const [show, setShow] = useState(false)
    const [style, setStyle] = useState(false)


    const backgroundStyle = {backgroundColor: cell.color}

    function toggleFlip() {
        if (cell.hidden) return
        if (!props.clickable) return
        props.clickHandler(props.index)
    }

    useEffect(() => {
        if (cell.coupleFound || cell.show) {
            setShow(true)
        }
        if (!props.firstClicked) {
            props.setClickable(false)

            setTimeout(() => {
                setStyle(!!cell.hidden)
                props.setClickable(true)
                setShow(false)

            }, 700)
        }

    }, [cell.show, props.firstClicked, cell.hidden])

    return (
        <>
            <div className={`${styles.cell} 
            ${show ? styles.is__flipped : null} ${style ? styles.opacity : null}`}
                 onClick={(e) => {
                     toggleFlip(e)
                 }}>
                <div className={`${styles.cell__font} ${styles.cell__face} `}


                     style={style ? backgroundStyle : null} />
                <div className={`${styles.cell__back} ${styles.cell__face}`}
                     style={backgroundStyle} />
            </div>

        </>
    )
}

export default Cell