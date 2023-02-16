// Show the first tab and hide the rest
$('#tabs-nav a:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav a').click(function(){
  $('#tabs-nav a').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).attr('href');
  $(activeTab).fadeIn();
  return false;
});




const ctx = document.getElementById('homeChart');
var option = {        
  percentageInnerCutout: 60
};
const data = {
  datasets: [{
    data: [300, 150,],
    backgroundColor: [
      '#14d0ca',
      '#1e3d58',
      'rgb(238 149 108)',
      'rgb(126 191 167)'
    ],

  }],

  offset: 5 
};


// window.onload = function onLoad() {
//   var percentageComplete = 0.6;
//   var strokeDashOffsetValue = 100 - (percentageComplete * 100);
//   var progressBar = $(".js-progress-bar");
//   progressBar.css("stroke-dashoffset", strokeDashOffsetValue);
  
// };
 
// Change Nav menu color onclick
let toggleNavButton = $("#navbar-menu-icon");
let modalBackDrop = $(".modal-backdrop");

toggleNavButton.click(function(){
  let menuOpen = $(".offcanvas-end").hasClass("show");
  if(menuOpen === true){
    toggleNavButton.attr('src','resources/images/navbar-activemenu.png');
  } else {
    toggleNavButton.attr('src','resources/images/menu-icon.svg');

  }

})


setTimeout(() => {
  $('.landing-body').show()
  $('.dashboard-loader').hide()
  new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      cutout: 80, 
      borderWidth: 0, /* change this */
    }
    
  });
}, "2000")
