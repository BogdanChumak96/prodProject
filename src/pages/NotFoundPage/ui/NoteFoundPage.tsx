import { useTranslation } from 'react-i18next';
import styles from './NoteFoundPage.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Layout } from '../../../components/Layout';

interface NoteFoundPageProps {
  className?: string;
}

const NoteFoundPage = ({ className }: NoteFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className={classNames(styles.Button, {}, [className])}>
        {t('Note Found Page')}
      </div>
    </Layout>
  );
};

export default NoteFoundPage;
