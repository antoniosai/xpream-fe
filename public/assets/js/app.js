// Modal
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};

function showModal(modal) {
  $('#' + modal).show();
}

function hideModal(modal) {
  $('#' + modal).hide();
}

$('body').on('click', '[data-type="modal"]', function(event) {
  event.preventDefault();
  var modal = $(this).attr('modal-target');
  showModal(modal);
});

$('.modal-box').on('click', '.close', function(event) {
  event.preventDefault();
  var modal = $(this).attr('modal-target');
  hideModal(modal);
});

// document.addEventListener("DOMContentLoaded", function(event) {
  // $('[data-toggle="datepicker"]').datepicker({
  //   autoHide: true,
  //   format: 'yyyy-mm-dd',
  // });
// });

var slimScroll = $('.slimscroll').slimScroll({
  height: $('.main-sidebar').height()+'px' - $('.main-logo').height()+'px',
  color: '#465368'
});

var slimScrollLog = $('#logModal .modal-body .inner-body').slimScroll({
  height: '300px',
  color: '#465368',
  alwaysVisible: true
});

if($('body').hasClass('sidebar-collapse')) {
  $('.slimscroll').css({'position':'relative','z-index':'150', 'background':'#0E1B31'});
} else {
  $('.slimscroll').css({'position':'relative','z-index':'10'});
}

$('.toggle-sidebar').click(function() {
  console.log($('body').hasClass('sidebar-collapse'));
  if($('body').hasClass('sidebar-collapse')) {
    $('.slimscroll').css({'position':'relative','z-index':'10'});
  } else {
    $('.slimscroll').css({'position':'relative','z-index':'150', 'background':'#0E1B31'});
  }  
});

$(document).ready(function() {
  // $('.user-info').click(function() {
  //   $('.user-dropdown').toggleClass('visible');
  // });

	$('ul.tab-menu li').click(function() {
		var tab_id = $(this).attr('data-tab');

		$('ul.tab-menu li').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#" + tab_id).addClass('active');
  });

  var notif_icon = $('.main-sidebar .notif-icon');
  var notif_count = $('.main-sidebar .notif-count');
  
  if(parseInt(notif_count.text()) > 0 ) {
    notif_icon.show();
    notif_count.show();
  } else {
    notif_icon.hide();
    notif_count.hide();
  }

  var path = window.location.pathname.split('/');
  
});
