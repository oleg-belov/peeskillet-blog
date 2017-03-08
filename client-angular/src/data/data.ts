export const usersData = [
  {
    username: 'peeskillet',
    name: 'Paul Samsotha',
    avatar_url: 'http://lorempixel.com/100/100/people/1',
    email: 'paulsamsotha@email.com',
    hometown: 'Phnom Penh'
  },
  { 
    username: 'kingjames',
    name: 'Lebron James',
    avatar_url: 'http://lorempixel.com/100/100/people/2',
    email: 'lebronjames@email.com',
    hometown: 'Cleveland, OH'
  },
  { 
    username: 'babyface',
    name: 'Steph Curry',
    avatar_url: 'http://lorempixel.com/100/100/people/3',
    email: 'stephcurry@email.com',
    hometown: 'Oakland, CA'
  },
  {
    username: 'blackmamba',
    name: 'Kobe Bryant',
    avatar_url: 'http://lorempixel.com/100/100/people/4',
    email: 'kobebryant@email.com',
    hometown: 'Los Angeles, CA'
  },
  { 
    username: 'durantula',
    name: 'Kevin Durant',
    avatar_url: 'http://lorempixel.com/100/100/people/5',
    email: 'kevindurant@email.com'
  },
  { 
    username: 'mj23',
    name: 'Michael Jordan',
    avatar_url: 'http://lorempixel.com/100/100/people/6',
    email: 'michaeljordan@email.com',
    hometown: 'Chicago, IL'
  },
]

export const postsData = [
  {
    id: 1,
    date_created: '2017-03-06T10:49:45.245Z',
    title: 'Why You Should Use Angular',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie egestas risus, id eleifend enim consectetur id. Donec malesuada tempus finibus. Quisque vestibulum, nunc quis congue hendrerit, nisi odio aliquam lorem, in consectetur diam odio ut tortor. Nunc non est in velit blandit interdum convallis nec sem. Nam sodales porta magna, malesuada interdum tortor hendrerit ut. Mauris eu eros ut nisi ullamcorper imperdiet non quis purus. Sed quis cursus est, id blandit mi. Donec eget mollis orci. Aenean volutpat erat posuere diam posuere, nec pretium dolor elementum. Nam fermentum in erat et sagittis. Donec malesuada mauris aliquam consectetur aliquet. Praesent lorem sapien, feugiat ac ligula ac, aliquam convallis diam. Pellentesque ut elit accumsan, dictum ligula et, consectetur tortor.',
    author: {
      username: 'peeskillet',
      avatar_url: 'http://lorempixel.com/100/100/people/1'
    },
    comments: [
      {
        id: 100,
        content: 'Awesome article',
        author: {
          username: 'kingjames',
          avatar_url: 'http://lorempixel.com/100/100/people/2'
        }
      },
      {
        id: 101,
        content: 'Great article',
        author: {
          username: 'blackmamba',
          avatar_url: 'http://lorempixel.com/100/100/people/4'
        }
      },
      {
        id: 102,
        content: 'I learned a lot from this article',
        author: {
          username: 'mj23',
          avatar_url: 'http://lorempixel.com/100/100/people/6'
        }
      }
    ]
  },
  {
    id: 2,
    date_created: '2017-03-07T10:49:45.245Z',
    title: 'What Makes NgRx Cool',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie egestas risus, id eleifend enim consectetur id. Donec malesuada tempus finibus. Quisque vestibulum, nunc quis congue hendrerit, nisi odio aliquam lorem, in consectetur diam odio ut tortor. Nunc non est in velit blandit interdum convallis nec sem. Nam sodales porta magna, malesuada interdum tortor hendrerit ut. Mauris eu eros ut nisi ullamcorper imperdiet non quis purus. Sed quis cursus est, id blandit mi. Donec eget mollis orci. Aenean volutpat erat posuere diam posuere, nec pretium dolor elementum. Nam fermentum in erat et sagittis. Donec malesuada mauris aliquam consectetur aliquet. Praesent lorem sapien, feugiat ac ligula ac, aliquam convallis diam. Pellentesque ut elit accumsan, dictum ligula et, consectetur tortor.',
    author: {
      username: 'peeskillet',
      avatar_url: 'http://lorempixel.com/100/100/people/1'
    },
    comments: [
      {
        id: 103,
        content: 'Awesome article',
        author: {
          username: 'kingjames',
          avatar_url: 'http://lorempixel.com/100/100/people/2'
        }
      },
      {
        id: 104,
        content: 'Great article',
        author: {
          username: 'blackmamba',
          avatar_url: 'http://lorempixel.com/100/100/people/4'
        }
      },
      {
        id: 105,
        content: 'I learned a lot from this article',
        author: {
          username: 'mj23',
          avatar_url: 'http://lorempixel.com/100/100/people/6'
        }
      }
    ]
  },
  {
    id: 3,
    date_created: '2017-03-08T10:49:45.245Z',
    title: 'How NgRx is Like Redux',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie egestas risus, id eleifend enim consectetur id. Donec malesuada tempus finibus. Quisque vestibulum, nunc quis congue hendrerit, nisi odio aliquam lorem, in consectetur diam odio ut tortor. Nunc non est in velit blandit interdum convallis nec sem. Nam sodales porta magna, malesuada interdum tortor hendrerit ut. Mauris eu eros ut nisi ullamcorper imperdiet non quis purus. Sed quis cursus est, id blandit mi. Donec eget mollis orci. Aenean volutpat erat posuere diam posuere, nec pretium dolor elementum. Nam fermentum in erat et sagittis. Donec malesuada mauris aliquam consectetur aliquet. Praesent lorem sapien, feugiat ac ligula ac, aliquam convallis diam. Pellentesque ut elit accumsan, dictum ligula et, consectetur tortor.',
    author: {
      username: 'peeskillet',
      avatar_url: 'http://lorempixel.com/100/100/people/1'
    },
    comments: [
      {
        id: 106,
        content: 'Awesome article',
        author: {
          username: 'kingjames',
          avatar_url: 'http://lorempixel.com/100/100/people/2'
        }
      },
      {
        id: 107,
        content: 'Great article',
        author: {
          username: 'blackmamba',
          avatar_url: 'http://lorempixel.com/100/100/people/4'
        }
      },
      {
        id: 108,
        content: 'I learned a lot from this article',
        author: {
          username: 'mj23',
          avatar_url: 'http://lorempixel.com/100/100/people/6'
        }
      }
    ]
  },
  {
    id: 4,
    date_created: '2017-03-09T10:49:45.245Z',
    title: 'How the Warriors Lost to the Cavs',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie egestas risus, id eleifend enim consectetur id. Donec malesuada tempus finibus. Quisque vestibulum, nunc quis congue hendrerit, nisi odio aliquam lorem, in consectetur diam odio ut tortor. Nunc non est in velit blandit interdum convallis nec sem. Nam sodales porta magna, malesuada interdum tortor hendrerit ut. Mauris eu eros ut nisi ullamcorper imperdiet non quis purus. Sed quis cursus est, id blandit mi. Donec eget mollis orci. Aenean volutpat erat posuere diam posuere, nec pretium dolor elementum. Nam fermentum in erat et sagittis. Donec malesuada mauris aliquam consectetur aliquet. Praesent lorem sapien, feugiat ac ligula ac, aliquam convallis diam. Pellentesque ut elit accumsan, dictum ligula et, consectetur tortor.',
    author: {
      username: 'babyface',
      avatar_url: 'http://lorempixel.com/100/100/people/3'
    },
    comments: [
      {
        id: 109,
        content: 'Awesome article',
        author: {
          username: 'kingjames',
          avatar_url: 'http://lorempixel.com/100/100/people/2'
        }
      },
      {
        id: 110,
        content: 'Great article',
        author: {
          username: 'blackmamba',
          avatar_url: 'http://lorempixel.com/100/100/people/4'
        }
      },
      {
        id: 111,
        content: 'I learned a lot from this article',
        author: {
          username: 'mj23',
          avatar_url: 'http://lorempixel.com/100/100/people/6'
        }
      }
    ]
  }
]