import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Table, Tag, Space } from 'antd';

import {
    actionCreators as usersActions,
    selector as usersSelector
} from '../features/users';

const Users = () => {

    const dispatch = useDispatch();
    const { users } = useSelector((state) => usersSelector(state));

    useEffect(() => {
        dispatch(usersActions.list());
    }, [dispatch])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
    ];

    const data= users.dataSource;

    return <Table
        columns={columns}
        dataSource={data} 
        loading= {users.isLoading}
        rowKey={"id"}
        />;
};

export default Users;