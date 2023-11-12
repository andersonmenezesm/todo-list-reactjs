import { BsFillCheckCircleFill, BsFillPencilFill } from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'
import { TaskProps } from '../../App'
import styles from './task.module.scss'

interface Props {
  task: TaskProps,
  onDelete: (taskId: string) => void 
  onCompleted: (taskId: string) => void
  onChangeTaskTitle: (taskId: string) => void
}

export function Task({ task, onDelete, onCompleted, onChangeTaskTitle }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onCompleted(task.id)}>
        {task.isDone ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isDone ? styles.taskCompleted : ''}>{task.title}</p>

      <div className={styles.actionsTask}>
        <button onClick={() => onChangeTaskTitle(task.id)}>
          <BsFillPencilFill size={16} />
        </button>
        <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
          <TbTrash size={20} />
        </button>
      </div>
    </div>
  )
}