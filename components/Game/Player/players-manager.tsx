import React from 'react'
import classNames from 'classnames'
import manager from './styles.module.scss'

interface Props {
  players: Array<Player>
}

interface Player {
  name: string
}

export const PlayersManager: React.FunctionComponent<Props> = ({
  players
}) => {
  const managerClass = classNames(manager['players-manager'], {
  });

  return (
    <div className={ managerClass }>
      <div className={ manager['players-manager__head'] }>
        <h3>
          Players
        </h3>
        <p className={ manager['players-manager__head__count'] }>
          { players ? players.length : 0 }
        </p>
      </div>
      <div className={ manager['players-manager__body'] }>
        { players ? players.map(player => {(
          <div className={ manager['players-manager__person'] }>
            <p className={ manager['players-manager__person__title'] }>
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
