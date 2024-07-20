import { NavLink } from 'react-router-dom'
const Nav = () => {
  type Props = { isActive: boolean }
  const activeState = (props: Props) => {
    const { isActive } = props
    return isActive ? { fontWeight: 700 } : { fontWeight: 400 }
  }
  return (
    <>
      <NavLink
        to="/"
        style={activeState}
        className="text-[18px] leading-[27px]"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={activeState}
        className="text-[18px] leading-[27px]"
      >
        About
      </NavLink>
      <NavLink
        to="/shop"
        style={activeState}
        className="text-[18px] leading-[27px]"
      >
        Shop
      </NavLink>
      <NavLink
        to="/FAQs"
        style={activeState}
        className="text-[18px] leading-[27px]"
      >
        FAQs
      </NavLink>
    </>
  )
}

export default Nav
