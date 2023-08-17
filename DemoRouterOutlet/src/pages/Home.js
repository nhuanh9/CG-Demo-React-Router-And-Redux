import {Link} from "react-router-dom";

export default function Home() {
    return (<>
            <Link to={'/user'}>User</Link>
            <Link to={'/admin'}>Admin</Link>
        </>
    )
}
