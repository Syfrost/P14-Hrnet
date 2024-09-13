import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    startDate: Date;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
}

const employeesSlice = createSlice({
    name: 'employees',
    initialState: [] as Employee[],
    reducers: {
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.push(action.payload);
        },
        removeEmployee: (state, action: PayloadAction<string>) => {
            return state.filter(employee => employee.id !== action.payload);
        },
        updateEmployee: (state, action: PayloadAction<Employee>) => {
            const index = state.findIndex(employee => employee.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { addEmployee, removeEmployee, updateEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;