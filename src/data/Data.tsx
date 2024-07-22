type Datas = {
  logos: string[]
  reviews: {
    text: string

    author: string
  }[]
  productReview: {
    src: string
    text: string

    author: string
  }[]
  FAQs: { id: number; qs: string; ans: string }[]
}
export const data: Datas = {
  logos: ['google', 'forbes', 'bloomberg', 'sleep-review', 'influence'],
  reviews: [
    {
      text: 'Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.',

      author: 'CEO, Techbias',
    },
    {
      text: 'I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.',

      author: 'Eunice Oliver',
    },
    {
      text: 'It’s a really good product and helps me sleep better at night!',

      author: 'Laura Davies',
    },
    {
      text: 'Helps me relax and remember to breathe. Stress level definitely goes down.',

      author: 'Jane Bocks',
    },
  ],
  productReview: [
    {
      src: 'img',
      text: 'Works great! Just use it and then relax, I fall asleep with no problem every time I use it.',

      author: 'Rachel Dill',
    },
    {
      src: 'img1',
      text: 'It really helps me fall right to sleep compared to melatonin pills.',

      author: 'Javier Mendez',
    },
    {
      src: 'img1',
      text: "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",

      author: 'Naomi Nwazurike',
    },
    {
      src: 'img',
      text: 'I have been falling asleep faster and sleeping thru the night.',

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
      ans: 'Important',
    },
    {
      id: 3,
      qs: 'How much melatonin is there per inhale',
      ans: 'Important',
    },
    {
      id: 4,
      qs: 'Is it an e-cigarette or tobacco product?',
      ans: 'Important',
    },
    {
      id: 5,
      qs: "What's in it?",
      ans: 'Important',
    },
    {
      id: 6,
      qs: "What's not in it?",
      ans: 'Important',
    },
    {
      id: 7,
      qs: 'How long does it last?',
      ans: 'Important',
    },
    {
      id: 8,
      qs: 'How do I know it has run out/died?',
      ans: 'Important',
    },
  ],
}
export const socialMedia: string[] = ['facebook', 'G', 'ln', 'twitter']
