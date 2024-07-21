$(document).ready(function () {
  $(".input-group").each(function () {
    var $inputGroup = $(this);
    $inputGroup.find("button").on("click", function (event) {
      event.preventDefault();
      var $input = $inputGroup.find("input");
      var $icon = $inputGroup.find("i");
      if ($input.attr("type") == "text") {
        $input.attr("type", "password");
        $icon.addClass("fa-eye-slash");
        $icon.removeClass("fa-eye");
      } else if ($input.attr("type") == "password") {
        $input.attr("type", "text");
        $icon.removeClass("fa-eye-slash");
        $icon.addClass("fa-eye");
      }
    });
  });
});
