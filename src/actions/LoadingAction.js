import {Loadingconstants} from '../constants/actions'

const loading = () => dispatch => {
    dispatch({ type: Loadingconstants.LOADING })
}

const loadingFinish = () => dispatch => {
    dispatch({ type: Loadingconstants.LOADING_FINISH })
}

export const LoadingAction = {
    loading,
    loadingFinish,
}