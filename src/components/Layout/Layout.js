import React from 'react'
import { Header } from '../Header'
import { Layout as LayoutExt } from '../../external_components'
import { TaskList } from '../../components/TaskList'
import { ProjectsPanel } from '../../components/ProjectsPanel'

const { Content } = LayoutExt

export const Layout = (props) => {
  return (
    <div>
      <LayoutExt>
        <Header />
        {props.children}
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
          <div>Create Toggle Component: My Project / All Projects</div>
          <ProjectsPanel />
        </Content>
      </LayoutExt>
    </div>
  )
}