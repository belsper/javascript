$(document).ready(function() {
    // html 요소의 class 속성 추가하기
    // addClass() : 선택한 html 요소에 하나 이상의 class를 추가함
        // 존재하지 않는 클래스를 추가하지만 CSS 영역에 추가할 class에 대한 CSS 속성을 미리 설정해야 함
        // 사용법
        // $(선택자).addClass("추가할class명1 class명2 ...");
    // removeClass() : 선택한 html 요소에서 하나 이상의 class를 제거함
        // 사용법
        // $(선택자).removeClass("삭제할 class명") : 동시에 여러개도 삭제할 수 있음
    // toggleClass() : 선택한 html 요소에서 클래스 추가/제거를 전환함
    // css() : 선택한 html 요소의 CSS속성을 설정하거나 반환
        // 동시에 여러개의 CSS 속성을 설정하고자할 경우 {속성명 : 속성값, 속성명2: 속성값} 를 사용하여 여러가지 속성을 동시에 적용할 수 있음

    $("#div01Btn1").on("click", function() {
        $("h1, h2, p").addClass("blue");
        $("#div01 > div").addClass("important");
    });

    $("#div01Btn2").on("click", function() {
        $("#div01id1").addClass("important blue");
    });

    $("#div01Btn3").on("click", function() {
        $("#div01id1").toggleClass("blue important");
    });

    $("#div02Btn1").on("click", function() {
        $("h1, h2, p").removeClass("blue");
    });

    $("#div03Btn1").on("click", function() {
        $("#div03 > p").css("background-color", "yellow");
        $("#div03 > p").css("font-size", "32px");
        $("#div03 > p").css("border", "1px solid black");
    });

    $("#div03Btn2").on("click", function() {
        $("#div03 > p").css({
            "background-color" : "yellow",
            "font-size" : "32px",
            "border" : "1px solid black"
        });
    });
});