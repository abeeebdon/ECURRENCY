import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
type Logos = {
  logos: string[]
  reviews: {
    text: string
    rating: number
    author: string
  }[]
  productReview: {
    src: string
    text: string
    rating: number
    author: string
  }[]
}
const Home = () => {
  const logo: Logos = {
    logos: ['google', 'forbes', 'bloomberg', 'sleep-review', 'influence'],
    reviews: [
      {
        text: 'Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.',
        rating: 5,
        author: 'CEO, Techbias',
      },
      {
        text: 'I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.',
        rating: 5,
        author: 'Eunice Oliver',
      },
    ],
    productReview: [
      {
        src: '',
        text: 'Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.',
        rating: 5,
        author: 'CEO, Techbias',
      },
    ],
  }
  const { logos, reviews } = logo
  return (
    <>
      <article className="relative mb-40">
        <img src="/images/hero-img.png" alt="hero" />
        <div className="absolute top-9">
          <p>We're here to help you</p>
          <h2>Relax & Rest</h2>
          <p>
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can get quality sleep.
          </p>
          <button>Visit Shop</button>
        </div>
        <div className="flex justify-between items-center w-[90%] mr-0 absolute top-[90%] bg-white p-4 rounded-lg flex-wrap  ">
          {logos.map((logo, index) => {
            return (
              <Fragment key={index}>
                <img
                  src={`/images/${logo}.png`}
                  alt={`${index}`}
                  className="w-full max-w-[222px] h-full max-h-[44px]"
                />
              </Fragment>
            )
          })}
        </div>
      </article>
      <section className="flex my-20 pt-10">
        <div>
          <p>Our Amazing Story</p>
          <h2>10k+Happy Customers</h2>
          <p>
            There’s no secret sauce, no wizard behind the curtain. What makes
            Aerolab tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </p>
          <Link to=""> Know more About us</Link>
        </div>
        <div>
          <p>
            I’m a very anxious person but use this and feel so relaxed and sleep
            way better now with the aid of sleepstiq.
          </p>
          <article>
            <img src="/images/miller.png" alt="miller" />
            <div>
              <h2>James Miller</h2>
              <p>CEO, Techbias</p>
            </div>
          </article>
        </div>
      </section>
      <section className="flex gap-4 mb-8">
        {reviews.map((review, index) => {
          const { rating, text, author } = review
          return (
            <div key={index} className="border bg-white rounded-lg">
              <p>{text}</p>
              <h2>{author}</h2>
              <p>{rating}</p>
            </div>
          )
        })}
      </section>
      <hr />
      <section className="flex my-8">
        <div>
          <img src="/images/product.png" alt="product" />
        </div>
        <div>
          <h2>Shop Now</h2>
          <p>
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <Button />
        </div>
      </section>
      <section className="flex gap-4">
        <div>
          <img src="/images/sleep.png" alt="sleep" />
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That's why we created products that aim to -
          </p>
        </div>
      </section>
      <section className="my-8">
        <h2>Visit Our Shop</h2>
        <p>
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Button />
      </section>
      <section>
        <h2>Product Reviews</h2>
        <div></div>
      </section>
    </>
  )
}

export default Home
