import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFormState {
  location: string;
  businessName: string;
  industry: string;
  companySize: string;
  estimatedVolume: string;
}

const initialState: IFormState = {
  location: "",
  businessName: "",
  industry: "",
  companySize: "",
  estimatedVolume: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<IFormState>>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;

export default formSlice.reducer;
