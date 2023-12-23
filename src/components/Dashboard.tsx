import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <p>Dashboard </p>
            <Link to="/products" className="underline">Go to Projects</Link>
        </div>
    )
}

export { Dashboard };