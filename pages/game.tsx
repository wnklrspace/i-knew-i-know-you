import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  Layout,
  Section,
  Container
} from '../components/Website/Layout'
import { CardStack } from '../components/Game/Cards'
import { DATA } from '../content/dummylist'
import game from '../styles/pages/game.module.scss'

const Game: NextPage = () => {

  const word = DATA.questions.category[0].general[3]

  return (
    <div className={ game['game'] }>
      <CardStack
        question={ word }
      />
    </div>
  )
}

export default Game
