const routes = [
  {
    title: "Inicio",
    action: "mdi-home",
    to: "/inicio",
    items: [
      { title: "manejo", to: "/inicio/manejo" },
    ]
  },
  {
    title: "Ventas",
    action: "mdi-cart",
    items: [
      { title: "Nueva Venta", to: "/ventas/nueva" },
      { title: "Historial de Ventas", to: "/ventas/historial" }
    ]
  },

  {
    title: "Clientes",
    action: "mdi-account-multiple",
    items: [
      { title: "Lista de Clientes", to: "/clientes/principal" },
    ]
  },
  {
    title: "Proveedores",
    action: "mdi-truck",
    items: [
      { title: "Lista de Proveedores", to: "/proveedores/lista" },
      { title: "Registrar Proveedor", to: "/proveedores/nuevo" }
    ]
  },
  {
    title: "Productos",
    action: "mdi-clipboard-list-outline",
    items: [
      { title: "Inventario", to: "/productos/inventario" },
      { title: "Agregar Producto", to: "/productos/agregar" },
      { title: "Categorías", to: "/productos/categorias" }
    ]
  },
  {
    title: "Comercios Afiliados",
    action: "mdi-store"
  },

  {
    title: "Compras",
    action: "mdi-cart-arrow-down",
    items: [
      { title: "Registrar Compra", to: "/compras/nueva" },
      { title: "Historial de Compras", to: "/compras/historial" }
    ]
  },
  {
    title: "Caja",
    action: "mdi-cash-register",
    items: [
      { title: "Movimientos", to: "/caja/movimientos" },
      { title: "Apertura y Cierre", to: "/caja/apertura-cierre" }
    ]
  },
  {
    title: "Reportes",
    action: "mdi-chart-line",
    items: [
      { title: "Ver Reportes", to: "/reportes/ver" },
      { title: "Gastos", to: "/reportes/gastos" },
      { title: "Reporte Financiero", to: "/reportes/financiero" }
    ]
  },

  {
    title: "Roles y Permisos",
    action: "mdi-shield-account",
    items: [
      { title: "Roles", to: "/seguridad/roles" },
      { title: "Permisos", to: "/seguridad/permisos" }
    ]
  },
  {
    title: "Usuarios",
    action: "mdi-account-group",
    items: [
      { title: "Lista de Usuarios", to: "/usuarios/lista" },
      { title: "Nuevo Usuario", to: "/usuarios/nuevo" }
    ]
  },
  {
    title: "Configuracion",
    action: "mdi-hammer-wrench",
    items: [
      { title: "General", to: "/configuracion/general" }
    ]
  },
];

export default ({ app }, inject) => {
  inject("menu", routes);
};
