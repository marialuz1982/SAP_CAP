namespace BibliotecaCAP;

entity Socio {
    key Dni       : String;
        Nombre    : String;
        Direccion : String;
        Telefono  : String;
        //Asociacion (padre a hijo)
        To_Libros : Association to many Libro on To_Libros.Dni = Dni;
}

entity Libro {
    key Dni        : String;
    key Isbn       : String;
        Titulo     : String;
        FechaPrest : String;
        //Asociacion (hijo a padre)
        To_Socio: Association to one Socio;
}
