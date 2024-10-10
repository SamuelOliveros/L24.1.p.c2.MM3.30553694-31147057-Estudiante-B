import Cl_Deportista from "./Cl_Deportista.js";
import Cl_Estudiante from "./Cl_Estudiante.js";
 
let estu =new Cl_Estudiante();
let depor =new Cl_Deportista("Juan",132,8,21,1);
let depor2 = new Cl_Deportista("Felix",110,10,20,2)

let salida=document.getElementById("Salida");
salida.innerHTML = `

<br>Nombre del Estudiante: ${depor.nombre}
<br>Acumulado de Notas: ${depor.acumn}
<br>Cantidad de Materis: ${depor.cantm}
<br>Deporte:${depor.tipo}
<br>Edad:${depor.edad}
<br>Nota Promedio:${depor.prom()}
<br>${depor.nombre} ${depor.beisbol()}
<br>
<br>
<br>Nombre del Estudiante: ${depor2.nombre}
<br>Acumulado de Notas: ${depor2.acumn}
<br>Cantidad de Materis: ${depor2.cantm}
<br>Deporte:${depor2.tipo}
<br>Edad:${depor2.edad}
<br>Nota Promedio:${depor2.prom()}
<br>${depor2.nombre} ${depor2.futbol()}



`