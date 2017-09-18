$(function() {

	 $('#show-color').on('click', function(e) {
		 e.preventDefault();

		 var $el = $(this);

		 $('article > div.active').removeClass('class').fadeOut('fast');
		 setTimeout(function(){
			 $('#choose-color-section').fadeIn('fast').addClass('active');
		 }, 250);

		 var delay = 0;

		 $('#choose-color-section > div span').each(function() {
			 $(this).delay(delay).animate({
				 opacity: '1',
				 height: '40px',
				 width: '40px'
			 }, 100);

			 delay += 35;
		 });
	 });

    $('#calendar-section').fullCalendar({

        firstDay: 1,
        aspectRatio: 1.3,
        dragScroll: false,

        header: {
            left:   'prev',
            center: 'title',
            right:  'next'
        },

        monthNames: [
            'Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'
        ],

        dayNamesShort: [
            'Dom', 'Lun', 'Mar', 'Mie',
            'Jue', 'Vie', 'Sab'
        ],

        dayRender: function (date, cell) {
            if(date.format('YYYY-MM-DD') == '2017-09-30') {
                cell.addClass('with-event');
            }
        },

    });
});
