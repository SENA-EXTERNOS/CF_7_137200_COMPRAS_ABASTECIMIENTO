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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Alcance',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Negociación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Condiciones de negociación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '	Oferta del proveedor',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Cotizaciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Incoterms',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Alcance',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Órdenes de compra',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Formas y métodos de diligenciamiento',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Condiciones de las órdenes de compras',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Tipos de <em>software</em>',
            hash: 't_4_4',
          },
        ],
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
      tema: 'La negociación empresarial',
      referencia:
        'Flint, P. (2004). <em>La Negociación Empresarial.</em> Esan ediciones',
      tipo: 'PDF',
      link:
        'https://repositorio.esan.edu.pe/bitstream/handle/20.500.12640/2942/MaterialDidactico4Negociacion.pdf?sequence=1&isAllowed=y ',
    },
    {
      tema:
        'Diseño e implementación de políticas empresariales en la empresa CLASEM SAC',
      referencia:
        'Peña Delgado, K. G. (2019).<em> Diseño e Implementación de políticas empresariales en la empresa</em> CLASEM SAC. [Tesis de pregrado] Repositorio institucional Universidad Nacional Tecnológica de Lima Sur ',
      tipo: 'PDF',
      link:
        'https://repositorio.untels.edu.pe/jspui/bitstream/123456789/81/1/Pe%C3%B1a_Kimberly_Trabajo_Suficiencia_2019.pdf ',
    },
    {
      tema: 'Los INCOTERMS y su uso en el comercio internacional',
      referencia:
        'Cámara de Comercio de Bogotá (2008). <em>Los INCOTERMS y su uso en el comercio internacional.</em> ',
      tipo: 'PDF',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/3138/3053_Los_INCOTERMS_y_su_uso_en_el_comercio_internacional2.pdf?sequence=1&isAllowed=y ',
    },
    {
      tema:
        'Tipos de <em>software</em> de manufactura virtual: una comparación en rendimiento y eficacia en el sector industrial',
      referencia:
        'Montalvo, M., & Yudeli, M. (2014). Tipos de <em>software</em> de manufactura virtual: una comparación en rendimiento y eficacia en el sector industrial. [Tesis de pregrado] Repositorio institucional Universidad de Montemorelos ',
      tipo: 'PDF',
      link:
        'https://dspace.um.edu.mx/bitstream/handle/20.500.11972/1151/Proyecto%20de%20Maylin%20Yudeli%20Morales%20Montalvo.pdf?sequence=1&isAllowed=y ',
    },
  ],
  glosario: [
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
      termino: 'Orden',
      significado:
        'es un documento mediante el cual el comprador solicita mercancías al vendedor (Arias, 2020).',
    },
  ],
  referencias: [
    {
      referencia: 'Arias, E. R. (2020). <em>Economipedia.</em> ',
      link: 'https://economipedia.com/definiciones/orden-de-compra.html ',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá (2008). Los INCOTERMS y su uso en el comercio internacional. ',
    },
    {
      referencia:
        'Fisher, R., Ury, W., & Patton, B. (1981).<em> Getting to YES.</em> Gramedia Pustaka Utama.',
      link: '',
    },
    {
      referencia:
        'Flint, P. (2004).<em> La Negociación Empresarial.</em> Esan ediciones',
      link: '',
    },
    {
      referencia: 'Marañón, O. M. (2019). <em>Imeanticipa.</em> ',
      link: 'https://imeanticipa.com/las-7-novedades-de-los-incoterms-2020/ ',
    },

    {
      referencia:
        'Montalvo, M., & Yudeli, M. (2014). <em>Tipos de software de manufactura virtual: una comparación en rendimiento y eficacia en el sector industrial. [Tesis de pregrado] </em> Repositorio institucional Universidad de Montemorelos ',
      link: '',
    },
    {
      referencia: 'Westreicher, G. (2020).<em> Economipedia.</em> Obtenido de ',
      link: 'https://economipedia.com/definiciones/aprovisionamiento.html ',
    },
    {
      referencia: 'Westreicher, G. (2020). Economipedia.',
      link:
        'https://economipedia.com/definiciones/diferencia-entre-metodo-y-metodologia.html ',
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
