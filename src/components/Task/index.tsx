import { TbTrash } from 'react-icons/tb'
import styles from './task.module.scss'

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quis possimus, perspiciatis illum labore adipisci
      </p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}