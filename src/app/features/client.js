import { createSlice } from "@reduxjs/toolkit";


export const clientSlice = createSlice({
  name: "client",
  initialState: [],
  reducers: {
    addClient: (state, action) => {
        state.push(action.payload)
    },
    reset: (state, action) => {
      state = action.payload
    }

  },
});

export const { addClient, reset } = clientSlice.actions
export default clientSlice.reducer