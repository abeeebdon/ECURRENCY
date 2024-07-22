import { Fragment, useState } from 'react'
import { data } from '../data/Data'
import { SearchIcon } from '../components/Icons'
const FAQs = () => {
  const { FAQs } = data
  const [showAns, setShowAns] = useState<{ [key: number]: boolean }>({})

  const handleShowAns = (id: number) => {
    setShowAns((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  return (
    <>
      <section className="bg-[#FBF9F2] h-[70vh] md:h-[596px] flex items-center">
        <article className="text-primary w-full p-4 max-w-[1109px] mx-auto">
          <p className="text-[16px] leading-[27px] mb-4">
            We're here to help you
          </p>
          <h2 className="heading"> How can we assist?</h2>
          <div className="flex items-center rounded-lg my-4 w-full max-w-[859px] border pl-10 bg-white">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search FAQs here"
              className="bg-transparent  w-full max-w-[800px]  p-4"
            />
          </div>
        </article>
      </section>
      <section className="flex flex-col sm:flex-row w-full heading-2 text-primary max-w-[1109px] mx-auto  gap-10 py-[50px] px-4">
        <div className=" flex flex-row sm:flex-col items-center gap-4 pt-4 w-full basis-[20%]">
          <h2 className=" font-bold">Sleepstiq Product</h2>
          <p className="my-6">Order</p>
          <p>Melantonin</p>
        </div>
        <div className="w-full max-w-[900px]">
          {FAQs.map((data) => {
            const { id, ans, qs } = data
            return (
              <Fragment key={id}>
                <p
                  onClick={() => handleShowAns(id)}
                  className={`cursor-pointer p-3 border-b-[1px]
                    ${id === 1 ? ' border-t-[1px]' : ''}`}
                >{`Q${id}: ${qs}`}</p>
                {showAns[id] && (
                  <p className="text-black text-[16px] leading-[24px] p-3">
                    {ans}
                  </p>
                )}
              </Fragment>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default FAQs
