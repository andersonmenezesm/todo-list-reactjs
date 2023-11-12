import { useEffect, useState } from 'react';
import { Header } from './components/Header/index';
import { Tasks } from './components/Tasks';

const LOCAL_STORAGE_KEY = "todo:savedTasks"
export interface TaskProps {
  id: string
  title: string
  isDone: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  function setTasksAndSave(newTasks: TaskProps[]) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  function createNewTask(taskTitle: string) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isDone: false
      }
    ])
  }

  function changeTaskTitle(taskId: string, taskTitle: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          title: taskTitle,
        }
      }
      return task
    })
    setTasksAndSave(newTasks)
  } 

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasksAndSave(newTasks)
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
    setTasksAndSave(newTasks)
  }

  return (
    <>
      <Header onCreateNewTask={createNewTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onCompleted={toggleTaskCompletedById}
        onChangeTaskTitle={changeTaskTitle}
      />
    </>
  )
}