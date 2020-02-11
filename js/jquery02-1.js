$(document).ready(function() {
    // 문제 1
    $("#test1Btn1").on("click", function() {
        $("#test1Link1").text("다음 홈페이지");
        $("#test1Link1").attr("href", "https://www.daum.net");
    });

    $("#test1Btn2").on("click", function() {
        $("#test1Link2").text("애플 홈페이지");
        $("#test1Link2").attr("href", "https://www.apple.com/kr");
    });

    $("#test1Btn3").on("click", function() {
        $("#test1Link3").text("구글 홈페이지");
        $("#test1Link3").attr("href", "https://www.google.co.kr");
    });

    // 문제 2
    $("#test2Btn1").on("click", function() {
        var linkAddr = "http://";
        linkAddr = linkAddr + $("#test2Input1").val();
        var linkText = $("#test2Input2").val();

        $("#test2Link1").attr("href", linkAddr);
        $("#test2Link1").text(linkText);
    });
});