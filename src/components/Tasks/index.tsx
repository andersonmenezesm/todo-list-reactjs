import { TbClipboardText } from 'react-icons/tb'
import { TaskProps } from '../../App'
import { Input } from '../Input'
import { Task } from '../Task'
import styles from './tasks.module.scss'

interface Props {
  tasks: TaskProps[],
  onDelete: (taskId: string) => void
  onCompleted: (taskId: string) => void
  onChangeTaskTitle: (taskId: string) => void
}

export function Tasks({ tasks, onDelete, onCompleted, onChangeTaskTitle }: Props) {
  const taskQuantity = tasks.length
  const doneTasks = tasks.filter(task => task.isDone).length;

  const isChangeTaskInput = false

  return (
    <>
      <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>{taskQuantity}</span>
          </div>

          <div>
            <p className={styles.textPurple}>Concluídas</p>
            <span>{doneTasks} de {taskQuantity}</span>
          </div>
        </header>

        <div className={styles.todoList}>
          {tasks.map(task => (
            !isChangeTaskInput ? 
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onCompleted={onCompleted}
              onChangeTaskTitle={onChangeTaskTitle}
            /> : <Input />
          ))}

          {tasks.length <= 0 && (
            <section className={styles.empty}>
              <TbClipboardText size={50} />
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </section>
          )}
        </div>
      </section> 
    </>
  )
}