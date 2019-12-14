const experience = [
  {
    title: 'Senior Javascript Engineer',
    dates: ['4/19', 'Present'],
    location: 'Cambridge, MA',
    company: {
      name: 'CarGurus',
      url: 'https://www.cargurus.com'
    },
    items: [
      'Working on emerging products team building the P2P Digital Checkout Flow',
      'Removing legacy FTL code and replacing it with highly reusable and clean React',
      'Converting complex redux-forms into vanilla React using context, hooks, and other modern form strategies'
    ],
    tech: ['JavaScript', 'React', 'Styled Components']
  },
  {
    title: 'Software Engineer',
    dates: ['1/19', '3/19'],
    location: 'Boston, MA',
    company: {
      name: 'Consider',
      url: 'http://consider.co'
    },
    items: ['Fixing email'],
    tech: [
      'JavaScript',
      'React',
      'React Native',
      'GraphQL',
      'TypeScript',
      'Ruby on Rails'
    ]
  },
  {
    title: 'Director of Product Engineering',
    dates: ['2/17', '1/19'],
    location: 'Cambridge, MA',
    company: {
      name: 'Conduit Analytics',
      url: 'http://conduithq.com'
    },
    items: [
      'Led the development of the feature dense web app, mobile app, chrome extension, backend API, and data sync pipeline',
      'Fostered the growth of our engineers via weekly 1 on 1s, code reviews, and weekly code challenges',
      'Scaling from zero users to thousands using job/message queues, microservices, and kubernetes',
      'Managed a team of high skill engineers in a fast paced startup environment',
      'Google/Outlook sync handling over 100k sync jobs per day',
      'Built a modular GraphQL framework/toolkit for handling the batching, caching, and filtering of queries to a relational graph data store'
    ],
    tech: [
      'JavaScript',
      'React',
      'React Native',
      'Node',
      'Express',
      'GraphQL',
      'TypeScript',
      'PostgreSQL'
    ]
  },
  {
    title: 'Software Engineer',
    dates: ['9/16', '2/17'],
    location: 'Boston, MA',
    company: {
      name: 'HigherMe',
      url: 'http://higherme.com'
    },
    items: [
      'Built large features such as job application flow, applicant profile, and site authentication',
      'Advocated for the adoption of cutting edge (2016) React patterns such as higher order components and render props- which led to less duplicate code, faster development, and a stronger internal toolkit'
    ],
    tech: ['JavaScript', 'React', 'CSS/SASS', 'Node', 'PHP', 'Laravel', 'MySQL']
  },
  {
    title: 'Founder',
    dates: ['12/16', '1/17'],
    location: 'Lowell, MA',
    preposition: 'of',
    company: {
      name: 'Roomio',
      url: 'https://github.com/tylerjbainbridge/roomio'
    },
    items: [
      'A web application for real-time topic based conversation (essentially Reddit meets Discord)',
      'Built a "room" and "topic" concept- where rooms (e.g. JavaScript, News, Music, etc) have many topics (e.g. I have a bug in my React app- can anyone help?). Each topic is a real-time live conversation with persistant messages',
      'Built a configurable caching framework that stores/normalizes queries using Redux and instantly loads if data is in the cache.',
      'Implemented a Roomio-bot that took responded to messages by building a basic NLP parser',
      'Giphy support',
      'Markdown support '
    ],
    tech: [
      'JavaScript',
      'React',
      'Node',
      'Socket.io',
      'PHP',
      'Laravel',
      'MySQL',
      'AWS'
    ]
  },
  {
    title: 'Software Engineering Intern',
    dates: ['4/16', '9/16'],
    location: 'Boston, MA',
    company: {
      name: 'Rakuten',
      url: 'http://rakuten.com'
    },
    items: [
      'Created a mock website and server (Node) for the Rakuten Catalog Platform (RCP) to test web crawling performance, simulate blocking patterns, and asynchronously persist request metadata (MongoDB)'
    ],
    tech: ['JavaScript', 'Node', 'Express', 'MongoDB']
  },
  {
    title: 'President',
    dates: ['11/16', '6/17'],
    location: 'Lowell, MA',
    preposition: 'of the',
    company: {
      name: 'UML Web Dev Club',
      url: 'https://www.uml.edu/'
    },
    items: [
      '30 Members',
      'I started the Web Development club at UML to inspire students to pursue entrepreneurship through full stack web development.',
      'Weekly tech talks/code alongs'
    ]
  },
  {
    title: 'Founder',
    dates: ['11/15', '6/16'],
    location: 'Lowell, MA',
    preposition: 'of',
    company: {
      name: 'Prism',
      url: 'http://www.prsmphoto.com/'
    },
    items: [
      'A social network for photography nerds (Flickr meets Instagram meets Pinterest)',
      'Over 500 users',
      'Advanced search queries- “Portraits from a Canon 6D w/ 50mm 1.8 lens”',
      'Batch uploading images',
      'Liking posts',
      'Tagging posts',
      'Image EXIF parsing',
      'Adding photos to inspiration albums',
      'Following users',
      'News feed'
    ],
    tech: ['JavaScript', 'Vue', 'Node', 'Express', 'MongoDB', 'Heroku', 'AWS']
  }
];

const allTech = experience.reduce((p, { tech = [] }) => [...p, ...tech], []);

export const tech = Array.from(new Set(allTech).values());

export default experience;
