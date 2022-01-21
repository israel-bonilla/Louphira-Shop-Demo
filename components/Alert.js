import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { alertsState } from '../atoms/alertAtom';
import styles from '../styles/Alert.module.scss'
import { CheckCircleIcon } from '@heroicons/react/solid';

const Alert = () => {
  const [alert, setAlert] = useRecoilState(alertsState);

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  }, [alert]);

  return (
    <>
      {alert && (
        <div className={styles.container}>
          <CheckCircleIcon className={styles.icon} />
          <span>Item(s) added to Cart</span>
        </div>
      )}
    </>
  )
}

export default Alert
