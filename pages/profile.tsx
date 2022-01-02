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
import profile from '../styles/pages/profile.module.scss'

const Profile: NextPage = () => {
  return (
    <Layout>
      <Section
        hasTop
        hasBottom={ false }
      >
        <Container>
          <Row>
            <Col>
              <h1>
                Profile
              </h1>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default Profile
