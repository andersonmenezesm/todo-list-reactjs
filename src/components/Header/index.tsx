import { AiOutlinePlusCircle } from 'react-icons/ai';
import todoLogo from '../../assets/todo-logo.svg';

import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './header.module.scss';

interface Props {
  onCreateNewTask: (taskTitle: string) => void
}

export function Header({ onCreateNewTask }: Props) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onCreateNewTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
        />

        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
} 