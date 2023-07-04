var myLazyLoad = new LazyLoad();

const swiperWork = new Swiper(".work-slider", {
    effect: 'fade',
    loop: true,
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".work-slider__next",
        prevEl: ".work-slider__prev",
    }
});
const swiperPartners = new Swiper(".news-slider", {
    spaceBetween: 24,
    watchSlidesProgress: true,
    freeMode: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".news-slider__next",
        prevEl: ".news-slider__prev",
    }
});
if(window.innerWidth <= 992) {
    $('.advantage-list').addClass('swiper-wrapper')
    $('.advantage-item').addClass('swiper-slide')
    $('.advantage-item').addClass('active')
    const swiperAdvantage = new Swiper(".advantage-slider", {
        effect: 'fade',
        slidesPerView: 2,
        autoHeight: true,
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".advantage-slider__next",
            prevEl: ".advantage-slider__prev",
        },
        pagination: {
            el: ".advantage-slider-pagination",
            type: "fraction",
        },
    });
}

const swiperIntro = new Swiper(".intro-slider", {
    effect: 'fade',
    slidesPerView: 1,
    autoHeight: true,
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".intro-slider__next",
        prevEl: ".intro-slider__prev",
    },
    pagination: {
        el: ".intro-slider-panel-progress",
        type: "progressbar",
    },
});


const coverageImageElem = document.querySelector('.coverage-image input');

const coverageImageResize = () => {
    coverageImageElem.addEventListener('input', function () {
    document.querySelector('.coverage-image__resize').style.height = this.value + "%"; 
  })
}

if(coverageImageElem !== null) {
    coverageImageResize();
}



// jQuery function
$(document).ready(function() {
    function scrollUP() {
        let scrollBtn = $(".footer-up");
        scrollBtn.on("click", function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 1500);
        });
    };
    scrollUP();
    // phone mask
    function phoneMask() {
        if ($('input[type=tel]').length) {
            $('input[type=tel]').mask("+7 (999) 999-99-99");
        };
    };
    phoneMask()
    
    function mousewheelAbcense () {
        if($(window).width() <= 1310) {
            $(".absence-work-inner").mousewheel(function(event, delta) {
                this.scrollLeft -= (delta * 30);
                event.preventDefault();
            });
        } else {
            $(".absence-work-inner").mousewheel(function(event, delta) {
                return false
            });
        }
    }
    mousewheelAbcense()

    function selectCustom() {
        $('.select-title').click(function () {
            $('.select').toggleClass('active');
            
        })
        $(document).mouseup(function (e) {
            let container = $(".select");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.select').removeClass('active');
            }
        }); 
        $('.select-item').click(function() {
            $('.select-title').find('p').text($(this).find('p').text());
            $('.select-title input').val($(this).find('p').text());
            $('.select-item').removeClass('active');
            $(this).addClass('active');
            $('.select').removeClass('active');
        })
    }

    function formCheckbox() {
        $.each($('.popup-political'), function (index, val) {
            if ($(this).find('input').prop('checked') == true) {
                $(this).addClass('active');
            }
        });
    
        $(document).on('click', '.popup-political', function (event) {
            if ($(this).hasClass('active')) {
                $('.popup-form-button').removeClass('active')
            } else {
                $('.popup-form-button').addClass('active')
            }
            $(this).toggleClass('active');
            return false;
        });
    }
    formCheckbox();

    selectCustom()
    function spritespinHouse () {
        $("#mySpriteSpin").spritespin({
            animate: false,
            source: [
            "assets/img/intro/house/1_0001.webp",
            "assets/img/intro/house/1_0002.webp",
            "assets/img/intro/house/1_0003.webp",
            "assets/img/intro/house/1_0004.webp",
            "assets/img/intro/house/1_0005.webp",
            "assets/img/intro/house/1_0005.webp",
            "assets/img/intro/house/1_0006.webp",
            "assets/img/intro/house/1_0007.webp",
            "assets/img/intro/house/1_0008.webp",
            "assets/img/intro/house/1_0009.webp",
            "assets/img/intro/house/1_0010.webp",
            "assets/img/intro/house/1_0011.webp",
            "assets/img/intro/house/1_0012.webp",
            "assets/img/intro/house/1_0013.webp",
            "assets/img/intro/house/1_0014.webp",
            "assets/img/intro/house/1_0015.webp",
            "assets/img/intro/house/1_0016.webp",
            "assets/img/intro/house/1_0017.webp",
            "assets/img/intro/house/1_0018.webp",
            "assets/img/intro/house/1_0019.webp",
            "assets/img/intro/house/1_0020.webp",
            "assets/img/intro/house/1_0021.webp",
            "assets/img/intro/house/1_0022.webp",
            "assets/img/intro/house/1_0023.webp",
            "assets/img/intro/house/1_0024.webp",
            "assets/img/intro/house/1_0025.webp",
            "assets/img/intro/house/1_0026.webp",
            "assets/img/intro/house/1_0027.webp",
            "assets/img/intro/house/1_0028.webp",
            "assets/img/intro/house/1_0029.webp",
            "assets/img/intro/house/1_0031.webp",
            "assets/img/intro/house/1_0032.webp",
            "assets/img/intro/house/1_0033.webp",
            "assets/img/intro/house/1_0034.webp",
            "assets/img/intro/house/1_0035.webp",
            "assets/img/intro/house/1_0036.webp",
            "assets/img/intro/house/1_0037.webp",
            "assets/img/intro/house/1_0038.webp",
            "assets/img/intro/house/1_0039.webp",
            "assets/img/intro/house/1_0040.webp",
            "assets/img/intro/house/1_0041.webp",
            "assets/img/intro/house/1_0042.webp",
            "assets/img/intro/house/1_0043.webp",
            "assets/img/intro/house/1_0044.webp",
            "assets/img/intro/house/1_0045.webp",
            "assets/img/intro/house/1_0046.webp",
            "assets/img/intro/house/1_0047.webp",
            "assets/img/intro/house/1_0048.webp",
            "assets/img/intro/house/1_0049.webp",
            "assets/img/intro/house/1_0050.webp",
            "assets/img/intro/house/1_0051.webp",
            "assets/img/intro/house/1_0052.webp",
            "assets/img/intro/house/1_0053.webp",
            "assets/img/intro/house/1_0054.webp",
            "assets/img/intro/house/1_0055.webp",
            "assets/img/intro/house/1_0056.webp",
            "assets/img/intro/house/1_0057.webp",
            "assets/img/intro/house/1_0058.webp",
            "assets/img/intro/house/1_0059.webp",
            "assets/img/intro/house/1_0060.webp",
            "assets/img/intro/house/1_0061.webp",
            "assets/img/intro/house/1_0062.webp",
            "assets/img/intro/house/1_0063.webp",
            "assets/img/intro/house/1_0064.webp",
            "assets/img/intro/house/1_0065.webp",
            "assets/img/intro/house/1_0066.webp",
            "assets/img/intro/house/1_0067.webp",
            "assets/img/intro/house/1_0068.webp",
            "assets/img/intro/house/1_0069.webp",
            "assets/img/intro/house/1_0070.webp",
            "assets/img/intro/house/1_0071.webp",
            "assets/img/intro/house/1_0072.webp",
            "assets/img/intro/house/1_0073.webp",
            "assets/img/intro/house/1_0074.webp",
            "assets/img/intro/house/1_0075.webp"
            ],
            width   : 1200,  // width in pixels of the window/frame
            height  : 400,  // height in pixels of the window/frame
        });
        
    }
    spritespinHouse()

    function adaptiveBlocks() {
        if ($('.absence-work-inner').length) {
            function navAbsolute() {
                let sectionWidth = $('.absence').width();
                let contWidth = $('.absence .container').width();

                let totalRight = (sectionWidth - contWidth) / 2;

                
                if($(window).width() <= 1310) {
                    //$('.absence-work-list').css("transform", 'translateX(' + totalRight + 'px)');
                    $('.absence-work-list').css("padding-right", totalRight + 'px');
                    $('.absence-work-list').css("padding-left", totalRight + 'px');
                    $('.absence-work-inner').css("left", '-' + totalRight + 'px');
                    $('.absence-work-inner').css("width", 'calc(100% + ' + totalRight * 2 + 'px)');
                } else {
                    
                }
            };
            navAbsolute();
            $(window).on('load resize', function() {
                navAbsolute();
            })
        }
    }
    adaptiveBlocks()

    function advantageBlock() {
        $('.advantage-item').eq(0).addClass('active');
        $('.advantage-circle-icon img').attr('src', $('.advantage-item').eq(0).find('.advantage-item__icon .hover').attr('src'))
        $('.advantage-circle__over').text($('.advantage-item').eq(0).find('.advantage-item__over').text());
        $('.advantage-circle__title').text($('.advantage-item').eq(0).find('.advantage-item__title').text());


        $('.advantage-item').hover(function() {
            $('.advantage-item').removeClass('active');
            $(this).addClass('active');
            $('.advantage-circle-icon img').attr('src', $(this).find('.advantage-item__icon .hover').attr('src'));
            $('.advantage-circle__over').text($(this).find('.advantage-item__over').text());
            $('.advantage-circle__title').text($(this).find('.advantage-item__title').text());
            $('.advantage-circle__descr').text($(this).find('.advantage-item__descr').text());
        })
        if($(window).width() <= 992) {
            $('.advantage-item-background .hover').attr('src', 'assets/img/advantage/elem-normal-hover.svg');
        }
    }
    advantageBlock()

    function categoryContainer() {
        $('.category-slider-panel__next').click(function () {
            if($('.category-slider-panel__next').hasClass('swiper-button-disabled')) {

            } else {
                $('.swiper-slide-visible').last().removeClass('swiper-slide-visible');
            }
        })
        $('.category-slider-panel__prev').click(function () {
            $('.swiper-slide-visible').last().removeClass('swiper-slide-visible') 
        })
        $('.swiper-slide-visible').last().removeClass('swiper-slide-visible') 
    }
    categoryContainer()



    // Video
    function videoConcept () {
        $('.scale-video-poster').mouseup(function () {
            setTimeout(() => {
                $('.scale-video video')[0].play()
            }, 10);
            $('.scale-video').addClass('active')
        })
        $('.scale-video video').mouseup(function () {
            
            setTimeout(() => {
                $(this)[0].pause()
            }, 10);
            $('.scale-video').removeClass('active')
        })
    }
    videoConcept();


    //closeModal
    function closeModal() {
        $('.popup-close, .popup-success-button').click(function() {
            $('html').removeClass('hidden');
            $('.duty').removeClass('open');
        });
        $(document).mouseup(function (e) {
            var container = $(".crop");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('html').removeClass('hidden');
                $(".popup").removeClass("open");
                $(".header").removeClass("open");  
            }
        });
    }
    closeModal();

    //Открытие модалок
    function modalContact() {
        $(".modal-request").click(function (e) {
            e.preventDefault();
            $(".popup-request").addClass("open");
            setTimeout(() => {
                $('html').addClass('hidden');  
            }, 100);
        });
    };
    modalContact();



    //Валидации сайта
    function formValidate() {
        $('#popup-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 4
                },
                phone: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    minlength: 4
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 4 символa"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 4 символa"
                },
                email: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 4 символa"
                }
            }
        });
    };
    formValidate();   
});
