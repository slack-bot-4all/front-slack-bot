import { Loadingconstants } from './../constants/actions'

export default (state = {}, action) => {
    switch (action.type) {
        case Loadingconstants.LOADING:
            return { ...state, loading: true }
        case Loadingconstants.LOADING_FINISH:
            return { ...state, loading: false }
        default:
            return state
    }
}
