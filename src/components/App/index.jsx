import React from "react"
import styles from "./index.css"
import { connect } from "react-redux";
import {toggleClicked, startGame} from "../../reducers/find_couple";
import CellsContainer from "../CellsContainer";

const App = (props) => {

    if (props.allCoupleFind) {
        alert('Yayyy!')
    }

    return (
        <div className={styles.main}>
            <button className={styles.startButton} onClick={props.startGame}>Start game</button>
            <CellsContainer colorsArray={props.colorsArray} toggleClick={props.toggleClicked}
                            firstClicked={props.firstClicked}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    firstClicked: state.FindCoupleReducer.isFirstClicked,
    colorsArray: state.FindCoupleReducer.shuffledArray,
    allCoupleFind: state.FindCoupleReducer.allCoupleFind
})

export default connect(mapStateToProps, {toggleClicked,startGame})(App)