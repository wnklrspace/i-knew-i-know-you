import type { NextPage } from 'next'
import Head from 'next/head'
import { Row, Col } from 'reactstrap'
import {
  Layout,
  Section,
  Container
} from '../components/Website/Layout'

const Support: NextPage = () => {
  return (
    <>
      <Layout>
        <Section hasTop>
          <Container>
            <Row>
              <Col>
                <h1>
                  Support
                </h1>
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default Support
