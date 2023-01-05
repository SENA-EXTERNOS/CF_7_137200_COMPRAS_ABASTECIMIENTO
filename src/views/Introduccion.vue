<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg-7.mt-3
        p Apreciado aprendiz, bienvenido a este componente formativo, donde usted afianzará afianzará conocimientos relacionados con las políticas de aprovisionamiento, las características y sus alcances. Además, evidenciará cómo se debe realizar una negociación, conociendo los tipos existentes y las condiciones que se deben interponer para que se lleve a cabo de manera responsable y legal.
          br
          br
          |También aprenderá cómo se presentan las ofertas de un proveedor y la importancia de estas, así como la realización de cotizaciones para poder lograr una buena adquisición. Dentro de estas habilidades, es importante que conozca qué es una orden de compra, las clases, importancia y elementos que debe contener. Igualmente, se informará sobre las reglas Incoterms y su relevancia al momento de realizar un intercambio en el exterior, con el fin de que, en caso de que se presente una oportunidad para ello, pueda saber cómo proceder de acuerdo con las mismas.
          br
          br
          |En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      .col-lg-5  
        figure
          img(src="@/assets/curso/temas/introduccion/c1.png", alt="Texto que describa la imagen")

    p.mt-3 A continuación, encontrará un video introductorio donde podrá visualizar de forma general las temáticas a desarrollar. ¡Mucha suerte!

    .row.mt-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption   VIDEO






    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
