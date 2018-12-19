export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  
  {
    name: 'Auditoria Interna',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Areas',
        url: '/base/areas',
        icon: 'icon-puzzle'
      },
      {
        name: 'Preguntas',
        url: '/base/question',
        icon: 'icon-puzzle'
      },
      {
        name: 'Formatos',
        url: '/base/formatos',
        icon: 'icon-puzzle'
      },
      {
        name: 'Programas',
        url: '/base/programas',
        icon: 'icon-puzzle'
      },
      {
        name: 'Auditorias',
        url: '/base/auditoria',
        icon: 'icon-puzzle'
      },
                 
     
    ]
  },
  {
    name: 'Administracion de Riesgos',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Contexto Estrategico',
        url: '/buttons/contexto_estrategico',
        icon: 'icon-cursor'
      },
      {
        name: 'Identificacion del Riesgo',
        url: '/buttons/identificacion_riesgo',
        icon: 'icon-cursor'
      },
      {
        name: 'Analisis del Riesgo',
        url: '/buttons/analisis_riesgo',
        icon: 'icon-cursor'
      },
      {
        name: 'Valoracion del Riesgo',
        url: '/buttons/valoracion',
        icon: 'icon-cursor'
      },
      {
        name: 'Matriz de Riesgo',
        url: '/buttons/matriz_riesgo',
        icon: 'icon-cursor'
      },
      {
        name: 'Politica de Riesgo',
        url: '/buttons/politica_riesgo',
        icon: 'icon-cursor'
      },
      {
        name: 'Seguimiento y monitoreo',
        url: '/buttons/seguimiento_riesgo',
        icon: 'icon-cursor'
      },
    ]
  },
  
  {
    name: 'Plan de Mejoramiento',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Indicadores',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  }
  
];
