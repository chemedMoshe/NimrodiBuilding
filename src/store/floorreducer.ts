import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

export const floorSlice = createSlice({
    name: "permission",
    initialState: {
        floorAccess: [false, false, false, false, false],
    },
    reducers: {
        changeAccess: (state, action: PayloadAction<number>) => {

            state.floorAccess[action.payload] = !state.floorAccess[action.payload];
        },
    },
})