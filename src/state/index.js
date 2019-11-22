import {setGlobal} from 'reactn'

setGlobal({
  user: null,
  projects: ['Christian', 'Hafiz'], // This is a test
  tasks: [],
  currentProject: null
})

export {useGlobal, resetGlobal} from 'reactn'