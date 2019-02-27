import { reducer } from 'rematch-model';

/**
 * Base Model for rematch models
 */
export default class BaseModel {
  name = 'BASE';

  state = {};

  push = (payload, loading = this.state.loading) => ({ ...this.state, loading, ...payload });

  @reducer
  setError = (error) => {
    this.setLoading(false);

    return this.push({ error });
  };

  @reducer
  setLoading = value => this.push({ loading: value });
}
