$(function() {
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