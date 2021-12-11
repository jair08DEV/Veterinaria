(function($) {
	$('#Almacen').show();
	$('#Publicidad').hide();
	$('#Clientes').hide();
	$('#Ventas').hide();
	$('#DescripcionAlmacen1').hide();

	$('#alcamen').click(function(){
		$('.almacenNav').addClass("active");
		$('.publicidadNav').removeClass("active");
		$('.ventasNav').removeClass("active");
		$('.clientesNav').removeClass("active");
		$('#Almacen').show();
		$('#Publicidad').hide();
		$('#Clientes').hide();
		$('#Ventas').hide();
		$('#DescripcionAlmacen1').hide();
	});

	$('#publicidad').click(function(){
		$('.almacenNav').removeClass("active");
		$('.publicidadNav').addClass("active");
		$('.ventasNav').removeClass("active");
		$('.clientesNav').removeClass("active");
		$('#Almacen').hide();
		$('#Publicidad').show();
		$('#Clientes').hide();
		$('#Ventas').hide();
		$('#DescripcionAlmacen1').hide();
	});

	$('#clientes').click(function(){
		$('.almacenNav').removeClass("active");
		$('.publicidadNav').removeClass("active");
		$('.ventasNav').removeClass("active");
		$('.clientesNav').addClass("active");
		$('#Almacen').hide();
		$('#Publicidad').hide();
		$('#Clientes').show();
		$('#Ventas').hide();
		$('#DescripcionAlmacen1').hide();
	});

	$('#ventas').click(function(){
		$('.almacenNav').removeClass("active");
		$('.publicidadNav').removeClass("active");
		$('.ventasNav').addClass("active");
		$('.clientesNav').removeClass("active");
		$('#Almacen').hide();
		$('#Publicidad').hide();
		$('#Clientes').hide();
		$('#Ventas').show();
		$('#DescripcionAlmacen1').hide();
	});

	$('#Almacen1').click(function(){
		$('#Almacen').hide();
		$('#DescripcionAlmacen1').show();
	});

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);
