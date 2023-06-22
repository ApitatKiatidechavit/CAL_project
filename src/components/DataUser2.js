import React from 'react'
import { Button, Form, Select, Space } from 'antd';

import { TbArrowBack } from 'react-icons/tb'
import { GrFormNextLink } from 'react-icons/gr'
import { BiSave } from 'react-icons/bi'
import { IoIosHome } from 'react-icons/io'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom';
import FormItem from 'antd/es/form/FormItem';


export default function DataUser2() {

    const handleChange = (value) => {

    };

    return (
        <Paper style={{ padding: 20 }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 0,
                    marginBottom: 30,
                }}>
                <h2>DataUser2</h2>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 12,
                    }}
                    style={{
                        width: '50em'
                    }}
                // form={form} 
                // onFinish={handleSubmit}
                // autoComplete="off"  
                // initialValues={{remember: true}}
                >
                    <FormItem label='ประเภทลูกค้า'>
                    <Space wrap>
                        <Select
                            defaultValue="data1"
                            style={{
                                width: 200,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'data1',
                                    label: 'ผู้เช่ารถ',
                                },
                                {
                                    value: 'data2',
                                    label: 'เทส',
                                },
                            ]}
                        />
                    </Space>
                    </FormItem>

                    <FormItem label='ประเภทสินค้า'>
                    <Space wrap>
                        <Select
                            defaultValue="car"
                            style={{
                                width: 200,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'car',
                                    label: 'รถ',
                                },
                                {
                                    value: 'home',
                                    label: 'บ้าน',
                                },
                            ]}
                        />
                    </Space>
                    </FormItem>

                    <FormItem label='ยี่ห้อ'>
                    <Space wrap>
                        <Select
                            defaultValue="benz"
                            style={{
                                width: 200,
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'benz',
                                    label: 'BENZ',
                                },
                                {
                                    value: 'toyota',
                                    label: 'TOYOTA',
                                },
                            ]}
                        />
                    </Space>
                    </FormItem>

                    <Link to='/Page1'>
                        <Button type="text" shape="circle" size='large' style={{ marginRight: 200, background: '#ffec3d' }}>
                            <TbArrowBack size={28} /></Button>
                    </Link>

                    <Button type="text" htmlType="submit" style={{ marginLeft: 30, width: 70, height: 70, background: "#e0e0e0" }} >
                        <BiSave size={35} /><br />SAVE</Button>

                    <Link to='/'>
                        <Button type="text" style={{ marginLeft: 30, width: 70, height: 70, background: "#e0e0e0" }}>
                            <IoIosHome size={35} /><br />HOME</Button>
                    </Link>

                    <Link to=''>
                        <Button type="text" shape="circle" size='large' style={{ marginLeft: 200, background: '#ffec3d' }}>
                            <GrFormNextLink size={28} /></Button>
                    </Link>

                </Form>
            </div>
        </Paper>
    )
}
