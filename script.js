function changeText() {
    var element = document.getElementById("changeableText");
    element.innerHTML = "Text changed!";

    // Open WhatsApp chat
    openWhatsAppChat();
}

function openWhatsAppChat() {
    var phoneNumber = "6285161956196";
    var message = encodeURIComponent("Halo, saya ingin berlangganan internet di ZS Hotspot");

    // Construct the WhatsApp URL
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + message;

    // Open a new window or tab with the WhatsApp URL
    window.open(whatsappUrl, "_blank");
}
