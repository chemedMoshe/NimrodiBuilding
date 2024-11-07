import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Role } from "../Types/RoleModel";
import roleList from '../data/roles.json'

export const roleReduser  = createSlice({
    name: "role",
    initialState: {
        role: Role.UnknownPersonnel
    },
    reducers: {
        setRoleAccess: (state, action: PayloadAction<number>) => {
            state.role =roleList[action.payload] as Role;
        },
    },
});