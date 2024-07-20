import Button from '../components/Button'
import { data } from '../data/Data'

const Shop = () => {
  const { reviews } = data

  return (
    <>
      <section>
        <article className="relative mb-40 w-full max-w-[1449px] mx-auto">
          <img src="/images/Slider.png" alt="hero" />
          <div className="absolute top-[200px] left-6 xl:left-[10rem] text-primary">
            <p className="paragraph">We're here to help you</p>
            <h2 className="text-[60px] font-bold leading-[74px] my-4">
              Relax & Rest
            </h2>
          </div>
        </article>
      </section>
      <section className="flex justify-between gap-4 my-8 w-full max-w-[1109px] mx-auto items-center">
        <div className="w-full max-w-[800px] h-[694px] relative">
          <img
            src="/images/product.png"
            alt="product"
            className="w-full h-full"
          />
        </div>
        <div className="w-full max-w-[474px] text-primary">
          <h2 className="heading">About Product</h2>
          <p className="text-[#21384299] paragraph my-4">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <div className="text-[#4D533C] paragraph ">
            <p>😊 Promotes calm and relaxation.</p>
            <p>💤 Inhalation allows for a rapid effect.</p>
            <p>
              ✅ 100% drug-free, plant-based ingredients.
              <p>‍⚕️ 3rd-party lab tested.</p>
            </p>
          </div>
          <article className="flex my-6 gap-10">
            <div className="paragraph">
              <h3>Price</h3>
              <p className="font-[600]">USD50</p>
            </div>
            <div className="paragraph">
              <h3>Unit</h3>
              <input type="number" value="2" className="w-[50px] font-[600]" />
            </div>
          </article>
          <Button text="Buy" />
        </div>
      </section>
      <hr />
      <section className="flex gap-4 mb-8 w-full max-w-[1109px] mx-auto text-[#4D533C] my-8">
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
    </>
  )
}

export default Shop
