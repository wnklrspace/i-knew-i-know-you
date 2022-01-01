import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Row, Col } from 'reactstrap'
import {
  Layout,
  Section,
  Container
} from '../components/Website/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Section hasTop>
        <Container>
          <h1>
            I Knew I Know You
          </h1>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col md={ 8 }>
              <p>
                You can enjoy I Knew I Know You in many ways. Foremost you're able to
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default Home
