$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        auto: true,
        captions: true,
        slideWidth: 600
    });
});

$(document).ready(function() {
    whatsappchat.singleUser({
        selector: "#whatsapp-chat",
        phone: "905414618366",
        headerMessage: "Welcome to our support!",
        iconColor: "#4ee676"
    });
});
