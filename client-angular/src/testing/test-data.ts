import { PostsData } from '../posts';


export const postsData = `
{
   "_embedded": {
      "posts": [
         {
            "title": "Getting Started With Angular",
            "content": "mock content 1",
            "dateCreated": "2017-03-08T10:58:42.291",
            "author": {
               "username": "peeskillet",
               "avatarUrl": "http://avatar.com",
               "_links": {
                  "self": {
                     "href": "http://localhost:8080/api/users/1"
                  }
               }
            },
            "tags": [
               {
                  "name": "mysql",
                  "postCount": 5,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/17"
                     }
                  }
               },
               {
                  "name": "typescript",
                  "postCount": 13,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/8"
                     }
                  }
               },
               {
                  "name": "ionic",
                  "postCount": 6,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/28"
                     }
                  }
               }
            ],
            "comments": [
               {
                  "content": "You are the man!",
                  "dateCreated": "2017-03-08T10:58:42.635",
                  "author": {
                     "username": "blackmamba",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/3"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/1"
                     }
                  }
               },
               {
                  "content": "Good stuff.",
                  "dateCreated": "2017-03-08T10:58:42.854",
                  "author": {
                     "username": "babyface",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/4"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/101"
                     }
                  }
               },
               {
                  "content": "Great! I owe you a beer.",
                  "dateCreated": "2017-03-08T10:58:42.932",
                  "author": {
                     "username": "shaqdiesel",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/9"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/201"
                     }
                  }
               }
            ],
            "_links": {
               "self": {
                  "href": "http://localhost:8080/api/posts/1"
               }
            }
         },
         {
            "title": "Getting Started With Spring Boot",
            "content": "mock content 2",
            "dateCreated": "2017-03-08T10:58:42.291",
            "author": {
               "username": "peeskillet",
               "avatarUrl": "http://avatar.com",
               "_links": {
                  "self": {
                     "href": "http://localhost:8080/api/users/1"
                  }
               }
            },
            "tags": [
               {
                  "name": "websocket",
                  "postCount": 9,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/21"
                     }
                  }
               },
               {
                  "name": "spring-boot",
                  "postCount": 5,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/10"
                     }
                  }
               },
               {
                  "name": "linux",
                  "postCount": 10,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/31"
                     }
                  }
               }
            ],
            "comments": [
               {
                  "content": "Awesome article!",
                  "dateCreated": "2017-03-08T10:58:42.666",
                  "author": {
                     "username": "thebeard",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/8"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/2"
                     }
                  }
               },
               {
                  "content": "Great! I owe you a beer.",
                  "dateCreated": "2017-03-08T10:58:42.854",
                  "author": {
                     "username": "babyface",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/4"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/102"
                     }
                  }
               },
               {
                  "content": "Great! I owe you a beer.",
                  "dateCreated": "2017-03-08T10:58:42.932",
                  "author": {
                     "username": "thebeard",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/8"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/202"
                     }
                  }
               }
            ],
            "_links": {
               "self": {
                  "href": "http://localhost:8080/api/posts/2"
               }
            }
         }
      ]
   },
   "_links": {
      "first": {
         "href": "http://localhost:8080/api/posts?page=0&size=2"
      },
      "self": {
         "href": "http://localhost:8080/api/posts"
      },
      "next": {
         "href": "http://localhost:8080/api/posts?page=1&size=2"
      },
      "last": {
         "href": "http://localhost:8080/api/posts?page=49&size=2"
      }
   },
   "page": {
      "size": 2,
      "totalElements": 100,
      "totalPages": 50,
      "number": 0
   }
}
`;

export const postsDataPage2 = `
{
   "_embedded": {
      "posts": [
         {
            "title": "Getting Started With Angular",
            "content": "mock content 3",
            "dateCreated": "2017-03-08T10:58:42.291",
            "author": {
               "username": "peeskillet",
               "avatarUrl": "http://avatar.com",
               "_links": {
                  "self": {
                     "href": "http://localhost:8080/api/users/1"
                  }
               }
            },
            "tags": [
               {
                  "name": "mysql",
                  "postCount": 5,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/17"
                     }
                  }
               },
               {
                  "name": "typescript",
                  "postCount": 13,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/8"
                     }
                  }
               },
               {
                  "name": "ionic",
                  "postCount": 6,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/28"
                     }
                  }
               }
            ],
            "comments": [
               {
                  "content": "You are the man!",
                  "dateCreated": "2017-03-08T10:58:42.635",
                  "author": {
                     "username": "blackmamba",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/3"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/1"
                     }
                  }
               },
               {
                  "content": "Good stuff.",
                  "dateCreated": "2017-03-08T10:58:42.854",
                  "author": {
                     "username": "babyface",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/4"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/101"
                     }
                  }
               },
               {
                  "content": "Great! I owe you a beer.",
                  "dateCreated": "2017-03-08T10:58:42.932",
                  "author": {
                     "username": "shaqdiesel",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/9"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/201"
                     }
                  }
               }
            ],
            "_links": {
               "self": {
                  "href": "http://localhost:8080/api/posts/3"
               }
            }
         },
         {
            "title": "Getting Started With Spring Boot",
            "content": "mock content 4",
            "dateCreated": "2017-03-08T10:58:42.291",
            "author": {
               "username": "peeskillet",
               "avatarUrl": "http://avatar.com",
               "_links": {
                  "self": {
                     "href": "http://localhost:8080/api/users/1"
                  }
               }
            },
            "tags": [
               {
                  "name": "websocket",
                  "postCount": 9,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/21"
                     }
                  }
               },
               {
                  "name": "spring-boot",
                  "postCount": 5,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/10"
                     }
                  }
               },
               {
                  "name": "linux",
                  "postCount": 10,
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/tags/31"
                     }
                  }
               }
            ],
            "comments": [
               {
                  "content": "Awesome article!",
                  "dateCreated": "2017-03-08T10:58:42.666",
                  "author": {
                     "username": "thebeard",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/8"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/2"
                     }
                  }
               },
               {
                  "content": "Great! I owe you a beer.",
                  "dateCreated": "2017-03-08T10:58:42.854",
                  "author": {
                     "username": "babyface",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/4"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/102"
                     }
                  }
               },
               {
                  "content": "Great! I owe you a beer.",
                  "dateCreated": "2017-03-08T10:58:42.932",
                  "author": {
                     "username": "thebeard",
                     "avatarUrl": "http://avatar.com",
                     "_links": {
                        "self": {
                           "href": "http://localhost:8080/api/users/8"
                        }
                     }
                  },
                  "_links": {
                     "self": {
                        "href": "http://localhost:8080/api/comments/202"
                     }
                  }
               }
            ],
            "_links": {
               "self": {
                  "href": "http://localhost:8080/api/posts/4"
               }
            }
         }
      ]
   },
   "_links": {
      "first": {
         "href": "http://localhost:8080/api/posts?page=0&size=2"
      },
      "self": {
         "href": "http://localhost:8080/api/posts/page=0&size=2"
      },
      "next": {
         "href": "http://localhost:8080/api/posts?page=2&size=2"
      },
      "last": {
         "href": "http://localhost:8080/api/posts?page=49&size=2"
      }
   },
   "page": {
      "size": 2,
      "totalElements": 100,
      "totalPages": 50,
      "number": 1
   }
}
`;

export function getParsedPostsData(): PostsData {
  return JSON.parse(postsData);
}

export function getParsedPostsDataPage2(): PostsData {
  return JSON.parse(postsData);
}

export const userData = `
{
   "name": "Paul Samsotha",
   "username": "peeskillet",
   "email": "peeskillet@email.com",
   "location": "Phnom Penh",
   "avatarUrl": "http://avatar.com",
   "dateCreated": "2017-03-08T10:58:42.26",
   "_links": {
      "self": {
         "href": "http://localhost:8080/api/users/1"
      },
      "posts": {
         "href": "http://localhost:8080/api/users/1/posts"
      },
      "comments": {
         "href": "http://localhost:8080/api/users/1/comments"
      }
   }
}
`;

export function getParsedUserData() {
  return JSON.parse(userData);
}

export const tagsData = `
{
   "_embedded": {
      "tags": [
         {
            "name": "facebook-api",
            "postCount": 0,
            "_links": {
               "self": {
                  "href": "http://localhost:8080/api/tags/1"
               }
            }
         },
         {
            "name": "reactjs",
            "postCount": 5,
            "_links": {
               "self": {
                  "href": "http://localhost:8080/api/tags/2"
               }
            }
         },
         {
            "name": "javascript",
            "postCount": 8,
            "_links": {
               "self": {
                  "href": "http://localhost:8080/api/tags/3"
               }
            }
         },
         {
            "name": "java",
            "postCount": 3,
            "_links": {
               "self": {
                  "href": "http://localhost:8080/api/tags/4"
               }
            }
         },
         {
            "name": "spring",
            "postCount": 8,
            "_links": {
               "self": {
                  "href": "http://localhost:8080/api/tags/5"
               }
            }
         }
      ]
   },
   "_links": {
      "first": {
         "href": "http://localhost:8080/api/tags?page=0&size=5"
      },
      "self": {
         "href": "http://localhost:8080/api/tags"
      },
      "next": {
         "href": "http://localhost:8080/api/tags?page=1&size=5"
      },
      "last": {
         "href": "http://localhost:8080/api/tags?page=6&size=5"
      }
   },
   "page": {
      "size": 5,
      "totalElements": 35,
      "totalPages": 7,
      "number": 0
   }
}
`;

export function getParsedTagsData() {
  return JSON.parse(tagsData);
}