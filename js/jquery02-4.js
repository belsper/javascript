$(document).ready(function() {
    /////// 1번 //////////
    $("#div01Btn").on("click", function() {
        var text = "<li>" + $("#div01Input").val() + "</li>";
        $("#div01ul").append(text);

        $("#div01Input").val(""); // 기존에 입력된 input 태그의 value값을 모두 삭제
        $("#div01Input").focus(); // 버튼에 주어진 포커스를 textbox로 이동
    });

    /////////// 2번 ////////////
    $("#div02Btn1").on("click", function() {
        $("#div02ul").addClass("fontSize");
    });

    $("#div02Btn2").on("click", function() {
        $("#div02ul").addClass("fontColor");
    });

    $("#div02Btn3").on("click", function() {
        $("#div02ul").addClass("fontWeight");
    });

    $("#div02Btn4").on("click", function() {
        $("#div02ul").removeClass("fontSize fontWeight fontColor");
        $("#div02ul").removeClass(); // 해당 태그에 적용된 모든 class를 삭제
    });
});