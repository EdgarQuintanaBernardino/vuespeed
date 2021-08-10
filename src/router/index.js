/*
import Vue from 'vue'
import Router from 'vue-router'
import check from '@/repositories/global/check'
import configRoutes from './configRoutes'


Vue.use(Router)

let router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  mode: 'history', // Quita el "#" de las rutas URL
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes() // En esta seccion se importan todas las rutas
})


router.beforeEach((to, from, next) => {
  check.getUserAutenticado(to, next);

  let roles = localStorage.getItem("roles");
  if(roles != null){
    roles = roles.split(',')
  }

  if(to.matched.some(record => record.meta.requiresAdmin)) { // Verifica si la ruta a la que se quiere acceder pide acceso de administrador
    if(roles != null && roles.indexOf('admin') >= 0 ){
      if(check.permiso(to.meta.permissions)) {
        next()
      } else {
        next({ path: '/Page500', params: { nextUrl: to.fullPath } })
      }
    }else{
      next({ path: '/login', params: { nextUrl: to.fullPath } })
    }
  } else{
    next() // Si la ruta solicitada no esta protegida por administrador deja avanzar
  }
})

export default router

*/

import Vue from "vue";
import Router from "vue-router";
import check from "@/repositories/global/check";

// Containers
const TheContainer = () => import("@/containers/TheContainer");

// Inicio
const Iniciodash = () => import("@/views/iniciodash/Iniciodash");

// Views
const Dashboard = () => import("@/views/Dashboard");

// Views - Pages
const Page404 = () => import("@/views/pages/Page404");
const Page500 = () => import("@/views/pages/Page500");
const Login = () => import("@/views/auth/Login");
const Register = () => import("@/views/pages/Register");

// Sucursales
const SucIndex = () => import("@/views/sucursal/SucIndex");
const SucCreate = () => import("@/views/sucursal/SucCreate");
const SucShow = () => import("@/views/sucursal/SucShow");
const SucEdit = () => import("@/views/sucursal/SucEdit");

// Citas y recordatorios
const CitasRecordatorios = () => import("@/views/citas/CitasRecordatorios");
const Citas = () => import("@/views/citas/Citas");
const ListaDeCitas = () => import("@/views/citas/ListaDeCitas");
const NvoCita = () => import("@/views/citas/NvoCita");
const EditCitas = () => import("@/views/citas/EditCitas");
const Calendario = () => import("@/views/citas/Calendario");
const CitasConfirmadas = () => import("@/views/citas/CitasConfirmadas");
const CitasPasadas = () => import("@/views/citas/CitasPasadas");

// Balance
const Balance = () => import("@/views/administracion/Balance");

// Catálogos
const Catalogos = () => import("@/views/catalogos/Catalogos");
const CatManoObra = () => import("@/views/catalogos/CatManoObra");
const ListaMano = () => import("@/views/catalogos/ListaMano");
const ShowMano = () => import("@/views/catalogos/mano_obra/ShowMano");
const EditMano = () => import("@/views/catalogos/mano_obra/EditMano");
const NvoPaquete = () => import("@/views/catalogos/NvoPaquete");


// Clientes
const Clientes = () => import("@/views/cliente/Clientes");
const Clienteshow = () => import("@/views/cliente/Clienteshow");
const VehiculosCliente = () => import("@/views/cliente/VehiculosCliente");
const CitasCliente = () => import("@/views/cliente/CitasCliente");
//const Detalles = () => import('@/views/cliente/Detalles')
const Deudores = () => import("@/views/cliente/deudores/Deudores");
const EditCliente = () => import("@/views/cliente/EditCliente");
const EditFactura = () => import("@/views/cliente/EditFactura");
const EditCredito = () => import("@/views/cliente/EditCredito");
const RegCliente = () => import("@/views/cliente/RegCliente");
const NvoCliente = () => import("@/views/cliente/NvoCliente");
const ListaTodos = () => import("@/views/cliente/ListaClientes/ListaTodos")
const AddVehiculo = () => import("@/views/cliente/datos_clientes_vehiculos/AddVehiculo")


// Cotizaciones
const Cotizacion = () => import("@/views/cotizaciones/Cotizacion");
const NvaCotizacion = () => import("@/views/cotizaciones/NvaCotizacion");
const FormCotizacion = () => import("@/views/cotizaciones/FormCotizacion");
const FormCotizacionMano = () => import("@/views/cotizaciones/FormCotizacionMano");
const ListaCotizaciones = () => import("@/views/cotizaciones/ListaCotizaciones");
const TablaCatalogo = () => import("@/views/cotizaciones/TablaCatalogo"); 
const CatalogoRegistro = () => import("@/views/cotizaciones/CatalogosRegistro/CatalogoRegistro");

// Detalles de la empresa
const Empresa = () => import("@/views/detallesempresa/Empresa");
const TablaRoles = () => import("@/views/detallesempresa/TablaRoles");
const ListaColaboradores = () => import("@/views/detallesempresa/ListaColaboradores");
const NvoColaborador = () => import("@/views/detallesempresa/NvoColaborador");

//Flotillas
const ListaFlotilla = () => import("@/views/flotilla/ListaFlotilla");

// Users
const Users = () => import("@/views/users/Users");
const User = () => import("@/views/users/User");
const EditUser = () => import("@/views/users/EditUser");

// Vehículos
const DetallesV = () => import("@/views/vehiculos/DetallesV");
const Piso = () => import("@/views/vehiculos/Piso");
const Recepcion = () => import("@/views/vehiculos/Recepcion");
const EditarVehiculo = () => import("@/views/vehiculos/EditarVehiculo");
const ListaMarcas = () => import ("@/views/vehiculos/ListaMarcas");
const MarcasMod = () => import ("@/views/vehiculos/MarcasMod");

//Notes
const Notes = () => import("@/views/notes/Notes");
const Note = () => import("@/views/notes/Note");
const EditNote = () => import("@/views/notes/EditNote");
const CreateNote = () => import("@/views/notes/CreateNote");

//Roles
const Roles = () => import("@/views/roles/Roles");
const Role = () => import("@/views/roles/Role");
const EditRole = () => import("@/views/roles/EditRole");
const CreateRole = () => import("@/views/roles/CreateRole");
const NvoRol = () => import("@/views/roles/NvoRol");

//Servicios
const Servicios = () => import("@/views/servicios/Servicios");
const Diagnostico = () => import("@/views/servicios/Diagnostico");
const PagosGastos = () => import("@/views/servicios/PagosGastos");
const OrdendeTrabajo = () => import("@/views/servicios/OrdendeTrabajo");
const Encuesta = () => import("@/views/servicios/Encuesta");
const Mensajes = () => import("@/views/servicios/Mensajes");
const ImprimirRecepcion = () => import("@/views/servicios/imprimir/ImprimirRecepcion")
const ImprimirFactura = () => import("@/views/servicios/imprimir/ImprimirFactura")
const ImprimirContratoAd = () => import("@/views/servicios/imprimir/ImprimirContratoAd")
const ImprimirCotizacion = () => import("@/views/servicios/imprimir/ImprimirCotizacion")
const ImprimirConformidad = () => import("@/views/servicios/imprimir/ImprimirConformidad")
const TomarFotos = () => import("@/views/servicios/tomarfotos/TomarFotos")

//Email
const Emails = () => import("@/views/email/Emails");
const CreateEmail = () => import("@/views/email/CreateEmail");
const EditEmail = () => import("@/views/email/EditEmail");
const ShowEmail = () => import("@/views/email/ShowEmail");
const SendEmail = () => import("@/views/email/SendEmail");

//Perfil
const Recordatorio = () => import("@/views/perfil/recordatorio/Index");
const Tablero = () => import("@/views/perfil/recordatorio/Index");
const PerfilDetalles = () => import("@/views/perfil/recordatorio/Index");
const PerfilEditar = () => import("@/views/perfil/recordatorio/Index");

Vue.use(Router);

let router = new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  mode: "history", // Quita el "#" de las rutas URL
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
});

router.beforeEach((to, from, next) => {
  check.getUserAutenticado(to, next);

  let roles = localStorage.getItem("roles");
  if (roles != null) {
    roles = roles.split(",");
  }

  if (to.matched.some(record => record.meta.requiresAdmin)) {
    // Verifica si la ruta a la que se quiere acceder pide acceso de administrador
    if (roles != null && roles.indexOf("admin") >= 0) {
      if (check.permiso(to.meta.permissions)) {
        next();
      } else {
        next({ path: "/Page500", params: { nextUrl: to.fullPath } });
      }
    } else {
      next({ path: "/login", params: { nextUrl: to.fullPath } });
    }
  } else {
    next(); // Si la ruta solicitada no esta protegida por administrador deja avanzar
  }
});

export default router;

function configRoutes() {
  return [
    {
      path: "/",
      redirect: "/login",
      //  name: '',
      component: TheContainer,
      children: [
        {
          path: "inicio",
          name: "Inicio",
          component: Iniciodash,
          meta: {
            requiresAdmin: true,
            permissions: ["global"]
          }
        },

        {
          path: "iniciodash",
          meta: { label: "Iniciodash" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: Iniciodash,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            }
          ]
        },
        {
          path: "/balance",
          meta: { label: "Balance" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: Balance,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            }
          ]
        },

        {
          path: "sucursales",
          meta: { label: "Sucursales" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: SucIndex,
              meta: {
                requiresAdmin: true,
                permissions: [
                  "sucursal.create",
                  "sucursal.show",
                  "sucursal.edit",
                  "sucursal.destroy"
                ]
              }
            },
            {
              path: "registrar",
              meta: { label: "Registrar Sucursal" },
              name: "Registrar Sucursal",
              component: SucCreate,
              meta: {
                requiresAdmin: true,
                permissions: ["sucursal.create"]
              }
            },
            {
              path: "detalles/:id",
              meta: { label: "Detalles Sucursal" },
              name: "Detalles Sucursal",
              component: SucShow,
              meta: {
                requiresAdmin: true,
                permissions: ["sucursal.show"]
              }
            },
            {
              path: "editar/:id",
              meta: { label: "Editar Sucursal" },
              name: "Editar Sucursal",
              component: SucEdit,
              meta: {
                requiresAdmin: true,
                permissions: ["sucursal.edit"]
              }
            }
          ]
        },
        {
          path: "empresa",
          meta: { label: "Empresa" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: Empresa,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/tablaroles",
              meta: { label: "TablaRoles" },
              name: "Tabla Roles",
              component: TablaRoles,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/listacolaboradores",
              meta: { label: "ListaColaboradores" },
              name: "ListaColaboradores",
              component: ListaColaboradores,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/nvocolaborador",
              meta: { label: "NvoColaborador" },
              name: "NuevoColaborador",
              component: NvoColaborador,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
          ]
        },
        {
          path: "",
          meta: { label: "Catálogos" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "catalogos",
              component: Catalogos,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/catmanodeobra",
              meta: { label: "CatManoObra" },
              name: "mano de obra",
              component: CatManoObra,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/listamano",
              meta: { label: "ListaMano" },
              name: "lista mano de obra",
              component: ListaMano,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/nvopaquete",
              meta: { label: "NvoPaquete" },
              name: "nuevo paquete",
              component: NvoPaquete,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/tablacatalogo",
              meta: { label: "TablaCatalogo" },
              name: "tabla catalogos",
              component: TablaCatalogo,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "showmano/:id",
              meta: { label: "Detalles ManoObra" },
              name:"Detalles ManoObra",
              component: ShowMano,
              meta: {
                requiresAdmin: true,
                permissions: ["m_obra.show", "m_obra.edit"]
              }
            },
            {
              path: "/editmano",
              meta: { label: "EditMano" },
              name: "Editar Mano",
              component: EditMano,
              meta: {
                requiresAdmin: true,
                permissions: ["m_obra.show", "m_obra.edit"]
              }
            },
          ]
        },
        {
          path: "CitasRecordatorios",
          meta: { label: "CitasRecordatorios" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: Citas,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/citas",
              meta: { label: "Citas" },
              name: "Nuevo Cita",
              component: Citas,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/listadecitas",
              meta: { label: "ListaDeCitas" },
              name: "Nueva cita",
              component: ListaDeCitas,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/nvocita",
              meta: { label: "NvoCita" },
              name: "Nueva Cita",
              component: NvoCita,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/editcita",
              meta: { label: "EditCitas" },
              name: "Editar Cita",
              component: EditCitas,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/calendario",
              meta: { label: "Calendario" },
              name: "listar recordatorios",
              component: Calendario,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/citasconfirmadas",
              meta: { label: "CitasConfirmadas" },
              name: "Citas confirmadas",
              component: CitasConfirmadas,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/citaspasadas",
              meta: { label: "CitasPasadas" },
              name: "Citas pasadas",
              component: CitasPasadas,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
          ]
        },
       
        {
          path: "clientes",
          meta: { label: "Clientes" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: Clientes,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/nvoCliente",
              meta: { label: "NvoCliente" },
              name: "Nuevo Cliente",
              component: NvoCliente,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/vehiculoscliente",
              meta: { label: "vehiculoscliente" },
              name: "",
              component: VehiculosCliente,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/citascliente",
              meta: { label: "citascliente" },
              name: "",
              component: CitasCliente,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            /*   {
            path: 'detalles/:id',
            meta: { label: 'Detalles vehiculo'},
            name: 'Detalles vehiculo',
            component: Clienteshow,
            meta:{
              requiresAdmin: true,
              permissions : ['clientev.show']
            }
            },*/
            {
              path: "detalles/:id",
              meta: { label: "Detalles Cliente" },
              name: "Detalles Cliente",
              component: Clienteshow,
              meta: {
                requiresAdmin: true,
                permissions: ["general.show", "general.edit"]
              }
            },
            {
              path: "/regcliente",
              meta: { label: "RegCliente" },
              name: "Nuevo cliente",
              component: RegCliente,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/deudores",
              meta: { label: "Deudores" },
              name: "Cliente Deudor",
              component: Deudores,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/listatodos",
              meta: { label: "ListaTodos" },
              name: "ListaClientes",
              component: ListaTodos,
              meta: {
                requiresAdmin: true,
                permissions: ["todos.create", "todos.show", "todos.edit", "todos.destroy"]
              }
            },
            {
              path: "editcliente/:id",
              meta: { label: "Editar" },
              name: "Editar Cliente",
              component: EditCliente,
              meta: {
                requiresAdmin: true,
                permissions: ["general.edit" , "flotillav.edit"]
              }
            },
            {
              path: "editfactura/:id",
              meta: { label: "EditarF" },
              name: "Editar Factura",
              component: EditFactura,
              meta: {
                requiresAdmin: true,
                permissions: ["factura.edit"]
              }
            },
            {
              path: "editcredito/:id",
              meta: { label: "EditarC" },
              name: "Editar Credito",
              component: EditCredito,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/addvehiculo",
              meta: { label: "AddVehiculo" },
              name: "Agregar ",
              component: AddVehiculo,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            
          ]
        },

        {
          path: "cotizacion",
          meta: { label: "Cotizacion" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: Cotizacion,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/nvacotizacion",
              meta: { label: "NvaCotizacion" },
              name: "Nueva cotizacion",
              component: NvaCotizacion,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/formcotizacion",
              meta: { label: "FormCotizacion" },
              name: "Lista de refacciones",
              component: FormCotizacion,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/listacotizaciones",
              meta: { label: "ListaCotizaciones" },
              name: "Lista de cotizaciones",
              component: ListaCotizaciones,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/CatalogoRegistro",
              meta: { label: "CatalogoRegistro" },
              name: "Lista de catalogo",
              component:CatalogoRegistro,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/formcotizacionmano",
              meta: { label: "FormcotizacionMano" },
              name: "Cotizacion mano obra",
              component: FormCotizacionMano,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
          
          ]
        },
        {
          path: "flotilla",
          meta: { label: "Flotilla" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: ListaFlotilla,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            }
          ]
        },

        {
          path: "perfil",
          meta: { label: "Perfil" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "recordatorios",
              meta: { label: "Recordatorios" },
              name: "Recordatorios",
              component: Recordatorio,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "tablero",
              meta: { label: "Tablero" },
              name: "PerfilTablero",
              component: Tablero,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "detalles",
              meta: { label: "Detalles" },
              name: "Detalles",
              component: PerfilDetalles,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "editar",
              meta: { label: "Editar" },
              name: "Editar",
              component: PerfilEditar,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            }
          ]
        },
        {
          path: "usuarios",
          meta: { label: "Usuarios" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: Users,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: ":id",
              meta: { label: "User Details" },
              name: "User",
              component: User,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: ":id/edit",
              meta: { label: "Edit User" },
              name: "EditUser",
              component: EditUser,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            }
          ]
        },
        {
          path: "vehiculos",
        
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "/piso",
              component: Piso,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/recepcion",
              meta: { label: "Recepcion" },
              name: "Recepcion Vehículos",
              component: Recepcion,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "editarvehiculo/:id",
              meta: { label: "EditarVehiculo" },
              name: "Editar Vehículo",
              component: EditarVehiculo,
              meta: {
                requiresAdmin: true,
                permissions: ["flotillav.edit", "clientev.edit","vehiculo.edit","flotillav.show", "clientev.show","vehiculo.show"]
              }
            },
            {
              path: "detallesv/:id",
              meta: { label: "DetallesV" },
              name: "Detalles Vehículos",
              component: DetallesV,
              meta: {
                requiresAdmin: true,
                permissions: ["flotillav.show", "clientev.show","vehiculo.show"]
              }
            },
            {
              path: "/listamarcas",
              meta: { label: "ListaMarcas" },
              name: "Lista de marcas",
              component: ListaMarcas,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/marcasmod",
              meta: { label: "MarcasMod" },
              name: "Marcas y modelos",
              component: MarcasMod,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            }
          ]
        },
        {
          path: "notes",
          meta: { label: "Notes" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: Notes,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: "create",
              meta: { label: "Create Note" },
              name: "CreateNote",
              component: CreateNote,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: ":id",
              meta: { label: "Note Details" },
              name: "Note",
              component: Note,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: ":id/edit",
              meta: { label: "Edit Note" },
              name: "EditNote",
              component: EditNote,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            }
          ]
        },
        {
         path: "roles",
        //  meta: { label: "Roles" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: Roles,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: "/createrol",
              meta: { label: "Create Role" },
              name: "Create Note",
              component: CreateRole,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: ":id",
              meta: { label: "Role Details" },
              name: "Role",
              component: Role,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: ":id/edit",
              meta: { label: "Edit Role" },
              name: "Edit Role",
              component: EditRole,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: "/nvorol",
              meta: { label: "Create Role" },
              name: "Crear rol",
              component: NvoRol,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
          ]
        },
        {
          path: "",
          meta: { label: "Servicios" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "/servicios/:id",
              component: Servicios,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/diagnostico",
              meta: { label: "Diagnostico" },
              name: "Diagnostico",
              component: Diagnostico,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/pagosygastos",
              meta: { label: "pagos" },
              name: "Pagos",
              component: PagosGastos,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/ordendetrabajo",
              meta: { label: "ordentrabajo" },
              name: "Orden de trabajo",
              component: OrdendeTrabajo,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/encuesta",
              meta: { label: "encuesta" },
              name: "Encuesta",
              component: Encuesta,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/imprimirrecepcion",
              meta: { label: "imprecepcion" },
              name: "Imprimir recepcion",
              component: ImprimirRecepcion,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/imprimirfactura",
              meta: { label: "impfactura" },
              name: "Imprimir factura",
              component: ImprimirFactura,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/imprimircontradoad",
              meta: { label: "impcontrato" },
              name: "Imprimir contrato",
              component: ImprimirContratoAd,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/imprimircotizacion",
              meta: { label: "impcotizacion" },
              name: "Imprimir ctizacion",
              component: ImprimirCotizacion,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/imprimirconformidad",
              meta: { label: "impconformidad" },
              name: "Imprimir conformidad",
              component: ImprimirConformidad,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "tomarfotos",
              meta: { label: "impcontrato" },
              name: "Imprimir contrato",
              component: TomarFotos,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
            {
              path: "/mensajes",
              meta: { label: "mensajes" },
              name: "Mensajes",
              component: Mensajes,
              meta: {
                requiresAdmin: true,
                permissions: ["global"]
              }
            },
          ]
        },
        {
          path: "email",
          meta: { label: "Emails" },
          component: {
            render(c) {
              return c("router-view");
            }
          },
          children: [
            {
              path: "",
              component: Emails,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: "create",
              meta: { label: "Create Email Template" },
              name: "Create Email Template",
              component: CreateEmail,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: ":id",
              meta: { label: "Show Email Template" },
              name: "Show Email Tempalte",
              component: ShowEmail,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: ":id/edit",
              meta: { label: "Edit Email Tempalate" },
              name: "Edit Email Template",
              component: EditEmail,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            },
            {
              path: ":id/sendEmail",
              meta: { label: "Send Email" },
              name: "Send Email",
              component: SendEmail,
              meta: {
                requiresAdmin: true,
                permissions: []
              }
            }
          ]
        }
      ]
    },
    {
      path: "/pages",
      redirect: "/pages/404",
      name: "Pages",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "404",
          name: "Page404",
          component: Page404
        },
        {
          path: "500",
          name: "Page500",
          component: Page500
        }
      ]
    },
    {
      path: "/",
      redirect: "/login",
      name: "Auth",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "login",
          name: "Login",
          component: Login
        },
        {
          path: "register",
          name: "Register",
          component: Register
        },
        {
          path: "password-restablecer",
          name: "Restablecer",
          component: Register
        }
      ]
    },
    {
      path: "*",
      name: "404",
      component: Page404
    }
  ];
}
