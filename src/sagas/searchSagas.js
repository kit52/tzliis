import { takeEvery, put, call, select } from "redux-saga/effects";
import { GET_HOTELS, SET_HOTELS, SET_SEARCH_ERROR } from "../redux/reducer/index";
const fetchtHotels = (city, dateIn, dateOut) => fetch(`https://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${dateIn}&checkOut=${dateOut}&limit=10`)

export function* getHotelsWorker() {
    debugger
    const city = yield select(s => s.searchPage.search.city);
    const dateIn = yield select(s => s.searchPage.search.date);
    const dateOut = yield select(s => s.searchPage.search.dateOut);
    try {
        const request = yield call(() => fetchtHotels(city, dateIn, dateOut))
        const data = yield call(() => new Promise(res => res(request.json())))
        yield put({
            type: SET_HOTELS,
            payload: data
        })
        yield put({
            type: SET_SEARCH_ERROR,
            status: false
        })
    } catch {
        yield put({
            type: SET_SEARCH_ERROR,
            status: true
        })
    }

}
export function* getHotelWatcher() {
    yield takeEvery(GET_HOTELS, getHotelsWorker)
};

export default function* rootSaga() {
    yield getHotelWatcher()
}