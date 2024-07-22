import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { data } from '../data/Data'
import { FaCaretRight } from 'react-icons/fa'

const Home = () => {
  const { logos, reviews, productReview } = data
  return (
    <>
      <article className="relative mb-40 w-full max-w-[1449px] mx-auto">
        <img
          src="/images/hero-img.png"
          alt="hero"
          className="h-[60vh] md:h-[811px] max-h-[811px] w-full"
        />
        <div className="absolute top-[150px] left-6 xl:left-[10rem] text-primary">
          <p className="paragraph ">We're here to help you</p>
          <h2 className=" text-[48px] leading-[50px] md:text-[60px] font-bold md:leading-[74px] my-4">
            Relax & Rest
          </h2>
          <p className="paragraph w-[70%]">
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can get quality sleep.
          </p>
          <div className="mt-4">
            <Button text="Visit Shop" />
          </div>
        </div>
        <div className="flex justify-evenly gap-4 items-center w-full md:w-[90%] mt-6 shadow-2xl md:absolute top-[92%] right-3 bg-white p-6 py-10 flex-wrap">
          {logos.map((logo, index) => {
            return (
              <Fragment key={index}>
                <img
                  src={`/images/${logo}.png`}
                  alt={`${index}`}
                  className="md:w-[15vw]  w-[100px] h-full max-h-[44px]"
                />
              </Fragment>
            )
          })}
        </div>
      </article>
      <section className="flex flex-col md:flex-row gap-8 justify-between my-20 pt-10 w-full max-w-[1109px] mx-auto p-4">
        <div className="w-full max-w-[475px] text-primary mx-auto text-center md:text-left">
          <p className="text-[14px] leading-[21px] ">Our Amazing Story</p>
          <h2 className="text-[36px] leading-[46px] font-bold my-6">
            10k+Happy Customers
          </h2>
          <p className="text-[#21384299] paragraph my-8">
            There’s no secret sauce, no wizard behind the curtain. What makes
            Aerolab tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </p>
          <Link to="" className="font-bold paragraph-2 flex items-center">
            <FaCaretRight /> Know more About us
          </Link>
        </div>
        <div className="text-[#4D533C] w-full py-10 pl-10 max-w-[475px] shadow-2xl bg-[#FBF9F2] mx-auto">
          <p className="text-[24px] leading-[40px] py-6 italic">
            I’m a very anxious person but use this and feel so relaxed and sleep
            way better now with the aid of sleepstiq.
          </p>
          <article className="mt-8 flex gap-6 items-center">
            <img src="/images/miller.png" alt="miller" />
            <div>
              <h2 className="text-[22px] leading-[33px] font-bold">
                James Miller
              </h2>
              <p className="text-[#152934] paragraph-2">CEO, Techbias</p>
            </div>
          </article>
        </div>
      </section>
      <section className="flex flex-col p-4 xs:flex-row overflow-auto gap-8 mt-8 scroll w-full max-w-[1109px] mx-auto">
        {reviews.map((review, index) => {
          const { text, author } = review
          return (
            <div
              key={index}
              className="border my-4 xs:my-0 bg-white rounded-lg w-full max-w-[306px] min-w-[300px]  p-6 py-10 mx-auto"
            >
              <p className="italic paragraph h-[110px] sm:h-[90px]">{text}</p>
              <h2 className="mt-6 paragraph-2 font-bold mb-2">{author}</h2>
              <div className="flex gap-2 items-center">
                <img src="/images/Star.png" alt="star" />
                <img src="/images/Star.png" alt="star" />
                <img src="/images/Star.png" alt="star" />
                <img src="/images/Star.png" alt="star" />
                <img src="/images/Star.png" alt="star" />
              </div>
            </div>
          )
        })}
      </section>
      <hr className="w-full max-w-[1109px] mx-auto" />
      <section className="flex flex-col md:flex-row  justify-between gap-4 my-8 py-8 w-full max-w-[1109px] mx-auto items-center">
        <div className="w-full max-w-[800px] h-[694px] relative">
          <img
            src="/images/product.png"
            alt="product"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 right-2 p-6 text-[#4D533C] paragraph bg-white shadow-2xl rounded-lg">
            <p>😊 Promotes calm and relaxation.</p>
            <p>💤 Inhalation allows for a rapid effect.</p>
            <p>
              ✅ 100% drug-free, plant-based ingredients.<p>‍⚕️ 3rd-party</p>
            </p>
            <p>lab tested.</p>
          </div>
        </div>
        <div className="w-full max-w-[474px] text-primary text-center mt-[50px]">
          <h2 className="heading">Shop Now</h2>
          <p className="text-[#21384299] paragraph my-4">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <Button text="Visit Shop" />
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-[1109px] mx-auto my-16 py-16 p-4">
        <div className="text-[#21384299] w-full max-w-[475px]">
          <h2 className="text-primary heading text-center md:text-left">
            Our Mission
          </h2>
          <p className="paragraph my-4">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That's why we created products that aim to -
          </p>
          <div className="mt-4">
            <p>✓ Promote Calm </p>
            <p> ✓ Support Sleep </p> <p>✓ Reduce Stress</p>
            <p>✓ Aid Relaxation</p>
          </div>
        </div>
        <div className="h-[550px] w-full max-w-[500px]">
          <img src="/images/sleep.png" alt="sleep" className="w-full h-full" />
        </div>
      </section>
      <section className="my-[100px] py-[50px] w-full max-w-[1109px] mx-auto text-center px-4">
        <h2 className="text-primary text-[36px] leading-[74px] font-bold">
          Visit Our Shop
        </h2>
        <p className="my-4 paragraph text-[#21384299]">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Button text="Visit Shop" />
      </section>
      <hr />
      <section className="my-[100px] w-full max-w-[1109px] mx-auto mb-24">
        <h2 className="text-[#4D533C] font-bold text-[36px] leading-[46px] px-4">
          Product Reviews
        </h2>
        <div className=" flex flex-col p-4 xs:flex-row overflow-auto gap-8 mt-8 shadow-2xl scroll">
          {productReview.map((data, index) => {
            const { src, text, author } = data
            return (
              <div
                className="w-full max-w-[306px] min-w-[300px]  rounded-lg  bg-white border text-[#4D533C] mx-auto"
                key={index}
              >
                <img src={`/images/${src}.png`} alt="index" />
                <div className="p-6">
                  <p className="paragraph  italic mb-5 h-[110px] sm:h-[90px]">
                    {text}
                  </p>
                  <h2 className="paragraph-2  font-bold">{author}</h2>
                  <div className="flex gap-2 items-center mt-2">
                    <img src="/images/Star.png" alt="star" />
                    <img src="/images/Star.png" alt="star" />
                    <img src="/images/Star.png" alt="star" />
                    <img src="/images/Star.png" alt="star" />
                    <img src="/images/Star.png" alt="star" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Home
