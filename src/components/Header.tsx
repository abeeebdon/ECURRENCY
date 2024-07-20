import { FaBars } from 'react-icons/fa'
import Nav from './Nav'
type Props = {
  showNav: boolean
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = (props: Props) => {
  const { showNav, setShowNav } = props
  return (
    <header className="flex justify-between sm:justify-start items-center gap-[20vw] fixed top-0 left-0 right-0 p-4 bg-white z-20">
      <div className="">
        <img src="/images/logo.png" alt="logo" />
        <h2>sleepstiq</h2>
      </div>
      <nav className="hidden sm:flex items-center justify-between gap-4 sm:gap-[8vw] ">
        <Nav />
      </nav>
      <div className="sm:hidden" onClick={() => setShowNav(!showNav)}>
        <FaBars />
      </div>
    </header>
  )
}

export default Header
