$(function () {
  $('#submitLocation').on('click', function () {
    var name = $('#name').val();

    var category = $('#category').val();

    var address = $('#address').val();

    $.post('/new', { name: name, category: category, address: address });

    window.location.href = "/";
  });
});

$(function () {
  $('.check-in').on('click', function () {
    var value = $(this).attr('name');

    window.location.href = '/loc/' + value;
  });
});