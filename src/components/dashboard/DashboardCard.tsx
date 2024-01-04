type propsChildren = {
    children: React.ReactNode;
}

const DashboardCard = ({ children }: propsChildren) => {
    return (
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
            {children}
        </div>
    );
};

export { DashboardCard };