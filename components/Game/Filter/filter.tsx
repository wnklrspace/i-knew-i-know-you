import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

interface Props {
  test?: string,
}

export const Filter: React.FunctionComponent<Props> = ({
  test
}) => {
  return (
    <div className={ styles['filter-container'] }>
      { test }
    </div>
  )
}
