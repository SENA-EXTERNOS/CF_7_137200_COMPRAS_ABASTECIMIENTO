<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Incoterms
    
    .row.mb-5
      .col-lg-7
        p Cuando dos personas realizan una negociación de tipo internacional, ya sea para importar o exportar mercancías, se deberán establecer una serie de términos, condiciones, derechos y obligaciones dentro del contrato, donde cada uno deberá cumplir con las respectivas responsabilidades asignadas y estipuladas. Dentro de estos criterios se tienen las reglas Incoterms, las cuales se clasifican de diferente manera por medio de tres letras con las cuales se especifica el tipo de operatividad a la que se comprometen cada uno de los participantes en la negociación (comprador y vendedor) en cuanto al transporte de los productos adquiridos, tanto los lugares de entrega, costos de fletes, formas de pago y seguros que cada una de las partes deberá efectuar. Existen reglas específicas para el transporte marítimo y las demás se podrán aplicar para cualquier otro medio de transporte diferente.
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/Tema3/cr1.png")



    h3.mb-5(data-aos="fade-right")  Tipos
      
    p Se tienen reglas Incoterms para transporte marítimo y para cualquier otro tipo de medio de transporte, dentro de las cuales están:
    
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-8
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/Tema3/ptocaliente.svg', alt='Texto que describa la imagen')
              

          .tarjeta.color-primario.p-3(x="38%" y="51%" numero="+")          
            
            ul.lista-ul--
              li 
                i.fas.fa-angle-right.yelllow
                |  #[i   Cost and Freight (CFR)] 
              li 
                i.fas.fa-angle-right.yelllow
                |  #[i   Cost, Insurance, and Freight (CIF)]
              li 
                i.fas.fa-angle-right.yelllow
                |  #[i   Free Alongside Ship (FAS)] 
              li 
                i.fas.fa-angle-right.yelllow
                |  #[i   Free On Board (FOB)] 

          
          .tarjeta.color-primario.p-3(x="97%" y="51%" numero="+")
            ul.lista-ul--
              li 
                i.fas.fa-angle-right.yelllow
                |  #[i   Carriage and Insurance Paid To (CIP)] 
              li 
                i.fas.fa-angle-right.yelllow
                |  #[i   Carriage Paid To (CPT)]
              li 
                i.fas.fa-angle-right.yelllow
                |  #[i   Delivered At Place (DAP)] 
              li 
                i.fas.fa-angle-right.yelllow
                |  #[i   Delivered Duty Paid (DDP)] 
              li 
                i.fas.fa-angle-right.yelllow
                |  #[i   Delivered at Place Unloaded (DPU)] 
              li 
                i.fas.fa-angle-right.yelllow
                |  #[i   Ex-Works (EXW)] 
              li 
                i.fas.fa-angle-right.yelllow
                |  #[i   Free Carrier (FCA)] 


          




    
    
    h3.mb-5(data-aos="fade-right") Características

    .row.mb-4 
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/Tema3/cr2.svg" width='78px' height='78px')
      .col-lg-10
        p Las reglas Incoterms, como ya se pudo observar, se clasifican en diferentes tipos dependiendo de los acuerdos y de cómo mejor le convenga a cada uno de los participantes, es por ello que cada regla comprende unas características que se deben tener en cuenta para la importación y exportación de las mercancías, en las que los actores deberán hacerse responsables de estas fases según la norma seleccionada.


    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 3
      br
      span.fst-italic Características de las reglas Incoterms


    .row.mt-5
      .col-lg-11
        figure.mb-5
          img(src="@/assets/curso/temas/Tema3/img4.png")
    




    h3.mb-5(data-aos="fade-right")  Alcance

    .row.align-items-center.mb-4
      .col-lg-2
        figure
          img(src="@/assets/curso/temas/Tema3/img11.svg" width='190px' height='121px')
      .col-lg-10
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p.mb-0 Las reglas Incoterms son términos internacionales que comprometen a compradores y vendedores de mercancías para importar o exportar. Anteriormente, se evidenció que se clasifican de diferentes formas según las condiciones impuestas y negociadas, las cuales comprenden unas ciertas características que limitan el alcance de cada una de las obligaciones para los actores de la negociación. A continuación, se ilustrará el alcance de las responsabilidades a las cuales se deben comprometer tanto el comprador como el vendedor, según el tipo de norma que hayan determinado para llevar a cabo la negociación.


    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1
      br
      span.fst-italic Alcance de las reglas incoterms


    .row
      .col-lg-12
        figure
          img(src="@/assets/curso/temas/Tema3/img6.png").mb-3
        figcaption Nota: ajustado de Marañón (2019).





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
