import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Board from '~/components/Board';
import GameControlPanel from '~/containers/GameControlPanel';
import * as styles from './styles.scss';
import { selectIsStopped } from '~/redux/timer/selectors';
import { generateNewBoard } from '~/redux/board/actions';

export const GameView: FC = () => {
  const is_stopped = useSelector(selectIsStopped);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateNewBoard());
  }, []);

  return (
    <div className={styles.container}>
      <GameControlPanel />
      {!is_stopped && <Board />}
    </div>
  );
};
