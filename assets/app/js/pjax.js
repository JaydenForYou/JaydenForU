function getBaseUrl() {
  var ishttps = 'https:' == document.location.protocol ? true : false;
  var url = window.location.host;
  if (ishttps) {
    url = 'https://' + url;
  } else {
    url = 'http://' + url;
  }
  return url;
}
let url = '"'+getBaseUrl()+'"';
$(document).pjax('a[href^='+ url +']:not(a[target="_blank"], a[no-pjax])', {
  container: '#pjax',
  fragment: '#pjax',
  timeout: 8000
})
$(document).on('pjax:start',function() { NProgress.start(); });
$(document).on('pjax:end',function() {
  NProgress.done();
});
if(isLZ==true) {
  $(document).on('pjax:complete', function () {
    jQuery(function () {
      jQuery("div").lazyload({effect: "fadeIn"});
    });
    jQuery(function () {
      jQuery("img").lazyload({effect: "fadeIn"});
    });
  });
  console.log('lazyload is opened');
}else{
  console.log('lazyload is closed');
}