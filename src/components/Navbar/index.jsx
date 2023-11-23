// Importación del componente NavLink de react-router-dom y de una imagen
import { NavLink } from 'react-router-dom';
import icono from "../../assets/imagesrrr.jpg";

// Definición del componente Navbar
const Navbar = () => {
  // Definición de la clase de estilo para el enlace activo
  const activeStyle = 'underline underline-offset-4';

  // Renderización del componente Navbar
  return (
    <nav className="flex justify-center items-center fixed z-10 top-0 w-full h-20 py-0 px-8 text-sm font-light bg-cyan-950 text-white">
      {/* Lista de enlaces de navegación */}
      <ul className="flex items-center gap-3">
        {/* Enlace HOME */}
        <li className="font-semibold  text-xl gap-3">
          <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
            HOME
          </NavLink>
        </li>

        {/* Enlace MODELO */}
        <li>
          <NavLink to='/modelo' className={({ isActive }) => isActive ? activeStyle : undefined}>
            MODELO
          </NavLink>
        </li>

        {/* Enlace BIOGRAFIA */}
        <li>
          <NavLink to='/biografia' className={({ isActive }) => isActive ? activeStyle : undefined}>
            BIOGRAFIA
          </NavLink>
        </li>

        {/* Elemento de imagen */}
        <div>
          {/* Renderización de la imagen con clase de tamaño */}
          <img className='w-12' src={icono} alt="Icono" />
        </div>
      </ul>
    </nav>
  );
};

// Exportación del componente Navbar
export default Navbar;
