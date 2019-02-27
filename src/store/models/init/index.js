import { model, reducer } from 'rematch-model';
import BaseStore from '../base';

class InitStore extends BaseStore {
  name = 'init';

  state = {
    loading: true,
    name: 'Username',
  };

  @reducer
  changeName(name) {
    return this.push({ name });
  }
}

export default model(InitStore);
