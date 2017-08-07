import Home from './components/pages/Home';
import Info from './components/pages/Info';
import NotFound from './components/pages/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/info',
    component: Info
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
