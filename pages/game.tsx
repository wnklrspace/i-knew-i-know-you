import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  Layout,
  Section,
  Container
} from '../components/Website/Layout'
import { CardStack } from '../components/Game/Cards'
import { PlayersManager } from '../components/Game/Player'
import { Filter } from '../components/Game/Filter'
import { dummylist } from '../content/dummylist'
import { dummyplayer } from '../content/dummyplayer'
import game from '../styles/pages/game.module.scss'

const Game: NextPage = () => {
  const word = dummylist.questions.category[0].general[3]

  return (
    <div className={ game['game'] }>
      <Link href='./'>
        <a className={ game.logo }>
          I K I K Y
        </a>
      </Link>
      <Filter />
      <CardStack
        question={ word }
        firstPlayer={ dummyplayer[2].name }
        secondPlayer={ dummyplayer[3].name }
      />
      <PlayersManager
        players={ dummyplayer }
      />
    </div>
  )
}

export default Game
