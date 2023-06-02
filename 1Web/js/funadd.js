$(document).ready(function(){
    $("#img1").mouseover(function(){
        $("#img1").attr("src", "assets/img/p3.jpg");
    });
    $("#img1").mouseout(function(){
        $("#img1").attr("src", "assets/img/p1.jpg");
    });
    $(".event2").click(function(){
        $(".event2").attr("src", "assets/img/p4.jpg");
    });
    $(".event2").dblclick(function(){
        $(".event2").attr("src", "assets/img/p2.jpg");
    });
    /*$("h1").css("color","Grey");    Esta es una sintaxis*/
    $("h1, h3").css({
        "color":
        "Grey",
        "font-family":
        "xd"});
    $("#gal1").mouseover(function(){
        $(".imgst").attr("src", "assets/img/p6.jpg");
        $("#gal1").css({
            "border": "4px solid #000000"
        });
        $("#gal2, #gal3, #gal4").css({
            "border": "none"
        });
        $("h5").html("Pastel Inflado");
        $("p").html("Pastel inflado con mucha levadura y vapor");
    });
    $("#gal2").mouseover(function(){
        $(".imgst").attr("src", "assets/img/p7.jpg");
        $("#gal2").css({
            "border": "4px solid #000000"
        });
        $("#gal1, #gal3, #gal4").css({
            "border": "none"
        });
        $("h5").html("Pan de Mermelada");
        $("p").html("Pan relleno de mermelada de fresa");
    });
    $("#gal3").mouseover(function(){
        $(".imgst").attr("src", "assets/img/p8.jpg");
        $("#gal3").css({
            "border": "4px solid #000000"
        });
        $("#gal1, #gal2, #gal4").css({
            "border": "none"
        });
        $("h5").html("Pastel de Chocolate");
        $("p").html("Pastel con chocolate en su interior y derretido acompañado de frambuesas");
    });
    $("#gal4").mouseover(function(){
        $(".imgst").attr("src", "assets/img/p9.jpg");
        $("#gal4").css({
            "border": "4px solid #000000"
        });
        $("#gal1, #gal2, #gal3").css({
            "border": "none"
        });
        $("h5").html("Gran calidad en panes");
        $("p").html("Panes para todos los gustos hechos de manera artesanal");
    });
});