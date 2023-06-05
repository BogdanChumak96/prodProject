/* eslint-disable @typescript-eslint/no-misused-promises */
import styles from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { classNames } from '../../../shared/lib/classNames/classNames'
import Button, { ThemeButton } from '../../../shared/ui/Button/Button'
interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = ({
  className
}: LanguageSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  const toggleLang = async (): Promise<void> => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
          className={classNames(styles.LanguageSwitcher, {}, [className])}
          theme={ThemeButton.CLEAR}
          onClick={toggleLang}
        >
          {t('Язык')}
      </Button>
  )
}
