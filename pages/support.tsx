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
        <Section
          hasTop
          hasBottom={ false }
        >
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
        <Section>
          <Container>
            <Row>
              <Col md={ 8 }>
                <p>
                  With this project we want to support ...
                  You can pay any amount that you can afford, starting at 1€ and help families and children who cannot afford
                  technological devices for their education easily.
                  In exchange you will not only be helping those people, you will get the premium version of IKIKY, featuring not only more cards and
                  questions but also the downloadable and printable PDF edition 'I'd rather not spend more time in front of a screen'.
                  <br /><br />
                  In order to get the premium version you have to create an account. We accept paypal, credit card and even bitcoins.
                  <br /><br />
                  If you don't want the premium version with account and all but still want to support the organization you can do it directly here.
                </p>
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    </>
  )
}

export default Support
