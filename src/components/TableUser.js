import React, { useEffect, useState } from 'react'
import { Table, Button, Popconfirm } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function TableUser() {

  const MySwal = withReactContent(Swal)

  const [userData, setUserData] = useState([]) // API

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    await axios.get('http://localhost:3000/users')
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err))
  }

  function removeObj(id) {
    return userData.filter((obj) => obj.id !== id)
  }
  const handleDelete = async (value) => {
    const newValue = removeObj(value.id)
    await axios.delete('http://localhost:3000/users/' + value.id)
      .then(loadData())
      .catch((err) => console.log(err))
        MySwal.fire({
            title: <strong>success</strong>,
            icon: 'success'
        })
       
    setUserData(newValue)
  }
  const cancel = (e) => {
    console.log(e);
  };


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'เลขประจำตัวประชาชน',
      dataIndex: 'idcard',
    },
    {
      title: 'ชื่อ - นามสกุล',
      dataIndex: 'name',
    },
    {
      title: 'Name - Lastname',
      dataIndex: 'username',
    },
    {
      title: 'เกิดวันที่',
      dataIndex: 'birth',
    },
    {
      title: 'ศาสนา',
      dataIndex: 'religion',
    },
    {
      title: 'ที่อยู่',
      dataIndex: 'address',
    },
    {
      title: 'วันออกบัตร',
      dataIndex: 'fcard',
    },
    {
      title: 'วันบัตรหมดอายุ',
      dataIndex: 'ocard',
    },
    {
      title: 'Edit',
      key: 'edit',
      render: (item, record) => (

        <Link to={'/Edit/' + item.id}>
          Edit
        </Link>

      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Popconfirm
                title="Warning !!!"
                description="Are you sure to delete !!!"
                onConfirm={() => handleDelete(record)}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
        >
          {/* <Button onClick={() => {handleDelete(record)}}>Delete</Button> */}
          <Button >Delete</Button>

        </Popconfirm>
      ),
    },

  ];

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>
        ListUser
      </h2>
      <Table dataSource={userData} columns={columns} />;
    </div>
  )
}
