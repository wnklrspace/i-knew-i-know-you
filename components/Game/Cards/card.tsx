import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

interface Props {
  background?: string,
  alignment?: string,
  isCard?: boolean,
  children: any,
}

export const Card: React.FunctionComponent<Props> = ({
  children,
  background,
  alignment = 'justifyCenter',
  isCard = true
}) => {
  const cardClass = classNames(styles.card, {
    [styles['card--transparent']]: background === 'transparent',
    [styles['card--white']]: background === 'white',
    [styles['card--no-card-style']]: !isCard,
    [styles['card--justify-center']]: alignment === 'justifyCenter',
  });

  return (
    <div className={ cardClass }>
      { children }
    </div>
  )
}
