import { createReducer } from '@reduxjs/toolkit';
import { StepsState } from '~/types';
import {
  stepIndexDecremented,
  stepIndexIncremented,
  stepAddedToStack,
} from './actions';
import { newBoardGenerated } from '../board/actions';

const initialState: StepsState = {
  step_index: -1,
  steps_stack: [],
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(stepIndexIncremented, (state) => {
      state.step_index = state.step_index + 1;
    })
    .addCase(stepIndexDecremented, (state) => {
      state.step_index = state.step_index - 1;
    })
    .addCase(stepAddedToStack, (state, { payload }) => {
      const { tile_pair } = payload;

      state.steps_stack.push(tile_pair);
    })
    .addCase(newBoardGenerated, (state) => {
      state.step_index = -1;
      state.steps_stack = [];
    }),
);