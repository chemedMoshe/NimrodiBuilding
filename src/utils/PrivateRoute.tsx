import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";

interface IPrivateRoute {
    component: ReactNode,
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
    const floorsPermission: boolean[] = useSelector((state:
        { floorAccess: { floorAccess: boolean[] } }) => state.floorAccess.floorAccess);

    const { index } = useParams<{ index: string }>();
    const floorIndex = parseInt(index || "0");
    const isPermission: boolean = floorsPermission[floorIndex];

    return isPermission ? component : <Navigate to={`/`}></Navigate>


};

export default PrivateRoute