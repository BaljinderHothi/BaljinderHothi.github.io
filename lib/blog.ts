export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  content: string
  images?: { src: string; alt: string }[]
  checklist?: { item: string; checked: boolean }[]
  sources?: { title: string; url: string }[]
}

const posts: BlogPost[] = [
  {
    slug: "about-me",
    title: "About Me",
    date: "Dec 7th 2025",
    author: "Baljinder Hothi",
    content: "Studying Computer Science at CCNY. Currently performing research as an intern at the University of Washington RAIVN Lab.\n\nInterested in Robotic Learning, Generative Models, and Reinforcement Learning.\n\nI really like dogs (I have a Doberman mix) and I love learning to be a better person for our future.",
  },
  {
    slug: "photography",
    title: "Photography",
    date: "Dec 7th 2025",
    author: "Baljinder Hothi",
    content: "A collection of moments captured from my travels and daily life. I enjoy shooting landscapes and urban environments.",
    images: [
      { src: "/images/jellyfish.jpg", alt: "Jellyfish" },
      { src: "/images/seattle-aquarium-1.jpg", alt: "Seattle Aquarium Fish" },
      { src: "/images/seattle-aquarium-2.jpg", alt: "Seattle Aquarium Tank" },
      { src: "/images/seattle-aquarium-3.jpg", alt: "Seattle Aquarium Diver" },
      { src: "/images/seattle-coastline.jpg", alt: "Seattle Coastline" },
    ]
  },
  {
    slug: "museums",
    title: "Museums",
    date: "Dec 7th 2025",
    author: "Baljinder Hothi",
    content: "My checklist of museums to visit in NYC and Seattle.",
    checklist: [
      // NYC Museums
      { item: "The Metropolitan Museum of Art (The Met)", checked: true },
      { item: "Museum of Modern Art (MoMA)", checked: true },
      { item: "American Museum of Natural History", checked: true },
      { item: "Solomon R. Guggenheim Museum", checked: false },
      { item: "Whitney Museum of American Art", checked: false },
      { item: "Brooklyn Museum", checked: false },
      { item: "The Morgan Library & Museum", checked: false },
      // Seattle Museums
      { item: "Museum of Pop Culture (MoPOP)", checked: true },
      { item: "Seattle Art Museum (SAM)", checked: false },
      { item: "Chihuly Garden and Glass", checked: true },
    ]
  },
  {
    slug: "hiking",
    title: "Hiking",
    date: "Dec 7th 2025",
    author: "Baljinder Hothi",
    content: "Documenting my hikes and the beautiful trails I explore.",
  },
  {
    slug: "cooking",
    title: "Cooking",
    date: "Dec 7th 2025",
    author: "Baljinder Hothi",
    content: "Experiments in the kitchen. Trying out new recipes and techniques.",
  },
  {
    slug: "reading",
    title: "Reading",
    date: "Dec 7th 2025",
    author: "Baljinder Hothi",
    content: "Notes on books I've read and what I'm currently reading.",
  },
]

export function getAllBlogPosts(): BlogPost[] {
  return posts
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}
