import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import './styles/global.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import User from './pages/user/User';
import Product from './pages/product/Product';
import Login from './pages/login/Login';

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/users/:id',
          element: <User />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/products/:id',
          element: <Product />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
