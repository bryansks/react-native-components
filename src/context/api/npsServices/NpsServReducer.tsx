export interface NpsState {
  data: any;
  loginStatus: 'checking' | 'unLogged' | 'logged';
  dataStatus: 'initial' | 'saving' | 'saved';
}

type NpsServAction =
  | { type: 'isLogged' }
  | { type: 'savingData' }
  | { type: 'saveData'; payload: any }
  | { type: 'onLogingStatus'; payload: 'checking' | 'unLogged' | 'logged' };

export const NpsServReducer = (
  state: NpsState,
  action: NpsServAction
): NpsState => {
  switch (action.type) {
    case 'savingData':
      return {
        ...state,
        dataStatus: 'saving',
      };
    case 'saveData':
      return {
        ...state,
        dataStatus: 'saved',
        data: action.payload,
      };
    case 'onLogingStatus':
      return {
        ...state,
        loginStatus: action.payload,
      };

    default:
      return state;
  }
};
