$( document ).ready(function() {
  var body = document.getElementsByTagName('body')[0];
  var toggleSidebarButton = document.getElementsByClassName('toggle-sidebar')[0];
  toggleSidebarButton.onclick = function() {
    if(body.classList.contains('sidebar-collapse') == true) {
      body.classList.remove('sidebar-collapse');
      body.classList.add('sidebar-full');
      body.querySelector(".main-menu .title").innerHTML = "Navigation Menu";
    } else {
      body.classList.add('sidebar-collapse');
      body.classList.remove('sidebar-full');
      body.querySelector(".main-menu .title").innerHTML = "Menu";
    }
  };

  if(body.classList.contains('sidebar-collapse') == true) {
    body.querySelector(".main-menu .title").innerHTML = "Menu";
  } else {
    body.querySelector(".main-menu .title").innerHTML = "Navigation Menu";
  }

  // $().slimScroll({
  //   opacity: 0
  // });

})