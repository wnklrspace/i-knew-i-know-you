import React from 'react'
import classNames from 'classnames'
import cards from './cards.module.scss'

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
  const cardClass = classNames(cards.card, {
    [cards['card--transparent']]: background === 'transparent',
    [cards['card--white']]: background === 'white',
    [cards['card--no-card-style']]: !isCard,
    [cards['card--justify-center']]: alignment === 'justifyCenter',
  });

  return (
    <div className={ cardClass }>
      { children }
    </div>
  )
}
