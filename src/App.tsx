import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import '~/styles/reset.scss';
import '~/styles/global.scss';

import GameView from './containers/GameView';

const App: FC = () => (
  <Provider store={store}>
    <GameView />
  </Provider>
);

export default App;
