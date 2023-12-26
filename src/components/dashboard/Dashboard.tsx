import { Link } from "react-router-dom";
import { DashboardStatsGrid } from "./DashboardStatsGrid";
import { TransactionChart } from "../charts/TransactionChart";
import { BuyerChart } from "../charts/BuyerChart";

const Dashboard = () => {
    return (
        <div className="flex gap-4 flex-col">
            <DashboardStatsGrid />
            <div className="flex flex-row gap-4 w-full">
                <TransactionChart />
                <BuyerChart />
            </div>

            <Link to="/products" className="underline">Go to Projects</Link>

        </div>
    )
}

export { Dashboard };