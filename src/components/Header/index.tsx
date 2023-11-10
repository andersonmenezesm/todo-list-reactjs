import todoLogo from '../../assets/todo-logo.svg';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form className={styles.newTaskForm}>
        <input placeholder="Adicione uma nova tarefa" />
        <button>Criar</button>
      </form>
    </header>
  )
} 