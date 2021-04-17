import {shuffle} from "../utils/shuffle";

const initialState = {
    allCoupleFind: false,
    allCouplesCount: 0,
    shuffledArray: [],
    isFirstClicked: false,
    firstClick: null,
}

const colorsArray = [
    '#FF4136', '#FF4136',
    '#0074D9', '#0074D9',
    '#FFDC00', '#FFDC00',
    '#2ECC40', '#2ECC40',
    '#39CCCC', '#39CCCC',
    '#B10DC9', '#B10DC9',
    '#FF851B', '#FF851B',
    '#85144b', '#85144b'
]

export const FindCoupleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Cell_Clicked': {
            if (state.firstClick === action.index) {
                return {
                    ...state
                }
            }

            if (!state.isFirstClicked) {
                const newObj = {
                    ...state,
                    isFirstClicked: true,
                    firstClick: action.index,
                    shuffledArray: [
                        ...state.shuffledArray.map((cell, index) => {
                            cell.show = index === action.index;
                            return cell
                        })],
                }

                return {
                    ...newObj
                }
            }


            let shuffledArray = [...state.shuffledArray]
            let isCouple = shuffledArray[action.index].color === shuffledArray[state.firstClick].color

            let allCount = state.allCouplesCount
            if (isCouple) allCount++

            //second clicked cell
            shuffledArray[action.index] = {
                ...state.shuffledArray[action.index],
                show: !isCouple,
                hidden: isCouple,
                coupleFound: isCouple
            }
            //first clicked cell
            shuffledArray[state.firstClick] = {
                ...state.shuffledArray[state.firstClick],
                show: !isCouple,
                hidden: isCouple,
                coupleFound: isCouple
            }


            const newObj = {
                ...state,
                isFirstClicked: false,
                firstClick: null,
                shuffledArray: [...shuffledArray],
                allCouplesCount: allCount,
            }
            //check if game is over
            if (allCount >= colorsArray.length / 2) {
                newObj.allCoupleFind = true
            }

            return {
                ...newObj
            }
        }

        case 'Start_Game': {
            let newArray = shuffle(colorsArray)

            return {
                ...state,
                shuffledArray: [...newArray],
                allCouplesCount: 0,
                allCoupleFind: false,
                isFirstClicked: false,
                firstClick: null,
            }

        }
        default:
            return state
    }
}

export const toggleClicked = (index) => ({type: 'Cell_Clicked', index})
export const startGame = () => ({type: 'Start_Game'})
