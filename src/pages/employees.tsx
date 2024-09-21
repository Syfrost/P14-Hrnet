import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addEmployee } from '@/store/slices/employees';
import { generateRandomUsers } from '@/lib/generateFakeUsers';
import { DataTable } from '@/components/customTable';
import { Employee } from '@/store/slices/employees';

export const Employees: React.FC = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state: RootState) => state.employees);

    useEffect(() => {
        const lastId = employees.length > 0 ? Math.max(...employees.map((employee: Employee) => Number(employee.id))) : -1;
        const users = generateRandomUsers(50, lastId + 1);
        users.forEach(user => {
            dispatch(addEmployee(user));
        });
    }, [dispatch]);

    return (
        <div>
            <h1>Employees</h1>
            <DataTable data={employees} />
        </div>
    );
};

export default Employees;