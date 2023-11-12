import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './input.module.scss'

interface Props {
  onChangeTitleTask: (taskTitle: string) => void
}

export function Input({ onChangeTitleTask }: Props) {
  const [title, setTitle] = useState('')

  function handleChangeSubmit(event: FormEvent) {
    event.preventDefault()

    onChangeTitleTask(title)
    setTitle('')
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.newTaskForm} onSubmit={handleChangeSubmit}>
        <input
          placeholder="Edite sua tarefa"
          onChange={onChangeTitle}
          value={title}
        />
      </form>
    </div>
  )
}
