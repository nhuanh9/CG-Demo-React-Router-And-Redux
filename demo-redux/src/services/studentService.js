import axios from "axios";

export const getListStudent = () => {
    return async dispatch => {
        const response = await axios.get(
            "http://localhost:3001/students"
        );
        dispatch({
            type: 'LOAD_LIST_STUDENT',
            payload: response.data
        });
    };
};
