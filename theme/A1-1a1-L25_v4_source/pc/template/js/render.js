$(function() {

  var mode = 'pc'

  var themeName = location.href.match(/theme\/(.+?)\//)[1];

  $(document.body).load('/static/theme/' + themeName + '/' + mode + '/layout.txt', function() {
    $('[data-cms-contents="header[0]"]').load('/static/_dummy/template_masterpage/header0.html');
    $('[data-cms-contents="main[0]"]').load('/static/_dummy/template_masterpage/main0.html');
    $('[data-cms-contents="side[0]"]').load('/static/_dummy/template_masterpage/side0.html');
    $('[data-cms-contents="footer[0]"]').load('/static/_dummy/template_masterpage/footer0.html');
  });

  $(document.head)
  .append(
    $('<link>').attr({
      rel: 'stylesheet',
      href: '/static/theme/' + themeName + '/' + mode + '/layout.css'
    })
  )
  .append(
    $('<link>').attr({
      rel: 'stylesheet',
      href: '/static/theme/' + themeName + '/' + mode + '/mod.css'
    })
  );
});
