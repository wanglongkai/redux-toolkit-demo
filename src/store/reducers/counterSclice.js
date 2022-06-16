import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 创建异步action
export const loadMovies = createAsyncThunk('loadMovies', async () => {
  const movies = await fetch('https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=2&ret_num=48&session=522d98dbbd4255ac917ece62832731bb').then(res => {
    return res.json();
  })
  return movies;
})

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, action) {
      state.count += action.payload;
    },
    sub(state, action) {
      state.count -= action.payload;
    }
  },
  extraReducers: {
    [loadMovies.fulfilled](state, action) {
      console.log('成功reducer');
    },
    [loadMovies.rejected](state, action) {
      console.log('失败reducer');
    },
    [loadMovies.pending](state, action) {
      console.log('请求中reducer');
    }
  }
})

export const { add, sub } = counterSlice.actions;
export default counterSlice; // 常规是导出slice.reducer, 这个样例为了自动注入到configStore.reducer中，需要导出整个slice已获取name属性