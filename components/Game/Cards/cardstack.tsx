import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

interface Props {
  question?: string,
}

export const CardStack: React.FunctionComponent<Props> = ({
  question
}) => {
  const cardClass = classNames(styles.cardstack);
  return (
    <div className={ cardClass }>
      <div className={ styles['cardstack__question'] }>
        { question }
      </div>
      <div className={ styles['cardstack__card'] } />
      <div className={ styles['cardstack__card'] } />
      <div className={ styles['cardstack__card'] } />
      <div className={ styles['cardstack__card'] } />
      <div className={ styles['cardstack__card'] } />
      <div className={ styles['cardstack__card'] } />
      <div className={ styles['cardstack__card'] } />
    </div>
  )
}
