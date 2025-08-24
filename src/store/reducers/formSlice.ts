import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FormDispatchModel, FormStoredModel, FormStoredState } from '../../types/form.type';
import type { RootState } from '../store';

const initialState: FormStoredState = {
  lastFormId: 0,
  formSubmissions: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitForm: {
      reducer: (state, action: PayloadAction<FormStoredModel>) => {
        state.formSubmissions.push(action.payload);
        state.lastFormId = action.payload.id;
      },
      prepare: (formData: FormDispatchModel) => {
        const id = Date.now();
        return {
          payload: {
            id,
            storedForm: formData,
          },
        };
      },
    },
  },
});

export const selectFormSubmissionsValue = (state: RootState): FormStoredModel[] => state.form.formSubmissions;
export const selectFormLastIdValue = (state: RootState): number => state.form.lastFormId;
export const { submitForm } = formSlice.actions;

export default formSlice.reducer;
