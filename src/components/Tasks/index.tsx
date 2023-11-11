import { Task } from '../Task'
import styles from './tasks.module.scss'

export function Tasks() {
  return (
    <>
      <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Tarefas criadas</p>
            <span>10</span>
          </div>

          <div>
            <p className={styles.textPurple}>Concluídas</p>
            <span>2 de 10</span>
          </div>
        </header>

        <div className={styles.todoList}>
          <Task />
          <Task />
        </div>
      </section>
    </>
  )
}