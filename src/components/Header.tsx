import { FaBars } from 'react-icons/fa'
import Nav from './Nav'
type Props = {
  showNav: boolean
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = (props: Props) => {
  const { showNav, setShowNav } = props
  return (
    <header className=" absolute top-0 left-0 right-0 p-4 z-20 ">
      <div className="w-full max-w-[1109px] mx-auto flex pb-4 justify-between sm:justify-start items-center gap-[20vw]">
        <div className="h-[61.99px] w-[91.97px]">
          <img src="/images/logo.png" alt="logo" className="w-full h-full" />
          <h2 className="text-primary font-bold text-[1.2rem]">Sleepstiq</h2>
        </div>
        <nav className="hidden sm:flex items-center justify-between gap-4 sm:gap-[8vw]">
          <Nav />
        </nav>
        <div className="sm:hidden" onClick={() => setShowNav(!showNav)}>
          <FaBars />
        </div>
      </div>
    </header>
  )
}

export default Header
