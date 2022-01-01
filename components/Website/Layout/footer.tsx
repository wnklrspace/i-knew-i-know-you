import Link from 'next/link'
import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { Section, Container } from '.'
import styles from './styles.module.scss'
interface Props {
  backgroundColor?: string,
}

export const Footer: React.FunctionComponent<Props> = (props) => {

  const {
    backgroundColor
  } = props

  return (
    <>
      <footer>
        <Section hasBottom={ false }>
          <Container>
            <Link href='./'>
              <a>
                I K I K Y
              </a>
            </Link>
          </Container>
        </Section>
      </footer>
    </>
  )
}
