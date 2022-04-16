$(document).ready(function () {
  $("#nav").on("change", function (o) {
    $(this).prop("checked")
      ? $("body").css("overflow", "hidden")
      : $("body").css("overflow", "auto");
  }),
    $("[id^=block-blog-]").addClass("blog-post");
    $('#block-a62c4bccc68d4bf58c4872b21642fc2e  .notion-semantic-string  u').wrapAll('<div class="ethan"></div>');
    $('#block-d1dae6b9e6fc4cd7815354cdeba6d8eb, #block-c63d3b7f28b049538c39bc77cfa133a4').wrapAll('<div class="persona"></div>')
    $('#block-834500c83d664741a6ac6380d8ed6989 span').addClass('jumpTo');
    $(".jumpTo").click(function() {
        $('html, body').animate({
            scrollTop: $("#block-f3460e72e67e440eb74c8d149122528e").offset().top
        }, 1000);
    });
});
