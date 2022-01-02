import React from 'react'
import classNames from 'classnames'
import styles from './player.module.scss'

interface Props {
  players: Array<Player>
}

interface Player {
  name: string
}

export const PlayersManager: React.FunctionComponent<Props> = ({
  players
}) => {
  const managerClass = classNames(styles['players-manager'], {
  });

  return (
    <div className={ managerClass }>
      <div className={ styles['players-manager__head'] }>
        <h3>
          Players
        </h3>
        <p className={ styles['players-manager__head__count'] }>
          { players ? players.length : 0 }
        </p>
      </div>
      <div className={ styles['players-manager__body'] }>
        { players ? players.map(player => {(
          <div className={ styles['players-manager__person'] }>
            <p className={ styles['players-manager__person__title'] }>
              { player.name }
            </p>
          </div>
        )}) : (
          <p>No Players</p>
        )}
      </div>
    </div>
  )
}
