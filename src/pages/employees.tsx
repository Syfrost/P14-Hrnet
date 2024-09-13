import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addEmployee } from '@/store/slices/employees';
import { generateRandomUsers } from '@/lib/generateFakeUsers';
import { DataTable } from '@/components/customTable';

const Employees: React.FC = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state: RootState) => state.employees);

    useEffect(() => {
        const users = generateRandomUsers(50);
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