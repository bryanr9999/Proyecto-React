// Importación del componente Navbar desde la ruta especificada
import Navbar from '../../components/Navbar';

// Importación de funciones y componentes de react-router-dom
import { useRoutes, BrowserRouter } from 'react-router-dom';

// Importación de componentes para las rutas
import Home from '../Home';
import Colorr from './Colorr';
import Modelo from '../Modelo';
import Biografia from '../Biografia';

// Configuración de las rutas de la aplicación usando react-router-dom
const AppRoutes = () => {
  // Uso de la función useRoutes para definir las rutas y sus componentes correspondientes
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/modelo', element: <Modelo /> },
    { path: '/color', element: <Colorr /> },
    { path: '/biografia', element: <Biografia /> }
  ]);

  // Se retorna el resultado de useRoutes, que gestiona las rutas de la aplicación
  return routes;
};

// Componente principal de la aplicación
const App = () => {
  return (
    // Uso de BrowserRouter como el contenedor principal para manejar las rutas
    <BrowserRouter>
      {/* Renderización del componente que configura las rutas */}
      <AppRoutes />

      {/* Renderización del componente Navbar */}
      <Navbar />
    </BrowserRouter>
  );
};

// Exportación del componente principal (App)
export default App;
