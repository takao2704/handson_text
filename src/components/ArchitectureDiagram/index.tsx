import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

type Props = {
  src?: string;
  alt?: string;
};

export default function ArchitectureDiagram({
  src = '/img/architecture/device-soracom-aws.svg',
  alt = 'IoTデバイスからSORACOMを経由してAWSへ連携する構成図',
}: Props): ReactNode {
  return (
    <figure className={styles.figure}>
      <img src={useBaseUrl(src)} alt={alt} />
    </figure>
  );
}
