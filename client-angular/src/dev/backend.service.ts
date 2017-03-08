import { InMemoryDbService } from 'angular-in-memory-web-api';
import { usersData, postsData } from '../data';


export class BackendService implements InMemoryDbService {

  createDb() {
    return {
      users: usersData,
      posts: postsData
    }
  }
}
