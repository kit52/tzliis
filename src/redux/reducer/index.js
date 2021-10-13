import { getDate, sortDataStars, sortDataPrice } from "../../components/utils/utils"
const SET_DATE_IN = "SET_DATE_IN";
const SET_CITY = "SET_CITY";
const SET_DAYS = "SET_DAYS";
const SET_DATE_OUT = "SET_DATE_OUT";
export const GET_HOTELS = "GET_HOTELS";
export const SET_HOTELS = "SET_HOTELS";
const ADD_SELECTED_ID = "ADD_SELECTED_ID";
const REMOVE_SELECTED_ID = "REMOVE_SELECTED_ID";
export const SORTING_TO_STARS = "SORTING_TO_STARS";
export const SORTING_TO_STARS_REVERSE = "SORTING_TO_STARS_REVERSE";
export const SORTING_TO_PRICE = "SORTING_TO_PRICE";
export const SORTING_TO_PRICE__REVERSE = "SORTING_TO_PRICE__REVERSE";
export const SET_SEARCH_ERROR = "SET_SEARCH_ERROR";


const date = getDate(new Date());

const getDateOut = (date, days) => {
    let z = new Date(date)
    let x = z.setDate(z.getDate() + +days);
    let y = getDate(new Date(x));
    return y
}

const initialState = {
    search: {
        days: 1,
        date: date,
        city: "Москва",
        dateOut: ''
    },
    selectedHotels: [],
    selectedId: [],
    searchError: false,
    searchResult: [],
    sortingToPrice: null,
    sortingToStars: null,

}

export const search = (dispatch, date, days) => {
    dispatch(setDateOutAC(date, days))
    dispatch({ type: "GET_HOTELS" })
}
export const setDateOutAC = (date, days) => {
    const dateOut = getDateOut(date, days);
    return { type: SET_DATE_OUT, dateOut }
}
export const setDateAC = (date) => {
    return { type: SET_DATE_IN, date }
}
export const setCityAC = (city) => {
    return { type: SET_CITY, city }
}
export const setDaysAC = (days) => {
    return { type: SET_DAYS, days }
}
export const addSelectedIdAC = (item) => {
    return { type: ADD_SELECTED_ID, item }
}
export const removeSelectedIdAC = (id, dateIn, days) => {
    return { type: REMOVE_SELECTED_ID, id, dateIn, days }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATE_IN:
            return { ...state, search: { ...state.search, date: action.date } }
        case SET_CITY:
            return { ...state, search: { ...state.search, city: action.city } }
        case SET_DAYS:
            return { ...state, search: { ...state.search, days: action.days } }
        case SET_DATE_OUT:
            return { ...state, search: { ...state.search, dateOut: action.dateOut } }
        case SET_HOTELS:
            return { ...state, searchResult: [...action.payload] }
        case ADD_SELECTED_ID:
            return {
                ...state,
                selectedHotels: [...state.selectedHotels, action.item]
            }
        case REMOVE_SELECTED_ID:
            return {
                ...state,
                selectedHotels: [...state.selectedHotels.filter((i) => {
                    if (i.hotelId == action.id && i.dateIn == action.dateIn && i.days == action.days) {
                        return false
                    } return true
                })]
            }

        case SORTING_TO_STARS:
            return { ...state, selectedHotels: [...state.selectedHotels.sort(sortDataStars)], sortingToStars: true, sortingToPrice: null }
        case SORTING_TO_STARS_REVERSE:
            return { ...state, selectedHotels: [...state.selectedHotels.sort(sortDataStars).reverse()], sortingToStars: false }
        case SORTING_TO_PRICE:
            return { ...state, selectedHotels: [...state.selectedHotels.sort(sortDataPrice)], sortingToPrice: true, sortingToStars: null }
        case SORTING_TO_PRICE__REVERSE:
            return { ...state, selectedHotels: [...state.selectedHotels.sort(sortDataPrice).reverse()], sortingToPrice: false }
        case SET_SEARCH_ERROR:
            return { ...state, searchError: action.status }
        default:
            return state;
    }

}