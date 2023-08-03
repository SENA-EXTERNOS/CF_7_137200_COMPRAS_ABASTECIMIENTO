export default {
  global: {
    componenteFormativo:
      'Programación, ejecución y revisión del proceso de compras',
    descripcionCurso:
      'Este componente tiene como objetivo que el aprendiz adquiera conocimientos relacionados con las políticas de aprovisionamiento y sus alcances. Conocerá qué se debe tener en cuenta al momento de realizar una negociación, sus condiciones y la información que debe contener una cotización. Así mismo, podrá identificar las reglas Incoterms empleadas para importaciones, exportaciones y órdenes de compra. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Políticas de aprovisionamiento',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Negociación ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Incoterms',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Órdenes de compra',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Negociación',
      referencia:
        'Flint, P. (2004). <em>La Negociación Empresarial.</em> Esan ediciones',
      tipo: 'PDF',
      link:
        'https://repositorio.esan.edu.pe/bitstream/handle/20.500.12640/2942/MaterialDidactico4Negociacion.pdf?sequence=1&isAllowed=y ',
    },
    {
      tema: 'Políticas de aprovisionamiento',
      referencia:
        'Peña Delgado, K. G. (2019).<em> Diseño e Implementación de políticas empresariales en la empresa</em> CLASEM SAC. [Tesis de pregrado] Repositorio institucional Universidad Nacional Tecnológica de Lima Sur ',
      tipo: 'PDF',
      link:
        'https://repositorio.untels.edu.pe/jspui/bitstream/123456789/81/1/Pe%C3%B1a_Kimberly_Trabajo_Suficiencia_2019.pdf ',
    },
    {
      tema: 'Incoterms',
      referencia:
        'Cámara de Comercio de Bogotá (2008). <em>Los INCOTERMS y su uso en el comercio internacional.</em> ',
      tipo: 'PDF',
      link:
        'https://bibliotecadigital.ccb.org.co/items/efbfa1e8-3dd4-4c68-97a1-2fe5403aa448',
    },
    {
      tema: 'Órdenes de compra',
      referencia:
        'Montalvo, M., & Yudeli, M. (2014). Tipos de <em>software</em> de manufactura virtual: una comparación en rendimiento y eficacia en el sector industrial. [Tesis de pregrado] Repositorio institucional Universidad de Montemorelos ',
      tipo: 'PDF',
      link:
        'https://dspace.um.edu.mx/bitstream/handle/20.500.11972/1151/Proyecto%20de%20Maylin%20Yudeli%20Morales%20Montalvo.pdf?sequence=1&isAllowed=y ',
    },
  ],
  glosario: [
    {
      termino: 'Adquisición',
      significado:
        'obtención de bienes, servicios, cosas, materias primas o diferentes productos que se alcanzan para poder cumplir con la productividad de la empresa.',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'guardado de todas las materias primas, insumos, productos semielaborados y terminados, para lo cual se deberán establecer unos criterios que permitan agrupar la mayor cantidad de mercancía posible de manera ordenada, siempre teniendo presente la buena conservación del producto.',
    },
    {
      termino: 'Aprovisionamiento',
      significado:
        'es el acto y el resultado de suministrar determinados recursos (Westreicher, 2020).',
    },
    {
      termino: 'Compras',
      significado:
        'es la adquisición de un producto o servicio a cambio del pago en dinero o especie.',
    },
    {
      termino: 'Influencia',
      significado:
        'es una práctica que emplean las personas para tratar de persuadir a otros con el fin de obtener sus propósitos.',
    },
    {
      termino: 'Metodología',
      significado:
        'es el estudio de ciertos procedimientos, analizando los pasos que llevan a cabo los investigadores y los instrumentos empleados en esa labor (Westreicher, 2020).',
    },
    {
      termino: 'Negociación',
      significado:
        'es el proceso llevado a cabo entre dos o más personas con el fin de llegar a acuerdos, donde cada cual pueda obtener sus beneficios.',
    },
    {
      termino: 'Oferta',
      significado:
        'Capacidad y acción de poner a disposición un producto, un bien, un servicio o cualquier material o cosa que otros puedan obtener para uso, beneficio o satisfacción de necesidades.',
    },
    {
      termino: 'Orden',
      significado:
        'es un documento mediante el cual el comprador solicita mercancías al vendedor (Arias, 2020).',
    },
    {
      termino: 'Políticas',
      significado:
        'son un conjunto de situaciones y decisiones estipuladas por parte de dos o más personas que tienen un alto nivel jerárquico o poder sobre un determinado grupo de individuos que realizan cierto tipo de labores.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fisher, R., Ury, W., & Patton, B. (1981).<em> Getting to YES.</em> Gramedia Pustaka Utama.',
      link:
        'https://www.rhetoricinstitute.edu.gr/wp-content/uploads/2017/09/fisher-getting-to-yes.pdf',
    },
    {
      referencia: 'Marañón, O. M. (2019). <em>Imeanticipa.</em> ',
      link: 'https://imeanticipa.com/las-7-novedades-de-los-incoterms-2020/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
