import React from 'react'
import classNames from 'classnames'
import cards from './cards.module.scss'

interface Props {
  question?: string,
  firstPlayer?: string,
  secondPlayer?: string,
}

export const CardStack: React.FunctionComponent<Props> = ({
  question,
  firstPlayer,
  secondPlayer
}) => {
  const cardClass = classNames(cards.cardstack);
  const firstPlayerClass = classNames(
    cards['cardstack__player'],
    cards['cardstack__player--first']
  );
  const secondPlayerClass = classNames(
    cards['cardstack__player'],
    cards['cardstack__player--second']
  );

  return (
    <div className={ cardClass }>
      <div className={ cards['cardstack__controls'] }>
        <div className={ firstPlayerClass }>
          { firstPlayer }
        </div>
        <div className={ cards['cardstack__question'] }>
          <span className={ secondPlayerClass }>
            { secondPlayer }
          </span>
          { question }
        </div>
      </div>
      <div className={ cards['cardstack__card'] } />
      <div className={ cards['cardstack__card'] } />
      <div className={ cards['cardstack__card'] } />
      <div className={ cards['cardstack__card'] } />
      <div className={ cards['cardstack__card'] } />
      <div className={ cards['cardstack__card'] } />
      <div className={ cards['cardstack__card'] } />
    </div>
  )
}
