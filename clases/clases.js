class Pakiman
{
    constructor(n,v,a,t){
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.tipo = t;
        this.imagen = new Image();
        this.imagen.src = img[this.nombre]
    }
    hablar()
    {
        alert(this.nombre);        
    }
    mostrar()
    {
        document.write("<p>")
        document.body.appendChild(this.imagen);
        document.write("<strong>"+ "Nombre: " + this.nombre + "</strong><br>")
        document.write("<strong>" + "Vida: " + this.vida + "</strong><br>")
        document.write("<strong>" + "Ataque: "+this.ataque + "</strong><br>")
        document.write("<strong>" + "Tipo: "+this.tipo + "</strong><hr>")
        document.write("</p>")
    }
}

var img = [];
img["Cauchin"] = "vaca.png";
img["Pokacho"] = "pollo.png";
img["Tocinauro"] = "cerdo.png";

var coleccion=[];
coleccion.push( new Pakiman("Cauchin", 100, 30, "Lacteo"));
coleccion.push( new Pakiman("Pokacho", 80, 50, "Electrico"));
coleccion.push( new Pakiman("Tocinauro", 120, 40, "Carniboro"));

for(var pakis of coleccion){
    pakis.mostrar();
}
for(var pakis in coleccion){
    console.log(coleccion[pakis]);
}