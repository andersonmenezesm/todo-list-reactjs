import { TbClipboardText } from 'react-icons/tb'
import { TaskProps } from '../../App'
import { Task } from '../Task'
import styles from './tasks.module.scss'

interface Props {
  tasks: TaskProps[],
  onDelete: (taskId: string) => void
  onCompleted: (taskId: string) => void
}

export function Tasks({ tasks, onDelete, onCompleted }: Props) {
  const taskQuantity = tasks.length
  const doneTasks = tasks.filter(task => task.isDone).length;

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
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onCompleted={onCompleted}
            />
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