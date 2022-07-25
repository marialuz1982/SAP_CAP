module.exports = async function(srv){

    const db = await cds.connect.to("db");  //Conecta a la base de datos
    const {Vueloset} = srv.entities;

    /* Redefinir el metodo read
    this.on("READ", "VuelooSet", async (req) => {
        let response = {};
        let trx = db.transaction(req);
        respionse = await trx.run(SELECT.from(VueloSet));
        response.forEach(vuelo => {
            if(vuelo.Estado === "1") {
                vuelo.CumpleRequisitos = true;

            }else{
                vuelo.CumpleRequisitos = false;
            }

        )};
        return response;
    });*/

    //Redefinir el metodo create (tiene 3 metodos distintos)
    //Se ejecuta antes del create
    /*this.before("CREATE", "VueloSet", async (req) =>{

    });
    
    //Se ejecuta  del create
    this.on("CREATE", "VueloSet", async (req) =>{

    });

    //Se ejecuta en el creat del create
    this.after("CREATE", "VueloSet", async (req) =>{

    });*/
    
    this.before("CREATE", "SocioSet", async(req) => {
        var oRequestDatos = req.data;
        if(oRequestDatos.Dni == ""){
            req.error(500, "No cumple la validacion");            
        } 

    });


    
  

}