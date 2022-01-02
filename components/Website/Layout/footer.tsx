import Link from 'next/link'
import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { Section, Container } from '.'
import layout from './layout.module.scss'
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
        <Section>
          <Container>
            <Row>
              <Col md={ 3 }>
                <Link href='./'>
                  <a>
                    I K I K Y
                  </a>
                </Link>
              </Col>
              <Col md={ 3 }>
                <ul>
                  <li>
                    <Link href='/support'>
                      <a>
                        Support
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={ 3 }></Col>
              <Col md={ 3 }>
                <ul>
                  <li>
                    <Link href='#'>
                      <a>
                        Credits
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>
                        Idea
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Section>
      </footer>
    </>
  )
}
