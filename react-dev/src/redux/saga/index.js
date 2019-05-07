import { all } from 'redux-saga/effects'
import watchAndLog from './log'
import watchGetList from './list'

export default function* rootSaga () {
    yield all([
        watchAndLog(),
        watchGetList()
    ])
}