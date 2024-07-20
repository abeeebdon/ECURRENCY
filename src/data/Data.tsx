type Datas = {
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
export const data: Datas = {
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
