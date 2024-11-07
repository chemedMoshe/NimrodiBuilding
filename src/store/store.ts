import { configureStore } from "@reduxjs/toolkit";
import { floorSlice } from "./floorreducer";
import { roleReduser } from "./Rolereducer";

export default configureStore({
    reducer: {
        floorAccess: floorSlice.reducer,
        role: roleReduser.reducer
    }
})

export const {
     setRoleAccess,
    changeAccess 
} =
{
    ...roleReduser.actions,
    ...floorSlice.actions
};