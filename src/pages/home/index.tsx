import { Form, Input, Select, Tooltip, Button, DatePicker } from 'antd';
import React, { useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router';

const { Option } = Select;

const Demo:React.FC<RouteComponentProps> = (props) => {
    const onFinish = (values: any) => {
        if(values){
            props.history.push("/done")
        }
    };

    return (
        <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Form.Item label="1,员工号">
                <Form.Item
                    name="stuffId"
                    noStyle
                    rules={[{ len: 7, message: "请输入7位员工号" }, { required: true, message: '请输入7位员工号' }]}
                >
                    <Input placeholder="请输入7位员工号" />

                </Form.Item>
            </Form.Item>
            {/* <Tooltip title="Useful information">
          <a href="#API" style={{ margin: '0 8px' }}>
            Need Help?
          </a>
        </Tooltip> */}
            <Form.Item label="2,员工姓名">
                <Form.Item
                    name="username"
                    noStyle
                    rules={[{ max: 4, message: "请输入员工姓名" }, { required: true, message: '请输入员工姓名' }, { type: 'string', message: '请输入员工姓名' }]}
                >
                    <Input placeholder="请输入员工姓名" />

                </Form.Item>
            </Form.Item>
            <Form.Item label="3,所属区域">
                <Form.Item
                    name="area"
                    noStyle
                    rules={[{ required: true, message: '请选择所属区域' }]}
                >
                    <Select>
                        <Select.Option value="东北">东北</Select.Option>
                        <Select.Option value="华北">华北</Select.Option>
                        <Select.Option value="华东">华东</Select.Option>
                        <Select.Option value="华南">华南</Select.Option>
                        <Select.Option value="东南">东南</Select.Option>
                        <Select.Option value="西南">西南</Select.Option>
                        <Select.Option value="西北">西北</Select.Option>
                        <Select.Option value="华中">华中</Select.Option>
                    </Select>
                </Form.Item>
            </Form.Item>
            <Form.Item label="4,所属部门">
                <Form.Item
                    name="department"
                    noStyle
                    rules={[{ max: 4, message: "请正确输入" }, { required: true, message: "请正确输入" }]}
                >
                    <Input placeholder="请输入所属部门" />

                </Form.Item>
            </Form.Item>
            <Form.Item label="5,体温">
                <Form.Item
                    name="temperature"
                    noStyle
                    rules={[{ type: 'string', message: "请输入正确体温" }, { max: 4, message: "请输入正确体温" }, { required: true, message: "请输入正确体温" }]}
                >
                    <Input placeholder="请输入正确体温" />
                </Form.Item>
            </Form.Item>
            <Form.Item label="6,上传日期">
                <Form.Item
                    name="date"
                    noStyle
                >
                    <DatePicker></DatePicker>

                </Form.Item>
            </Form.Item>

            <Form.Item label=" " colon={false}>
                <Button type="primary" htmlType="submit" style={{ width: 375 }}>
                    提交
        </Button>
            </Form.Item>
        </Form>
    );
};

export default withRouter(Demo)