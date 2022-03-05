import { FC } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainPage } from './pages/mainpage/mainpage';
import { TodoPage } from './pages/todopage/todopage';
import store from './store/store';

type AppPropsType = {
  
}
export const App: FC<AppPropsType> = ({  }) => {
  return <>
  <Provider store={store}>
    <Header />
    <Routes>
      <Route path='/main' element={<MainPage />} />
      <Route path='/todos' element={<TodoPage />} />
      <Route path='*' element={<MainPage />} />
    </Routes>
    <Footer />
  </Provider>
    
  </>
}