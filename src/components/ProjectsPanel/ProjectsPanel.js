import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { Card, Row, Col } from '../../external_components'

export const ProjectsPanel = (props) => {
  const [projectRedirect, setProjectRedirect] = useState(false)

  const clickCreateProject = () => {
    setProjectRedirect(true)
  }

  if(projectRedirect) {
    return <Redirect to="/new" />
  }

  return (
    <div style={{ background: '#ECECEC', padding: '15px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card onClick={clickCreateProject} title="New Project" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Meta Labs Project" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Other Project" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
      <a href="/tasks">View More</a>
    </div>
  )
}