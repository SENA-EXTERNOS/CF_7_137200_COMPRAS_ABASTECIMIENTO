<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Órdenes de compra
    
    .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p Cuando una empresa ha realizado todo el proceso de búsqueda, elección y negociación con los proveedores de acuerdo con políticas, métodos, técnicas y procedimientos, para lograr seleccionar los mejores proveedores de acuerdo con los objetivos que fueron trazados y planificados, se procederá a enviar las órdenes de compra a los proveedores para que envíen los productos requeridos a la empresa, según los parámetros y criterios establecidos en la negociación. 
    
    .row
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/Tema4/img1.svg")
      .col-lg-8
        
            p.mb-0 Pero,
              b ¿Qué es una orden de compra?
            p.mt-3 Es un documento elaborado para tener una comunicación eficiente entre proveedor y comprador, evitando así que se quede información en el aire, y al mismo tiempo, para que se pueda contar con un instrumento formal que sirva de constancia por si se presenta cualquier inconveniente legal. Dentro de este documento deberá ir estipulada toda la información acerca del pedido solicitado: lugar de entrega, tipos de productos o servicios, cantidad, precios, métodos y fechas de pago. Este documento puede ser enviado de forma física o digital a través de una plataforma 
              i web 
              | o 
              i software 
              | especializado.


      Separador

    #t_4_1
    
    .titulo-segundo.color-acento-contenido
      h2 4.1  Tipos

    .row
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/Tema4/img2.svg")
        
      .col-lg-10
        p Las órdenes de compra son documentos elaborados para brindar una mejor comunicación entre el comprador y el vendedor. En ellas deberá ir determinado cada uno de los elementos esenciales para dar cumplimiento a la entrega de la mercancía. Estas órdenes se pueden clasificar en cuatro (4) tipos: estándar, planificada, abierta y por contrato:


    .row.justify-content-center.align-items-center.mt-4
      .col-lg-7
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/Tema4/ptocaliente.svg', alt='Texto que describa la imagen')
              

          .tarjeta.color-acento-contenido.p-3(x="9%" y="8%" numero="1")
            
            p Este tipo de orden es la más empleada por la mayoría de las empresas, debido a que integra elementos esenciales y suficientes (detalles, precio, cantidad, fecha de entrega, métodos de pago y lugar de entrega) para la compra de productos o servicios a determinado proveedor con el cual no son muy frecuentes las negociaciones.
          
          .tarjeta.color-acento-contenido.p-3(x="33%" y="45%" numero="2")            
            p Las órdenes de compra planificadas tienen casi las mismas características de la orden estándar, con una única excepción, y es que en esta metodología no se conoce la fecha de entrega, esto porque es creada con anticipación, ya se tiene una planificación anticipada, la cual permite establecer las órdenes de compra. Para cuando se dé el momento de la entrega, ya el proveedor tendrá presentes los productos o servicios que el cliente desea adquirir, para así poder cumplir con sus pedidos.
          
          .tarjeta.color-acento-contenido.p-3(x="56.5%" y="8%" numero="3")            
            p Cuando una empresa sabe que va a necesitar ciertos bienes o servicios en un determinado periodo de tiempo, se tiende a emplear la orden de compra abierta, debido a que no se tiene establecida la cantidad, ni las fechas de entrega. El principal objetivo de esta orden es poner en aviso al proveedor para que esté preparado en cualquier momento para despachar los pedidos con las cantidades necesarias y en las fechas correspondientes. De esta forma, los empresarios lograrán acordar términos y precios de manera anticipada, lo cual puede llegar a ser muy beneficioso.
          
          .tarjeta.color-acento-contenido.p-3(x="80%" y="45%" numero="4")            
            p Cuando la empresa y el proveedor entablan negociaciones y llegan a ciertos acuerdos en cuanto a la compra de productos o servicios a largo plazo, se procede a firmar una orden de compra por contrato, donde se determinan los términos y condiciones legales para las futuras adquisiciones. Teniendo estos acuerdos firmados, en un futuro, cuando la organización necesite de sus productos o servicios, creará una orden de compra estándar con los criterios que han sido acordados en el contrato anteriormente firmado.

      Separador

    #t_4_2
    
    .titulo-segundo.color-acento-contenido
      h2 4.2  Formas y métodos de diligenciamiento

    .row.justify-content-center.align-items-center.mt-4
      .col-lg-8
        p Para llevar a cabo el diligenciamiento de una orden de compra lo principal es tener presente la información pertinente y completa para que no se vayan a presentar inconvenientes con los pedidos, lo cual podría generar malestar en las partes. Es por esto que es de gran importancia dejar claros y estipulados cada uno de los elementos que debe contener, los cuales son:
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/Tema4/img3.svg")
    
    SlyderF(columnas="col-lg-6 col-xl-4").mt-5
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema4/tj1.png' alt='AvatarTop')
        h4.text-center.mt-5 Fecha de elaboración
       
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema4/tj2.png' alt='AvatarTop')
        h4.text-center.mt-5 Número de orden
      
        
      .tarjeta.color-acento-contenido.p-1
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema4/tj3.png' alt='AvatarTop')
        h4.text-center Información del comprador
        p.text-center.text-small Nombre, identificación, teléfono, correo electrónico y dirección.

      .tarjeta.color-acento-contenido.p-1
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema4/tj4.png' alt='AvatarTop')
        h4.text-center Información del vendedor
        p.text-center.text-small Nombre, identificación, teléfono, correo electrónico y dirección.

      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema4/tj5.png' alt='AvatarTop')
        h4.text-center Datos de entrega
        p.text-center.text-small Fecha y lugar.

      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema4/tj6.png' alt='AvatarTop')
        h4.text-center Datos de facturación
        p.text-center.text-small Dirección de entrega.

      .tarjeta.color-acento-contenido.p-2
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema4/tj7.png' alt='AvatarTop')
        h4.text-center Datos del pedido
        p.text-center.text-small Especificaciones del producto o servicio, cantidad, precio unitario, precio final y valor total.

      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/Tema4/tj8.png' alt='AvatarTop')
        h4.text-center Autorización
        p.text-center.text-small Firma del encargado de la orden de la compra.


      Separador

    #t_4_3
    
    .titulo-segundo.color-acento-contenido
      h2 4.3  Condiciones de las órdenes de compras

    .row
      .col-lg-4
        figure
           img(src='@/assets/curso/temas/Tema4/img4.svg' alt='AvatarTop')
      .col-lg-8
        p Los términos y condiciones de cualquier contrato sirven para brindarle una legalidad al acuerdo al que se haya llegado con la contraparte; allí deberán estar estipulados todos los parámetros y criterios a tener en cuenta en la puesta en marcha del proyecto para, en un futuro, estar blindados ante cualquier situación indebida que se llegase a presentar y que pudiese afectar a alguna de las partes. A continuación, se establecerán las condiciones para tener en cuenta en una orden de compras:
        p.mt-3 La primera de ellas es el ‘objeto’, el cual determina la compra de unos bienes o servicios que deberán ser entregados por el proveedor en el estado acordado con el comprador. También debe quedar establecido el ‘lugar de entrega’, donde se especificará que el proveedor deberá encargarse de los costos y la entrega de los productos en el sitio acordado. Dentro de este documento también deberán quedar determinados los ‘precios’ definidos, donde cada uno de ellos debe comprometerse a respetarlos, además de las ‘fechas estipuladas para los pagos’.
        p.mt-3 El proveedor deberá precisar las ‘garantías’ con las que le va a responder a su cliente en caso de que sus productos no cumplan con lo determinado en la negociación. En las compras y ventas se incluyen una serie de ‘impuestos’, para ello se deberá determinar entre las partes quien será el encargado de dicho pago y esto debe consignarse en el contrato. Así mismo, las partes deberán acordar las ‘multas’ en las que incurrirá la persona que incumpla con los parámetros acordados. Finalmente, será necesario refrendar un ‘acuerdo de confidencialidad’, por lo cual las partes están obligadas a no divulgar ninguno de los acuerdos firmados.


      Separador

    #t_4_4
    
    .titulo-segundo.color-acento-contenido
      h2 4.4 Tipos de #[i software] 


    .row
      .col-lg-9.mt-2
        p Se sabe que la tecnología es un pilar fundamental en los procesos administrativos, ayudando a optimizar una serie de recursos importantes en la organización, los cuales harán que los procedimientos se realicen de una manera más eficiente, sin emplear mucho más tiempo, logrando ahorrar mucho dinero y facilitando la realización de diversas tareas.
        p.mt-3 Para el proceso de órdenes de compra existen diversidad de 
          i softwares 
          | que permiten la automatización del proceso, logrando que se realice de manera eficiente y disminuyendo los errores que se pueden cometer de forma manual. Con estas herramientas se podrán crear documentos de órdenes de compras de acuerdo con las necesidades y requerimientos de la organización, siendo muy precisos en lo que se quiere. Así, se logrará contar con un flujo de trabajo automatizado en el que las actividades se asignan sin inconvenientes y su aprobación se da de manera rápida. Otra de las ventajas es que ayudará en la recolección de información de órdenes, solicitudes, facturas, etc. Se encargará de organizarlas y de comparar datos para que puedan ser analizados y con ellos ayudar a la toma de decisiones.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/Tema4/img5.svg' alt='AvatarTop')

    .row.mt-4  
      .col-lg-12
        .cajon.color-acento-botones.p-4
          
          p Aprendiz, ha finalizado el estudio de este componente formativo, a continuación encontrará una síntesis para recordar cada temática vista, además de la actividad didáctica y los materiales complementarios para que afiance sus conocimientos frente a la programación, ejecución y revisión del proceso de compras.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
