import { createSelector } from "@reduxjs/toolkit";

const getUser = (state) => state.admin.user

const gameSelector = createSelector([getUser], (user) => {
  return user;
});

export default gameSelector;
