import type {ReactNode} from 'react';

import styles from './styles.module.css';

type Props = {
  title?: string;
  children: ReactNode;
};

export default function WarningBox({title = '注意', children}: Props): ReactNode {
  return (
    <aside className={styles.warning}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}
