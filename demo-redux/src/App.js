import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "./services/productService";
import {getListStudent} from "./services/studentService";
import {useEffect} from "react";

function App() {
    const data = useSelector(store => {
        return store.products
    });
    const dataStudents = useSelector(store => {
        return store.students
    });
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getListStudent())
    }, [])
    return (
        <>
            <h1>Home</h1>
            {data.map(item => (
                <h3>{item.name}, {item.price}</h3>
            ))}
            <button onClick={() => {
                dispatch(addProduct())
            }}>Add
            </button>
            <hr/>
            {dataStudents.map(item => (
                <h3>{item.name}</h3>
            ))}
        </>
    );
}

export default App;
