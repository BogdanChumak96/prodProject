import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';
import { Layout } from '../../../components/Layout';

interface PageErrorProps {
  className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
    
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };

  return (
    <Layout>
      <div className={classNames(styles.PageError, {}, [className])}>
        {t('Произошла непредвидимая ошибка')}
        <button onClick={reloadPage}>{t('Обновить страницу')}</button>
      </div>
    </Layout>
  );
};

export default PageError;
