$(function() {
    $("#accordion").accordion({
        icons: false,
        heightStyle: "content",
        collapsible: true,
        active: false
    });

    $(".refresh").click(function() {
        $("#accordion").accordion({
            collapsible: true,
            active: 0
        });
    })
});