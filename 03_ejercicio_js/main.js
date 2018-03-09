$("li").hover(function() {
    let imagen;
    if(this.id=="elem1") imagen="img/arbol.jpg";
    if(this.id=="elem2") imagen="img/lago.jpg";
    if(this.id=="elem3") imagen="img/rio.jpg";
    if(this.id=="elem4") imagen="img/sol.jpg";
    $(this).addClass("destacar");
    $("#contenedor2 img").attr("src", imagen);
}, function(){
    $(this).removeClass("destacar");
    $("#contenedor2 img").attr("src", "img/blanco.jpg");
})