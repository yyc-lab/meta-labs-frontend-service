import React from 'react'

import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

export const NewProject = () => {
  return (
    <div>
      <Form>
        <Form.Item label="Project Name">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}