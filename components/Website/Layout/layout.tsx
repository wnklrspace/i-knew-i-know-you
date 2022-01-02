import { Header } from '.'
import { Footer } from './footer'
import layout from './layout.module.scss'

interface Props {
  children: object,
  backgroundColor?: string,
}

export const Layout: React.FunctionComponent<Props> = (props) => {

  const {
    children,
    backgroundColor
  } = props;

  return (
    <>
      <Header />
        <main className={ layout.main }>
          { children }
        </main>
      <Footer />
    </>
  )
}
