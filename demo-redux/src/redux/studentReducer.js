export default function studentReducer(state = [], action) {
    if (action.type==="LOAD_LIST_STUDENT") {
        return action.payload
    }
    return state
}
