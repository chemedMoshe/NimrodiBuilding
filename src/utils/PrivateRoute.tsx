import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";

interface IPrivateRoute {
    component: ReactNode,
}

const privateRoute = ({ component }: IPrivateRoute) => {
    const floorsPermission: boolean[] = useSelector((state:
        { floorAccess: { floorAccess: boolean[] } }) => state.floorAccess.floorAccess);

    const navigate = useNavigate();
    const { index } = useParams<{ index: string }>();
    const floorIndex = parseInt(index || "0");

    const isPermission: boolean = floorsPermission[floorIndex];

    return !isPermission ? component : <Navigate to={`/`}></Navigate>


};

export default privateRoute