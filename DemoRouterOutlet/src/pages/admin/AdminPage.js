import {Link, Outlet, useParams} from "react-router-dom";

export default function AdminPage() {

    return (
        <>
            <h1>Admin page</h1>
            <span>Side bar</span> |  <Outlet/>
        </>
    )
}
