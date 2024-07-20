type Props = { text: string }
const Button = (props: Props) => {
  const { text } = props
  return (
    <>
      <button className="bg-[#FC5959] w-[225px] h-[50px] text-white rounded-md">
        {text}
      </button>
    </>
  )
}

export default Button
