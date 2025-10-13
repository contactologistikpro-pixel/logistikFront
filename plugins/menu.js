const routes = [
  {
    title: "Inicio",
    action: "mdi-home"
  },
  {
    title: "Usurios",
    action: "mdi-account-group"
  },
  {
    title: "Clientes",
    action: "mdi-account-multiple"
  },
  {
    title: "Provedores",
    action: "mdi-truck"
  },
  {
    title: "Productos",
    action: "mdi-cube"
  },
  {
    title: "Categorias",
    action: "mdi-tag-multiple"
  },
  {
    title: "Comercios Afiliados",
    action: "mdi-store"
  },
  {
    title: "Ventas",
    action: "mdi-cart"
  },
  {
    title: "Compras",
    action: "mdi-cart-arrow-down"
  },
  {
    title: "Caja",
    action: "mdi-cash-register"
  },
  {
    title: "Reportes",
    action: "mdi-chart-box",
    items: [
      {
        title: "Ver Reportes",
        action: "mdi-file-chart"
      },
      {
        title: "Gastos",
        action: "mdi-currency-usd"
      },
      {
        title: "Reporte Financiero",
        action: "mdi-finance"
      }
    ]
  },
  {
    title: "Configuraciones",
    action: "mdi-cog"
  },
  {
    title: "Roles y Permisos",
    action: "mdi-shield-account"
  }

]

export default ({ app }, inject) => {
  inject("menu", routes);
};
