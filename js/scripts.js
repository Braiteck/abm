$(() => {
	// Отзывы
	if ($('.reviews .swiper-container').length) {
		new Swiper('.reviews .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				1024: {
					slidesPerView: 2
				},
				1280: {
					slidesPerView: 3
				}
			}
		})
	}


	// Аккордион
	$('body').on('click', '.accordion .item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		if (!$('.mob_header .mob_menu_btn').hasClass('active')) {
			$('.mob_header .mob_menu_btn').addClass('active')
			$('body').addClass('menu_open')
			$('.mob_header .mob_menu').fadeIn(300)
		} else {
			$('.mob_header .mob_menu_btn').removeClass('active')
			$('body').removeClass('menu_open')
			$('.mob_header .mob_menu').fadeOut(200)
		}
	})

	$('.mob_header .mob_menu .menu > * > a.sub_link').click(function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			$('.mob_header .mob_menu').addClass('big')
			$(this).addClass('active').next().fadeIn(300)
		} else {
			$('.mob_header .mob_menu').removeClass('big')
			$(this).removeClass('active').next().hide()
		}
	})
})



$(window).on('load', () => {
	windowW = $(window).width()

	// Сертификаты
	certsSliderInit()

	// Галерея в тексте
	gallerySliderInit()

	// Услуги на главной
	aboutServicesSliderInit()

	// Преиущества
	advantagesSliderInit()

	// Порядок работы
	stepsSliderInit()

	// Статьи
	articlesSliderInit()

	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



$(window).resize(() => {
	if ($(window).width() != windowW) {
		windowW = $(window).width()

		// Сертификаты
		certsSliderInit()

		// Галерея в тексте
		gallerySliderInit()

		// Услуги на главной
		aboutServicesSliderInit()

		// Преиущества
		advantagesSliderInit()

		// Порядок работы
		stepsSliderInit()

		// Статьи
		articlesSliderInit()
	}


	// Фикс. шапка
	headerInit = false
	$('.header_wrap').height('auto')

	setTimeout(() => {
		headerInit = true
		headerHeight = $('header').outerHeight()

		$('.header_wrap').height(headerHeight)

		headerInit && $(window).scrollTop() > headerHeight
			? $('header').addClass('fixed')
			: $('header').removeClass('fixed')
	}, 100)
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



// Сертификаты
const certsSliderInit = () => {
	if ($(window).width() < 1024) {
		$('.certs .mob_slider').addClass('swiper-container')
		$('.certs .swiper-wrapper').removeClass('row')

		if ($('.certs .swiper-container:not(.swiper-container-initialized)').length) {
			certsSlider = new Swiper('.certs .swiper-container:not(.swiper-container-initialized)', {
				loop: false,
				speed: 500,
				spaceBetween: 20,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					bulletActiveClass: 'active'
				},
				breakpoints: {
					0: {
						slidesPerView: 1
					},
					480: {
						slidesPerView: 2
					},
					768: {
						slidesPerView: 3
					}
				}
			})
		}
	} else {
		if (typeof certsSlider !== 'undefined') certsSlider.destroy()

		$('.certs .mob_slider').removeClass('swiper-container')
		$('.certs .swiper-wrapper').addClass('row')
	}
}



// Галерея в тексте
const gallerySliderInit = () => {
	if ($(window).width() < 1024) {
		$('.text_block .gallery').addClass('swiper-container')
		$('.text_block .gallery .swiper-wrapper').removeClass('row')

		if ($('.text_block .gallery:not(.swiper-container-initialized)').length) {
			gallerySlider = new Swiper('.text_block .gallery:not(.swiper-container-initialized)', {
				loop: false,
				speed: 500,
				spaceBetween: 20,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					bulletActiveClass: 'active'
				},
				breakpoints: {
					0: {
						slidesPerView: 1
					},
					480: {
						slidesPerView: 2
					}
				}
			})
		}
	} else {
		if (typeof gallerySlider !== 'undefined') gallerySlider.destroy()

		$('.text_block .gallery').removeClass('swiper-container')
		$('.text_block .gallery .swiper-wrapper').addClass('row')
	}
}



// Услуги на главной
const aboutServicesSliderInit = () => {
	if ($(window).width() < 1024) {
		$('.about_services .mob_slider').addClass('swiper-container')

		if ($('.about_services .swiper-container:not(.swiper-container-initialized)').length) {
			aboutServicesSlider = new Swiper('.about_services .swiper-container:not(.swiper-container-initialized)', {
				loop: false,
				speed: 500,
				slidesPerView: 1,
				spaceBetween: 60,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				on: {
					init: swiper => {
						setTimeout(() => {
							let thumbH = $(swiper.$el).find('.image').outerHeight()

							$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
						})
					},
					resize: swiper => {
						setTimeout(() => {
							let thumbH = $(swiper.$el).find('.image').outerHeight()

							$(swiper.$el).find('.swiper-button-prev, .swiper-button-next').css('top', thumbH / 2)
						})
					}
				}
			})
		}
	} else {
		if (typeof aboutServicesSlider !== 'undefined') aboutServicesSlider.destroy()

		$('.about_services .mob_slider').removeClass('swiper-container')
	}
}



// Преимущества
const advantagesSliderInit = () => {
	if ($(window).width() < 1024) {
		$('.advantages .mob_slider').addClass('swiper-container')
		$('.advantages .swiper-wrapper').removeClass('row')

		if ($('.advantages .swiper-container:not(.swiper-container-initialized)').length) {
			advantagesSlider = new Swiper('.advantages .swiper-container:not(.swiper-container-initialized)', {
				loop: false,
				speed: 500,
				spaceBetween: 60,
				slidesPerView: 1,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					bulletActiveClass: 'active'
				}
			})
		}
	} else {
		if (typeof advantagesSlider !== 'undefined') advantagesSlider.destroy()

		$('.advantages .mob_slider').removeClass('swiper-container')
		$('.advantages .swiper-wrapper').addClass('row')
	}
}



// Порядок работы
const stepsSliderInit = () => {
	if ($(window).width() < 1024) {
		$('.steps .mob_slider').addClass('swiper-container')
		$('.steps .swiper-wrapper').removeClass('row')

		if ($('.steps .swiper-container:not(.swiper-container-initialized)').length) {
			stepsSlider = new Swiper('.steps .swiper-container:not(.swiper-container-initialized)', {
				loop: false,
				speed: 500,
				spaceBetween: 20,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					bulletActiveClass: 'active'
				},
				breakpoints: {
					0: {
						slidesPerView: 'auto'
					},
					768: {
						slidesPerView: 2
					}
				}
			})
		}
	} else {
		if (typeof stepsSlider !== 'undefined') stepsSlider.destroy()

		$('.steps .mob_slider').removeClass('swiper-container')
		$('.steps .swiper-wrapper').addClass('row')
	}
}



// Статьи
const articlesSliderInit = () => {
	if ($(window).width() < 1024) {
		$('.articles .mob_slider').addClass('swiper-container')
		$('.articles .swiper-wrapper').removeClass('row')

		if ($('.articles .swiper-container:not(.swiper-container-initialized)').length) {
			articlesSlider = new Swiper('.articles .swiper-container:not(.swiper-container-initialized)', {
				loop: false,
				speed: 500,
				spaceBetween: 20,
				watchSlidesVisibility: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					bulletActiveClass: 'active'
				},
				breakpoints: {
					0: {
						slidesPerView: 1
					},
					768: {
						slidesPerView: 2
					}
				}
			})
		}
	} else {
		if (typeof articlesSlider !== 'undefined') articlesSlider.destroy()

		$('.articles .mob_slider').removeClass('swiper-container')
		$('.articles .swiper-wrapper').addClass('row')
	}
}