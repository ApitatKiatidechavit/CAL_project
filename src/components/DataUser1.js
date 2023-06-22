import React, { useEffect, useState } from 'react'
import { Button, Input, Form, DatePicker } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper'

import { GrFormNextLink } from 'react-icons/gr'
import { BiSave } from 'react-icons/bi'
import { IoIosHome } from 'react-icons/io'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function DataUser1() {

  const MySwal = withReactContent(Swal)
  const [form] = Form.useForm()

  const [userData, setUserData] = useState([]) // API
  const [dataPost, setDataPost] = useState({})

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    await axios.get('http://localhost:3000/users')
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err))
  }

  const handleSubmit = async (e) => {
    await axios.post('http://localhost:3000/users/', dataPost)
      .then(res => {
        console.log("Add", res)
        loadData()
        if (res.statusText === 'Created') {
          MySwal.fire({
            title: <strong>success</strong>,
            icon: 'success'
          })
        } else {
          MySwal.fire({
            title: <strong>error</strong>,
            icon: 'error'
          })
        }
      })
      .catch((err) => console.log(err))
    form.resetFields()
  }

  return (
    <Paper style={{ padding: 20 }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 0,
      marginBottom: 30,
    }}>
      <h2>ข้อมูลส่วนตัว</h2>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 12,
        }} 
        style={{
          width: '50em'
        }}
        form={form} 
        onFinish={handleSubmit}
        autoComplete="off"  
        initialValues={{remember: true}}
      >
        

        <Form.Item label='เลขประจำตัวประชาชน' name='idcard'
          rules={[
            {
              required: true,
              message: 'Please input your idcard !',
            },]}>
          <Input type='text' name='idcard'
            onChange={(e) => setDataPost({ ...dataPost, idcard: e.target.value })}></Input>
        </Form.Item>
 
        <Form.Item label='ชื่อ - นามสกุล' name='name'
          rules={[
            {
              required: true,
              message: 'Please input your name !',
            },]}>
          <Input type='text' name='name'
            onChange={(e) => setDataPost({ ...dataPost, name: e.target.value })}></Input>
        </Form.Item>
        <Form.Item label='Name - Lastname' name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username !',
            },]}>
          <Input type='text' name='username'
            onChange={(e) => setDataPost({ ...dataPost, username: e.target.value })}></Input>
        </Form.Item>
        <Form.Item label='เกิดวันที่' name='birth'
          rules={[
            {
               required: true,
            },]}>
          <DatePicker format={'YYYY-MM-DD'} name='birth'
            onChange={(e) => setDataPost({ ...dataPost, birth: e.format('YYYY-MM-DD') })} />
        </Form.Item>
        <Form.Item label='ศาสนา' name='religion'
          rules={[
            {
              required: true,
              message: 'Please input your religion !',
            },]}>
          <Input type='text' name='religion'
            onChange={(e) => setDataPost({ ...dataPost, religion: e.target.value })}></Input>
        </Form.Item>
        <Form.Item label='ที่อยู่' name='address'
          rules={[
            {
              required: true,
              message: 'Please input your address !',
            },]}>
          <Input type='text' name='address'
            onChange={(e) => setDataPost({ ...dataPost, address: e.target.value })}></Input>
        </Form.Item>
        <Form.Item label='วันออกบัตร' name='fcard'
          rules={[
           {
              required: true,
           },]}>
          <DatePicker format={'YYYY-MM-DD'} name='fcard'
            onChange={(e) => setDataPost({ ...dataPost, fcard: e.format('YYYY-MM-DD') })} />
        </Form.Item>
        <Form.Item label='วันบัตรหมดอายุ' name='ocard'
          rules={[
          {
             required: true,
          },]}>
          <DatePicker format={'YYYY-MM-DD'} name='ocard'
            onChange={(e) => setDataPost({ ...dataPost, ocard: e.format('YYYY-MM-DD') })} />
        </Form.Item>
   
        <Button type="text" htmlType="submit" style={{ marginLeft: 280, width: 70, height: 70, background: "#e0e0e0" }} >
          <BiSave size={35} /><br />SAVE</Button>

        <Link to='/'>
          <Button type="text" style={{ marginLeft: 30, width: 70, height: 70, background: "#e0e0e0" }}>
            <IoIosHome size={35}/><br/>HOME</Button>
        </Link>
        
        <Link to='/Page2'>
          <Button type="text" shape="circle" size='large' style={{ marginLeft: 200, background: '#ffec3d'}}>
            <GrFormNextLink size={28}/></Button>
        </Link>

      </Form>
    </div>
    </Paper>
  )
}
