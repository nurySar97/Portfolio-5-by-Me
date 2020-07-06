$(function(){


    

    // Filter
    let filter = $("[data-filter]")
    filter.on("click", function(event){
        event.preventDefault()
        
        let cat = $(this).data("filter")
        console.log(cat)

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide")
        }else {
            $("[data-cat]").each(function(){

                let workCat = $(this).data("cat")
    
                if(workCat != cat) {
                    $(this).addClass('hide');
                }else {
                    $(this).removeClass('hide')
                }
            })
        }
    })




    // Modal
    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on("click",function(event){
        event.preventDefault()
        let $this = $(this);
        let modalId = $this.data('modal')

        $(modalId).addClass('show')

        $('body').addClass('no-scroll')



        
        // Animation
        setTimeout(function(){
            $(modalId).find('.modal__dialog').css({
                transform:"rotateX(0)"
            })
        },200)


        $('#worksSlider').slick("setPosition")
        
    })




    modalClose.on("click",function(event){
        event.preventDefault()
        let $this = $(this);
        let modalParent = $this.parents('.modal')

        modalParent.find('.modal__dialog').css({
            transform:"rotateX(90deg)"
        })


        // Animation
        setTimeout(function(){
            modalParent.removeClass('show')
            $('body').removeClass('no-scroll')
        },200)
        
    })



    $('.modal').on("click",function(event){
        let $this = $(this)
        $this.find('.modal__dialog').css({
            transform:"rotateX(90deg)"
        })

        // Animation
        setTimeout(function(){
            $this.removeClass('show')
            $('body').removeClass('no-scroll')
        },200)
        
        event.preventDefault()

    })


    $('.modal__dialog').on("click",function(event){
        event.stopPropagation()
    })



    // Slider: https://kenwheeler.github.io/slick/


    $('#worksSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,
        dots:true
      });



      let slickButtonBack = $('#slick-slide-control00')
      let slickButtonNext = $('#slick-slide-control01')


      slickButtonBack.on("click",function(){
          slickButtonBack.css({"backgroundColor":"#fff"})
          slickButtonNext.css({"backgroundColor":"transparent"})
      })


      slickButtonNext.on("click", function(){
        slickButtonBack.css({"backgroundColor":"transparent"})
        slickButtonNext.css({"backgroundColor":"#fff"})
      })




      let nav = $(".nav")
      let span = $(".span")
      let a = 0

      span.on("click",function(){
          nav.toggleClass("navShow");
          a++

          if(a%2 == 0) {
              nav.css({"display":"none"})
          }else{
              nav.css({"display":"flex"})
          }
      })
})