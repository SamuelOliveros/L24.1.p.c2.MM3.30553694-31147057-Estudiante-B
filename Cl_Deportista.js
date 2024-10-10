import Cl_Estudiante from "./Cl_Estudiante.js";

export default class Cl_Deportista extends Cl_Estudiante{
    constructor(nombre,acumn,cantm,edad,tipo){
        super(nombre,acumn,cantm,edad);
        this.tipo=tipo;

    }
    prom(){
        return this.acumn/this.cantm;

    }
    beisbol(){
        if( this.prom()>14 && this.edad>=21){
            return "es admitido en beisbol";
        } else {
            return "no es admitido";

        }
        
    }
    futbol(){
        if(this.prom()>=12 && this.edad>19){
            return "es admitido en beisbol";
        } else {
            return "no es admitido";

        }
    }
}