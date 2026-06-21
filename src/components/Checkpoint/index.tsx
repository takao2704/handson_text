import type {ReactNode} from 'react';

import styles from './styles.module.css';

type Props = {
  title?: string;
  children: ReactNode;
};

export default function Checkpoint({title = '確認ポイント', children}: Props): ReactNode {
  return (
    <aside className={styles.checkpoint}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}
