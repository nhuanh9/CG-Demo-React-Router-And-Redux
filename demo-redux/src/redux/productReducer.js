export default function productReducer(state = [{name: 'B', price: 20}, {name: 'A', price: 20}], action) {
    if (action.type == 'ADD') {
        return [...state, action.payload]
    }
    return state
}
