import { useTranslation } from 'react-i18next';
import { Layout } from '../../../components/Layout';
import { useEffect } from 'react';
import React from 'react';

const MainPage = () => {
  const { t } = useTranslation('main');

  return <Layout>{t('Главная страница')}</Layout>;
};
export default MainPage;
