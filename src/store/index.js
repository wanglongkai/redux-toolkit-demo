import { configureStore } from '@reduxjs/toolkit';

// const files = require.context('./reducers', true, '\.js$'); //vite中无法使用
const files = import.meta.globEager('./reducers/*.js');
const reducers = {};
for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    reducers[files[key].default.name] = files[key].default.reducer
  }
}
const store = configureStore({
  reducer: { ...reducers }
})

export default store;