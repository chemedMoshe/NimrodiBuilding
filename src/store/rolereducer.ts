import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Role } from "../Types/RoleModel";

export const roleReduser  = createSlice({
    name: "role",
    initialState: {
        role: Role.UnknownPersonnel
    },
    reducers: {
        setRoleAccess: (state, action: PayloadAction<Role>) => {
            state.role = action.payload;
        },
    },
});