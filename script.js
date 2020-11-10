names = ["Anika","Marc","Fynn","Daniel","Henning","Felix","Simon"];
absent = [""];
$(".clear").click(function () {
    $.each( names, function( i, val ) {
        $.removeCookie('usedName'+val);
    });
});
$(".rnd-btn").click(function generator () {
    outputName = "";
    cookieCounter = 0;
    outputName2 = "";
    while (outputName === outputName2 || absent.includes(outputName) || absent.includes(outputName2) || checkCookie()) {
        var randomIndex = Math.floor(Math.random() * names.length);
        var randomIndex2 = Math.floor(Math.random() * names.length);
        outputName = names[randomIndex];
        outputName2 = names[randomIndex2];
    }
    $("#displayArray1").val(outputName);
    $("#displayArray2").val(outputName2);
    $("#demo").text(absent);
    $.cookie('usedName' + outputName, {expires: 28});
    $.cookie('usedName' + outputName2, {expires: 28});
    $.each(names, function (i, val) {
        if ($.cookie('usedName' + val)) {
            cookieCounter++;
        }
    });
    roundedNumber = names.length;
    if (roundedNumber % 2) {
        roundedNumber --;
    }
    console.log(roundedNumber);
    console.log(cookieCounter);
    if (cookieCounter === roundedNumber) {
        $.each(names, function (i, val) {
            $.removeCookie('usedName' + val);
        });
    }
});

function checkCookie() {
    if ($.cookie("usedName"+outputName) || $.cookie("usedName"+outputName2)) {
        return true;
    }
    return false;
}