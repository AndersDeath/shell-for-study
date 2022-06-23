import { Tokens } from 'sfs-data-model';

interface SFStore {
  tokens: Tokens;
  profile: {};
  data: any
}

export const initialState: SFStore = {
  profile: {},
  tokens: new Tokens({
    access_token: '',
    refresh_token: '',
  }),
  data: {
    bibliography: [],
    dictionaries: []
  }
};
