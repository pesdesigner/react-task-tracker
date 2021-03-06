import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {

  const [tasks, setTasks] = useState(
    [
        {
          "id": 1,
          "text": "Doctors Appointment",
          "day": "Feb 5th at 2:30pm",
          "reminder": true
        },
        {
          "id": 2,
          "text": "Meeting at School",
          "day": "Feb 6th at 1:30am",
          "reminder": true
        },
        {
          "id": 3,
          "text": "Food Shopping",
          "day": "Oct 4th at 9:30pm",
          "reminder": false,
        }
      ]
)
// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

return (
    <div className="container">
        <Header/>
        <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        />
    </div>
  );
}

export default App;

/* class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}
export default App */