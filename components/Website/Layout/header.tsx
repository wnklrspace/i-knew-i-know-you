import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'
import {
  Layout,
  Section,
  Container
} from '.'
import layout from './layout.module.scss'


interface Props {
  backgroundColor?: string,
}

export const Header: React.FunctionComponent<Props> = (props) => {

  const {
    backgroundColor
  } = props

  return (
    <>
      <header className={ layout.header }>
        <Section hasBottom={ false }>
          <Container>
            <div className={ layout.nav }>
              <Link href='./'>
                <a className='logo'>
                  I K<span>NEW</span> I K<span>NOW</span> Y<span>OU</span>
                </a>
              </Link>
              <ul>
                <li>
                  <Link href='/idea'>
                    <a>
                      Idea
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/support'>
                    <a>
                      Support
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/game'>
                    <a>
                      Play Game
                    </a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href='/profile'>
                    <a>
                      Log In
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/sign-up'>
                    <a>
                      Sign Up
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
        </Section>
      </header>
    </>
  )
}
