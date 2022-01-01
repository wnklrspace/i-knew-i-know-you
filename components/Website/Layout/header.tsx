import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'
import {
  Layout,
  Section,
  Container
} from '.'
import styles from './styles.module.scss'


interface Props {
  backgroundColor?: string,
}

export const Header: React.FunctionComponent<Props> = (props) => {

  const {
    backgroundColor
  } = props

  return (
    <>
      <header className={ styles.header }>
        <Section hasBottom={ false }>
          <Container>
            <Link href='./'>
              <a>
                I K I K Y
              </a>
            </Link>
            <Link href='/support'>
              <a>
                Support
              </a>
            </Link>
            <Link href='/game'>
              <a>
                Play Game
              </a>
            </Link>
          </Container>
        </Section>
      </header>
    </>
  )
}
