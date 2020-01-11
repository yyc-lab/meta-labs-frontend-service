import React from 'react'
// import { Task } from '../Task'
import { Table } from '../../external_components'

const columns = [
  {
    title: 'Project Name',
    dataIndex: 'projectName',
    sorter: (a, b) => a.projectName.localeCompare(b.projectName),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Issue',
    dataIndex: 'issue',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.issue.localeCompare(b.issue),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    filters: [
      {
        text: 'To Do',
        value: 'To Do',
      },
      {
        text: 'In Review',
        value: 'In Review',
      },
      {
        text: 'In Progress',
        value: 'In Progress',
      },
      {
        text: 'Complete',
        value: 'Complete',
      },
    ],
    filterMultiple: true,
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    sorter: (a, b) => a.status.localeCompare(b.status),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Due Date',
    dataIndex: 'dueDate',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.dueDate.localeCompare(b.dueDate),
  }
]

const data = [
  {
    key: '1',
    projectName: 'Meta Labs',
    issue: 'Wireframes for Login Page',
    status: 'In Review',
    dueDate: '01/16/2020'
  },
  {
    key: '2',
    projectName: 'Meta Labs',
    issue: 'Wireframes for List Page',
    status: 'In Progress',
    dueDate: '02/16/2020'
  },
  {
    key: '3',
    projectName: 'Meta Labs',
    issue: 'Wireframes for Project Description Page',
    status: 'To Do',
    dueDate: '01/09/2020'
  },
  {
    key: '4',
    projectName: 'Meta Labs',
    issue: 'Scaffold Web GUI',
    status: 'Complete',
    dueDate: '01/30/2020'
  },
  {
    key: '5',
    projectName: 'Other Project',
    issue: 'An Issue That Must Be Solved',
    status: 'To Do',
    dueDate: '02/03/2020'
  }
]

function onChange(filters, sorter, extra) {
  console.log('params', filters, sorter, extra);
}

// Did we want a separate tasks page?
export const TaskList = function () {
  return (
    <div>
      <h3>Tasks Due Soon</h3>
      <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} />
      <a href="/tasks">View More</a>
    </div>
  )
}
