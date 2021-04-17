import React, {useState} from "react"
import styles from "./index.css"
import Cell from "../Cell";

const CellsContainer = (props) => {

    const [clickable, setClickable] = useState(true)

    const arrayOfCells = props.colorsArray.map((color, index) => {
        return (
            <Cell key={index} color={color}
                  index={index} clickHandler={props.toggleClick} clickable={clickable}
                  setClickable={setClickable} firstClicked={props.firstClicked}/>
        )
    })

    return (
        <div className={styles.cellsWrapper}>
            {arrayOfCells}
        </div>
    )
}

export default CellsContainer