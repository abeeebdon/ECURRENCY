import { NavLink } from 'react-router-dom'
const Nav = () => {
  type Props = { isActive: boolean }
  const activeState = (props: Props) => {
    const { isActive } = props
    return isActive ? { fontWeight: 700 } : { fontWeight: 400 }
  }
  return (
    <>
      <NavLink to="/" style={activeState}>
        Home
      </NavLink>
      <NavLink to="/about" style={activeState}>
        About
      </NavLink>
      <NavLink to="/shop" style={activeState}>
        Shop
      </NavLink>
      <NavLink to="/FAQs" style={activeState}>
        FAQs
      </NavLink>
    </>
  )
}

export default Nav
