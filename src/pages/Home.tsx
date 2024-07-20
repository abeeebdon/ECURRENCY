import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { data } from '../data/Data'

const Home = () => {
  const { logos, reviews } = data
  return (
    <>
      <article className="relative mb-40 w-full max-w-[1449px] mx-auto">
        <img src="/images/hero-img.png" alt="hero" />
        <div className="absolute top-[150px] left-6 xl:left-[10rem] text-primary">
          <p className="paragraph ">We're here to help you</p>
          <h2 className="text-[60px] font-bold leading-[74px] my-4">
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
        <div className="flex justify-evenly gap-4 items-center w-[90%] shadow-2xl absolute top-[92%] right-3 bg-white p-6 py-10">
          {logos.map((logo, index) => {
            return (
              <Fragment key={index}>
                <img
                  src={`/images/${logo}.png`}
                  alt={`${index}`}
                  className="w-full max-w-[200px] h-full max-h-[44px]"
                />
              </Fragment>
            )
          })}
        </div>
      </article>
      <section className="flex gap-8 justify-between my-20 pt-10 w-full max-w-[1109px] mx-auto">
        <div className="w-full max-w-[475px] text-primary">
          <p className="text-[14px] leading-[21px] ">Our Amazing Story</p>
          <h2 className="text-[36px] leading-[46px] font-bold my-6">
            10k+Happy Customers
          </h2>
          <p className="text-[#21384299] paragraph my-8">
            There’s no secret sauce, no wizard behind the curtain. What makes
            Aerolab tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </p>
          <Link to="" className="font-bold paragraph-2">
            Know more About us
          </Link>
        </div>
        <div className="text-[#4D533C] w-full py-10 pl-10 max-w-[475px] shadow-2xl bg-[#FBF9F2]">
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
      <section className="flex gap-4 mb-8 w-full max-w-[1109px] mx-auto text-[#4D533C]">
        {reviews.map((review, index) => {
          const { rating, text, author } = review
          return (
            <div
              key={index}
              className="border bg-white rounded-lg w-full max-w-[306px] p-6"
            >
              <p className="italic paragraph h-[78px]">{text}</p>
              <h2 className="mt-6 paragraph-2 font-bold mb-2">{author}</h2>
              <p>{rating}</p>
            </div>
          )
        })}
      </section>
      <hr className="w-full max-w-[1109px] mx-auto" />
      <section className="flex justify-between gap-4 my-8 w-full max-w-[1109px] mx-auto items-center">
        <div className="w-full max-w-[800px] h-[694px] relative">
          <img
            src="/images/product.png"
            alt="product"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 right-0 p-6 text-[#4D533C] paragraph bg-white shadow-2xl rounded-lg">
            <p>😊 Promotes calm and relaxation.</p>
            <p>💤 Inhalation allows for a rapid effect.</p>
            <p>
              ✅ 100% drug-free, plant-based ingredients.<p>‍⚕️ 3rd-party</p>
            </p>
            <p>lab tested.</p>
          </div>
        </div>
        <div className="w-full max-w-[474px] text-primary">
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
      <section className="flex justify-between items-center gap-8 w-full max-w-[1109px] mx-auto py-8">
        <div className="text-[#21384299] w-full max-w-[475px]">
          <h2 className="text-primary heading">Our Mission</h2>
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
        <div className="h-[550px] w-full max-w-[735px]">
          <img src="/images/sleep.png" alt="sleep" className="w-full h-full" />
        </div>
      </section>
      <section className="my-16 w-full max-w-[1109px] mx-auto text-center">
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
      <section className="my-8">
        <h2 className="text-[#4D533C] font-bold text-[36px] leading-[46px]">
          Product Reviews
        </h2>
        <div></div>
      </section>
    </>
  )
}

export default Home
