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
  FAQs: { id: number; qs: string; ans: string }[]
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
    {
      text: 'It’s a really good product and helps me sleep better at night!',
      rating: 5,
      author: 'Laura Davies',
    },
    {
      text: 'Helps me relax and remember to breathe. Stress level definitely goes down.',
      rating: 5,
      author: 'Jane Bocks',
    },
  ],
  productReview: [
    {
      src: 'img',
      text: 'Works great! Just use it and then relax, I fall asleep with no problem every time I use it.',
      rating: 5,
      author: 'Rachel Dill',
    },
    {
      src: 'img1',
      text: 'It really helps me fall right to sleep compared to melatonin pills.',
      rating: 5,
      author: 'Javier Mendez',
    },
    {
      src: 'img1',
      text: "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
      rating: 5,
      author: 'Naomi Nwazurike',
    },
    {
      src: 'img',
      text: 'I have been falling asleep faster and sleeping thru the night.',
      rating: 5,
      author: 'Nate Jacobs',
    },
  ],
  FAQs: [
    {
      id: 1,
      qs: 'How does it work?',
      ans: 'Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.',
    },
    {
      id: 2,
      qs: 'Why inhale melatonin',
      ans: 'I dont know',
    },
    {
      id: 3,
      qs: 'How much melatonin is there per inhale',
      ans: 'I dont know',
    },
  ],
}
export const socialMedia: string[] = ['facebook', 'G', 'ln', 'twitter']
