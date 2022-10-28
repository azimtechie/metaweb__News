import { Table } from 'antd';
import React from 'react';

const columns = [
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.age - b.age,
            filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'John',
          value: 'John',
        },
      ],
      sorter: (a, b) => a.age - b.age,
            filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',
          sorter: (a, b) => a.age - b.age,
                filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

        },
      ],
      sorter: (a, b) => a.age - b.age,
            filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',
          sorter: (a, b) => a.age - b.age,
                filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

        },
      ],
      sorter: (a, b) => a.age - b.age,
            filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',
          sorter: (a, b) => a.age - b.age,
                filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

        },
      ],
      sorter: (a, b) => a.age - b.age,
            filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      sorter: (a, b) => a.age - b.age,
            filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      sorter: (a, b) => a.age - b.age,
            filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      sorter: (a, b) => a.age - b.age,
            filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
      sorter: (a, b) => a.age - b.age,
            filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

    },
    {
      title: 'Column 8',
      dataIndex: 'address',
      key: '8',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],
      sorter: (a, b) => a.age - b.age,
            filters: [
        {
          text: 'Joe',
          value: 'Joe',

        },
        {
          text: 'John',
          value: 'John',

        },
      ],

    },
    {
      title: 'Action',
      key: 'operation',
      render: () => <a>action</a>,
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

const AntdTableDemo = () =>{
    return(
        <Table
        columns={columns}
        dataSource={data}
        scroll={{
          y: 300,
        }}
      />
    
    );
};

export default AntdTableDemo; 