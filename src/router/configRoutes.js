import PublicRoutes from './public/PublicRoutes';
import InicioRoutes from './inicio/InicioRoutes';
import PerfilRoutes from './perfil/PerfilRoutes';

import SucursalRoutes from './sucursal/SucursalRoutes';
import UsuarioRoutes from './usuario/UsuarioRoutes';

const  configRoutes = () => {
  return [
    {
      ...PublicRoutes,
      children : [...PublicRoutes.children]
    },
    {
      ...InicioRoutes,
      children : [...InicioRoutes.children]
    },
    {
      ...PerfilRoutes,
      children : [...PerfilRoutes.children]
    },
    {
      ...SucursalRoutes,
      children : [...SucursalRoutes.children]
    },
    {
      ...UsuarioRoutes,
      children : [...UsuarioRoutes.children]
    }
  ]
}

export default configRoutes;