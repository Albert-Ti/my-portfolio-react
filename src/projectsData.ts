import imageProjectStellarBurger from './assets/images/project_react-stellar-burger.png'
import imageProjectPizza from './assets/images/project-react-pizza.png'
import imageProjectMesto from './assets/images/project-mesto.png'
import imageProjectEduCoach from './assets/images/project-educouch.png'
import imageProjectProCharity from './assets/images/project-procharity.png'
import imageProjectReplicant from './assets/images/replicant.png'
import imageProjectMazeChat from './assets/images/maze-chat.png'

export type ProjectList = {
  name: string
  image: string[]
  skills: string
  githubLink: string
  siteLink: string
  adaptive: boolean
  status: string
  description: string
}

export const projectList: ProjectList[] = [
  {
    name: 'Maze Chat',
    image: [
      imageProjectMazeChat,
      '/images/maze-chat.png',
    ],
    skills: 'React, custom-router, Redux-toolkit, WebSocket, WebRTC, Nest, Prisma, Postgres, Redis, Docker, NGINX',
    githubLink: 'https://github.com/Albert-Ti/Maze',
    siteLink: 'https://maze-chat.online',
    adaptive: false,
    status: 'In Progress',
    description:
      'Мой собственный большой проект чата, где можно общаться по видео и аудио связи, переписка в чата',
  },
  {
    name: 'React Stellar Burger',
    image: [
      imageProjectStellarBurger,
      '/images/project_react-stellar-burger.png',
    ],
    skills: 'React, React-DnD, React-router, Redux-toolkit, WebSocket',
    githubLink: 'https://github.com/Albert-Ti/react-stellar-burger',
    siteLink: 'https://albert-ti.github.io/react-stellar-burger/',
    adaptive: false,
    status: 'Completed',
    description:
      'Сервис по созданию бургера, есть лента заказов. Пользователи могут собирать свои уникальные бургеры из различных ингредиентов с использованием интерфейса drag-and-drop. В проекте реализована система авторизации и регистрации, что позволяет пользователям сохранять свои заказы и отслеживать их статус в режиме реального времени. Приложение построено с использованием современных технологий, таких как React и Redux-toolkit, что обеспечивает высокую производительность и масштабируемость. Поддержка WebSocket позволяет получать обновления о статусе заказов мгновенно, без необходимости перезагрузки страницы.',
  },
  {
    name: 'React Pizza',
    image: [imageProjectPizza],
    skills: 'TypeScript, React, React-router, Redux-toolkit',
    githubLink: 'https://github.com/Albert-Ti/react-pizza_online-store',
    siteLink: 'https://albert-ti.github.io/react-pizza_online-store/',
    adaptive: true,
    status: 'Needs Revision',
    description:
      'React Pizza - это онлайн-магазин для заказа пиццы, разработанный с использованием TypeScript и React. В приложении пользователи могут просматривать меню, добавлять пиццы в корзину, выбирать различные размеры и типы теста. Приложение включает в себя маршрутизацию с React-router и управление состоянием с Redux-toolkit для удобного и эффективного управления данными. Проект адаптирован под различные устройства, что обеспечивает удобное использование как на десктопах, так и на мобильных устройствах. В настоящее время проект требует доработки для улучшения пользовательского интерфейса и функциональности.',
  },
  {
    name: 'ProCharity',
    image: [imageProjectProCharity],
    skills: 'TypeScript, React, Sass, Moleculer, Redis, Mongodb',
    githubLink: '',
    siteLink: 'https://procharity.ru/',
    adaptive: true,
    status: 'In Progress',
    description: '',
  },

  {
    name: 'Replicant',
    image: [imageProjectReplicant],
    skills: 'TypeScript, React, React-router, Redux-toolkit',
    githubLink: 'https://github.com/Albert-Ti/pet-project-Replicant',
    siteLink: '',
    adaptive: false,
    status: 'In Progress',
    description: '',
  },
  {
    name: 'EduCoach',
    image: [imageProjectEduCoach],
    skills:
      'TypeScript, React, Redux-toolkit, NestJS, Postgresql, Prisma, Docker',
    githubLink: 'https://github.com/Albert-Ti/EduCoach',
    siteLink: '',
    adaptive: true,
    status: 'In Progress',
    description: '',
  },
  {
    name: 'Mesto',
    image: [imageProjectMesto],
    skills: 'HTML, CSS, JavaScript, OOP',
    githubLink: 'https://github.com/Albert-Ti/mesto-project',
    siteLink: '',
    adaptive: true,
    status: 'Completed',
    description: '',
  },
]
