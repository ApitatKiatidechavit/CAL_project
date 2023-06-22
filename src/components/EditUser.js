import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button, Input, Form, DatePicker } from 'antd';
import { useParams, useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import dayjs from 'dayjs';
import { Paper } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

export default function EditUser() {

    const MySwal = withReactContent(Swal)

    const [uData, setUData] = useState([])

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        await axios.get('http://localhost:3000/users/' + params.id)
            .then((res) => setUData(res.data))
            .catch((err) => console.log(err))

    }

    const handleSubmit = async (e) => {

        await axios.put('http://localhost:3000/users/' + params.id, uData)
            .then(res => {
                console.log("Edit", res)
                navigate('/Table')
                if (res.statusText === 'OK') {
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
    }

    const convertDate = (date) => {
        return dayjs(date)
    }

    return (
        <Paper style={{ padding: 20 }}>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 0,
                    marginBottom: 30,
                }}
            >
                <h2>แก้ไขข้อมูล</h2>
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
                    onFinish={handleSubmit}
                    autoComplete="off"
                    initialValues={{ remember: true }}
                >
                    <Form.Item label='เลขประจำตัวประชาชน'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your idcard !',
                            },]}>
                        <Input type='text' name='idcard' value={uData.idcard}
                            onChange={(e) => setUData({
                                ...uData,
                                [e.target.name]: e.target.value
                            })}></Input>
                    </Form.Item>
                    <Form.Item label='ชื่อ - นามสกุล'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name !',
                            },]}>
                        <Input type='text' name='name' value={uData.name}
                            onChange={(e) => setUData({
                                ...uData,
                                [e.target.name]: e.target.value
                            })}></Input>
                    </Form.Item>
                    <Form.Item label='Name - Lastname'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username !',
                            },]}>
                        <Input type='text' name='username' value={uData.username}
                            onChange={(e) => setUData({
                                ...uData,
                                [e.target.name]: e.target.value
                            })}></Input>
                    </Form.Item>
                    <Form.Item label='เกิดวันที่'
                        rules={[
                            {
                                required: true,
                            },]}>
                        <DatePicker format={'YYYY-MM-DD'} name='birth'
                            value={convertDate(uData.birth)}
                            onChange={(e) => setUData({
                                ...uData, birth: e.format('YYYY-MM-DD')
                            })} />
                    </Form.Item>
                    <Form.Item label='ศาสนา'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your religion !',
                            },]}>
                        <Input type='text' name='religion' value={uData.religion}
                            onChange={(e) => setUData({
                                ...uData,
                                [e.target.name]: e.target.value
                            })}></Input>
                    </Form.Item>
                    <Form.Item label='ที่อยู่'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address !',
                            },]}>
                        <Input type='text' name='address' value={uData.address}
                            onChange={(e) => setUData({
                                ...uData,
                                [e.target.name]: e.target.value
                            })}></Input>
                    </Form.Item>
                    <Form.Item label='วันออกบัตร'
                        rules={[
                            {
                                required: true,
                            },]}>
                        <DatePicker format={'YYYY-MM-DD'} name='fcard'
                            value={convertDate(uData.fcard)}
                            onChange={(e) => setUData({
                                ...uData, fcard: e.format('YYYY-MM-DD')
                            })} />
                    </Form.Item>
                    <Form.Item label='วันบัตรหมดอายุ'
                        rules={[
                            {
                                required: true,
                            },]}>
                        <DatePicker format={'YYYY-MM-DD'} name='ocard'
                            value={convertDate(uData.ocard)}
                            onChange={(e) => setUData({
                                ...uData, ocard: e.format('YYYY-MM-DD')
                            })} />
                    </Form.Item>


                    <Button type="text" htmlType="submit" style={{ marginLeft: 310, width: 70, height: 70, background: "#e0e0e0" }}>
                        <CheckRoundedIcon /><br/>ตกลง</Button>

                    <Link to='/Table'>
                        <Button type="text" style={{ marginLeft: 30, width: 70, height: 70, background: "#e0e0e0" }}>
                            <ClearRoundedIcon/><br/>ยกเลิก</Button>
                    </Link>

                </Form>

            </div>
        </Paper>
    )
}
