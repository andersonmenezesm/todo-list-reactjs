import { useState } from 'react';
import { Header } from './components/Header/index';
import { Tasks } from './components/Tasks';

export interface TaskProps {
  id: string
  title: string
  isDone: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function createNewTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isDone: false
      }
    ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isDone: !task.isDone,
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <>
      <Header onCreateNewTask={createNewTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onCompleted={toggleTaskCompletedById}
      />
    </>
  )
}