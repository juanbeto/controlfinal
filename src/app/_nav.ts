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
    icon: 'cui-note',
    children: [
      /*{
        name: 'Areas',
        url: '/base/areas',
        icon: 'icon-puzzle'
      },*/
      {
        name: 'Preguntas',
        url: '/base/question',
        icon: 'cui-task'
      },
      {
        name: 'Formatos',
        url: '/base/formatos',
        icon: 'cui-info'
      },
      {
        name: 'Programas',
        url: '/base/programas',
        icon: 'cui-file'
      },
      {
        name: 'Auditorias',
        url: '/base/auditoria',
        icon: 'cui-list'
      },


      {
        name: 'Informes',
        url: '/base/inform',
        icon: 'icon-puzzle'
      },



    ]
  },

  {
    name: 'Plan de Mejoramiento',
    url: '/planes',
    icon: 'icon-star',
    children: [
      {
        name: 'Plan de Mejoramiento',
        url: '/planes/planes_mejoramiento',
        icon: 'icon-star',

      },
      {
        name: 'Reportes',
        url: '/icons/reports',
        icon: 'icon-star'
      },

    ]
  },


  {
    name: 'Administracion de Riesgos',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [

      {
        name: 'Politica de Riesgos',
        url: '/buttons/politica',
        icon: 'icon-cursor'
      },

      {
        name: 'Identificacion del Riesgo',
        url: '/buttons/identificacion_riesgo',
        icon: 'icon-cursor'
      },

      {
        name: 'Valoracion del Riesgo',
        url: '/buttons/valoracion',
        icon: 'icon-cursor'
      },

      {
        name: 'Contexto Estrategico',
        url: '/buttons/contexto_estrategico',
        icon: 'icon-cursor'
      },

      {
        name: 'Analisis del Riesgo',
        url: '/buttons/analisis_riesgo',
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




];
