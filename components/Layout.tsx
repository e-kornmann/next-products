
import Link from 'next/link'
import { ReactNode } from 'react'
import Image from 'next/image'


type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps ) => {
  return (
    <div className="layout">
      <header>
        <Link href="/">

        <Image src="/casio.svg" width="300" height="200" alt="" />
         
        </Link>
     


      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>GENESIS</p>
      </footer>
    </div>
  )
}
export default Layout;
