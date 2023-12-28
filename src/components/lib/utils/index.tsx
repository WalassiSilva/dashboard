export const getOrderStatus = (status: string) => {
    switch (status) {
        case "PLACED":
            return (
                <span className="capitalize py-1 rounded-m text-xs text-sky-600 bg-sky-100">
                    {status.replaceAll("_", " ").toLowerCase()};
                </span>
            );
        case "CONFIRMED":
            return (
                <span className="py-1 rounded-md text-xs text-orange-600 bg-orange-100">
                    {status.replaceAll("_", " ").toLowerCase()};
                </span>
            );
        case "SHIPPED":
            return (
                <span className="py-1 rounded-md text-xs text-teal-600 bg-teal-100">
                    {status.replaceAll("_", " ").toLowerCase()};
                </span>
            );
        case "OUT_FOR_DELIVERY":
            return (
                <span className="py-1 rounded-md text-xs text-yellow-600 bg-yellow-100">
                    {status.replaceAll("_", " ").toLowerCase()};
                </span>
            );
        case "DELIVERED":
            return (
                <span className="py-1 rounded-md text-xs text-gray-600 bg-green-100">
                    {status.replaceAll("_", " ").toLowerCase()};
                </span>
            );
        default:
            return (
                <span className="py-1 rounded-md text-xs text-gray-600 bg-gray-100">
                    {status.replaceAll("_", " ").toLowerCase()};
                </span>
            );
    }
};
