import React from 'react'
import {TaskList} from '../../components/TaskList'
import '../../index.css'
import 'antd/dist/antd.css'
import { Layout, Row, Col } from 'antd'

const { Header, Footer, Content } = Layout

export const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content           
          style={{
            background: '#fff',
            padding: 24,
            paddingLeft: 60,
            paddingRight: 60,
            margin: 0,
            minHeight: 280,
          }}>
          <TaskList />
          <Row>
            <Col span={8}>New Project +</Col>
            <Col span={8}>Meta Labs Project</Col>
            <Col span={8}>Other Project</Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}


/*
Components
- TaskList
- Tasks
- ProjectToggle
- NewProject
- Projects
- Project
*/
