import { DashboardCard } from "./DashboardCard";
import { IoBagHandle, IoCart, IoPeople, IoPieChart } from "react-icons/io5";

const DashboardStatsGrid = () => {
    return (
        <div className="flex gap-4 w-full">
            <DashboardCard>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center ">
                        <strong className="text-xl text-gray-700 font-semibold">$53,242.87</strong>
                        <span className="text-sm text-green-500 pl-2">+234</span>
                    </div>
                </div>
            </DashboardCard>
            <DashboardCard>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
                    <IoPieChart className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center ">
                        <strong className="text-xl text-gray-700 font-semibold">$$3423</strong>
                        <span className="text-sm text-green-500 pl-2">-343</span>
                    </div>
                </div>
            </DashboardCard>
            <DashboardCard>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
                    <IoPeople className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center ">
                        <strong className="text-xl text-gray-700 font-semibold">12313</strong>
                        <span className="text-sm text-green-500 pl-2">-30</span>
                    </div>
                </div>
            </DashboardCard>
            <DashboardCard>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <IoCart className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center ">
                        <strong className="text-xl text-gray-700 font-semibold">16432</strong>
                        <span className="text-sm text-green-500 pl-2">-43</span>
                    </div>
                </div>
            </DashboardCard>
        </div>
    );
};

export { DashboardStatsGrid };