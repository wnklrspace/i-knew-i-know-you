import type { NextPage } from 'next'
import Head from 'next/head'
import { Row, Col } from 'reactstrap'
import {
  Layout,
  Section,
  Container
} from '../components/Website/Layout'

const Idea: NextPage = () => {
  return (
    <>
      <Layout>
        <Section
          hasTop
          hasBottom={ false }
        >
          <Container>
            <Row>
              <Col>
                <h1>
                  The Idea
                </h1>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row>
              <Col md={ 8 }>
                <p>
                  Description goes here
                </p>
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default Idea
