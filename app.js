

// DOM de eventos
document
.getElementById("formulario-producto")
.addEventListener("submit", function(elemento){

    elemento.preventDefault();// evala el comportamiento del elemento

    //obtener valores de formulario
    const name= document.getElementById("name").value ;
    precio = document.getElementById("precio").value;
    año = document.getElementById("año").value;

    //crear nuevo objeto producto
    const producto= new Producto(name, precio, año)
    //crear nuevo usuario
    const usuario=new Usuario();
    // Boton de validacion
    if(nombre === " " || precio === "" || año === ""){
        usuario.showMessages("Por favor insertar nombre de Usuario");
    }

    //guardar producto
    usuario.addProducto(producto);
    usuario.showMessages("producto agregado correctamente");
    usuario.resetForm();

});
document.getElementById("Lista-producto").addEventListener("click", (elemento) =>{
    const usuario= new Usuario();
    usuario.deletProduct(elemento.target);
    elemento.preventDefault();



});

// producto clase
export class Producto{

constructor(nombre, precio, año){
    this.nombre = nombre;
    this.precio = precio;
    this.año = año;
}
}