
//Craación del objeto sistema
function SistemaANDE( codANDE, numBombas, caudal, Pmax, Clasificacion, PIT,precio){

    this.codANDE=codANDE;
    this.numBombas=numBombas;
    this.caudal=caudal;
    this.Pmax=Pmax;
    this.Clasificacion=Clasificacion;
    this.PIT=PIT;
    this.precio=precio;
    
    
    this.comentarios=""
    this.tipoDeMotor= "Eléctrico. 480 V/60 Hz/ 3 fases";
    this.potenciaNominal="0.5 hp/ 1800 rpm";
    this.nivelDeRuido="85dBa";
    
    
    }
    
    let sistema_ANDE=[];
    
    
    sistema_ANDE[1] = new SistemaANDE ("71500197625",1,"100 GPD", "150psi", "No Clasificada", false,9820);
    sistema_ANDE[2] = new SistemaANDE ("71500197624",1,"100 GPD", "150psi", "No Clasificada", true,10960);
    sistema_ANDE[3] = new SistemaANDE ("71500197623",1,"100 GPD", "150psi", "CL1 Div2Gr C,D", false,11580);
    sistema_ANDE[4] = new SistemaANDE ("71500197622",1,"100 GPD", "150psi", "CL1 Div2Gr C,D", true,9820);
    sistema_ANDE[5] = new SistemaANDE ("71500197621",1,"100 GPD", "300psi", "No Clasificada", false,9820);
    sistema_ANDE[6] = new SistemaANDE ("71500197620",1,"100 GPD", "300psi", "No Clasificada", true,10960);
    sistema_ANDE[7] = new SistemaANDE ("71500197619",1,"100 GPD", "300psi", "CL1 Div2Gr C,D", false,9820);
    sistema_ANDE[8] = new SistemaANDE ("71500197618",1,"100 GPD", "300psi", "CL1 Div2Gr C,D", true,11580);
    sistema_ANDE[9] = new SistemaANDE ("71500197617",1,"100 GPD", "900psi", "No Clasificada", false,9820);
    sistema_ANDE[10] = new SistemaANDE ("71500197616",1,"100 GPD", "900psi", "No Clasificada", true,10960);
    sistema_ANDE[11] = new SistemaANDE ("71500197615",1,"100 GPD", "900psi", "CL1 Div2Gr C,D", false,9820);
    sistema_ANDE[12] = new SistemaANDE ("71500197614",1,"100 GPD", "900psi", "CL1 Div2Gr C,D", true,11580);
    sistema_ANDE[13] = new SistemaANDE ("71500197611",1,"100 GPD", "1500psi", "No Clasificada", false,9820);
    sistema_ANDE[14] = new SistemaANDE ("71500197610",1,"100 GPD", "1500psi", "No Clasificada", true,10960);
    sistema_ANDE[15] = new SistemaANDE ("71500197609",1,"100 GPD", "1500psi", "CL1 Div2Gr C,D", false,9820);
    sistema_ANDE[16] = new SistemaANDE ("71500197608",1,"100 GPD", "1500psi", "CL1 Div2Gr C,D", true,11580);
    sistema_ANDE[17] = new SistemaANDE ("71500197607",2,"100 GPD", "150psi", "No Clasificada", true,26420);
    sistema_ANDE[18] = new SistemaANDE ("71500197606",2,"100 GPD", "150psi", "No Clasificada", true,41330);
    sistema_ANDE[19] = new SistemaANDE ("71500197605",2,"100 GPD", "150psi", "CL1 Div2Gr C,D", true,34110);
    sistema_ANDE[20] = new SistemaANDE ("71500197604",2,"100 GPD", "150psi", "CL1 Div2Gr C,D", true,49030);
    sistema_ANDE[21] = new SistemaANDE ("71500197603",2,"100 GPD", "300psi", "No Clasificada", true,26420);
    sistema_ANDE[22] = new SistemaANDE ("71500197602",2,"100 GPD", "300psi", "No Clasificada", true,41330);
    sistema_ANDE[23] = new SistemaANDE ("71500197601",2,"100 GPD", "300psi", "CL1 Div2Gr C,D", true,34110);
    sistema_ANDE[24] = new SistemaANDE ("71500197600",2,"100 GPD", "300psi", "CL1 Div2Gr C,D", true,49030);
    sistema_ANDE[25] = new SistemaANDE ("71500197599",2,"100 GPD", "900psi", "No Clasificada", true,26420);
    sistema_ANDE[26] = new SistemaANDE ("71500197598",2,"100 GPD", "900psi", "No Clasificada", true,41330);
    sistema_ANDE[27] = new SistemaANDE ("71500197597",2,"100 GPD", "900psi", "CL1 Div2Gr C,D", true,34110);
    sistema_ANDE[28] = new SistemaANDE ("71500197596",2,"100 GPD", "900psi", "CL1 Div2Gr C,D", true,49030);
    sistema_ANDE[29] = new SistemaANDE ("71500197594",2,"100 GPD", "1500psi", "No Clasificada", true,26420);
    sistema_ANDE[30] = new SistemaANDE ("71500197595",2,"100 GPD", "1500psi", "No Clasificada", true,41330);
    sistema_ANDE[31] = new SistemaANDE ("71500197593",2,"100 GPD", "1500psi", "CL1 Div2Gr C,D", true,49030);
    sistema_ANDE[32] = new SistemaANDE ("71500197592",2,"100 GPD", "1500psi", "CL1 Div2Gr C,D", true,48120);
    sistema_ANDE[33] = new SistemaANDE ("71500197591",1,"20 GPD", "150psi", "No Clasificada", false,8850);
    sistema_ANDE[34] = new SistemaANDE ("71500197590",1,"20 GPD", "150psi", "No Clasificada", true,10960);
    sistema_ANDE[35] = new SistemaANDE ("71500197589",1,"20 GPD", "150psi", "CL1 Div2Gr C,D", false,9820);
    sistema_ANDE[36] = new SistemaANDE ("71500197588",1,"20 GPD", "150psi", "CL1 Div2Gr C,D", true,11580);
    sistema_ANDE[37] = new SistemaANDE ("71500197587",1,"20 GPD", "300psi", "No Clasificada", false,8850);
    sistema_ANDE[38] = new SistemaANDE ("71500197586",1,"20 GPD", "3000psi", "No Clasificada", true,10960);
    sistema_ANDE[39] = new SistemaANDE ("71500197585",1,"20 GPD", "300psi", "CL1 Div2Gr C,D", false,9820);
    sistema_ANDE[40] = new SistemaANDE ("71500197584",1,"20 GPD", "300psi", "CL1 Div2Gr C,D", true,11580);
    sistema_ANDE[41] = new SistemaANDE ("71500197583",1,"20 GPD", "900psi", "No Clasificada", false,8850);
    sistema_ANDE[42] = new SistemaANDE ("71500197582",1,"20 GPD", "900psi", "No Clasificada", true,10960);
    sistema_ANDE[43] = new SistemaANDE ("71500197581",1,"20 GPD", "900psi", "CL1 Div2Gr C,D", false,9820);
    sistema_ANDE[44] = new SistemaANDE ("71500197580",1,"20 GPD", "900psi", "CL1 Div2Gr C,D", true,11580);
    sistema_ANDE[45] = new SistemaANDE ("71500197579",1,"20 GPD", "1500psi", "No Clasificada", false,8850);
    sistema_ANDE[46] = new SistemaANDE ("71500197578",1,"20 GPD", "1500psi", "No Clasificada", true,10960);
    sistema_ANDE[47] = new SistemaANDE ("71500197577",1,"20 GPD", "1500psi", "CL1 Div2Gr C,D", false,9820);
    sistema_ANDE[48] = new SistemaANDE ("71500197576",1,"20 GPD", "1500psi", "CL1 Div2Gr C,D", true,11580);
    sistema_ANDE[49] = new SistemaANDE ("71500197575",2,"20 GPD", "150psi", "No Clasificada", true,26420);
    sistema_ANDE[50] = new SistemaANDE ("71500197574",2,"20 GPD", "150psi", "No Clasificada", true,41330);
    sistema_ANDE[51] = new SistemaANDE ("71500197573",2,"20 GPD", "150psi", "CL1 Div2Gr C,D", true,34110);
    sistema_ANDE[52] = new SistemaANDE ("71500197572",2,"20 GPD", "150psi", "CL1 Div2Gr C,D", true,49030);
    sistema_ANDE[53] = new SistemaANDE ("71500197571",2,"20 GPD", "300psi", "No Clasificada", true,26420);
    sistema_ANDE[54] = new SistemaANDE ("71500197570",2,"20 GPD", "300psi", "No Clasificada", true,41330);
    sistema_ANDE[55] = new SistemaANDE ("71500197569",2,"20 GPD", "300psi", "CL1 Div2Gr C,D", true,34110);
    sistema_ANDE[56] = new SistemaANDE ("71500197568",2,"20 GPD", "300psi", "CL1 Div2Gr C,D", true,49030);
    sistema_ANDE[57] = new SistemaANDE ("71500197567",2,"20 GPD", "900psi", "No Clasificada", true,26420);
    sistema_ANDE[58] = new SistemaANDE ("71500197566",2,"20 GPD", "900psi", "No Clasificada", true,41330);
    sistema_ANDE[59] = new SistemaANDE ("71500197565",2,"20 GPD", "900psi", "CL1 Div2Gr C,D", true,34110);
    sistema_ANDE[60] = new SistemaANDE ("71500197564",2,"20 GPD", "900psi", "CL1 Div2Gr C,D", true,49030);
    sistema_ANDE[61] = new SistemaANDE ("71500197563",2,"20 GPD", "1500psi", "No Clasificada", true,41330);
    sistema_ANDE[62] = new SistemaANDE ("71500197562",2,"20 GPD", "1500psi", "CL1 Div2Gr C,D", true,34110);
    sistema_ANDE[63] = new SistemaANDE ("71500197561",2,"20 GPD", "1500psi", "CL1 Div2Gr C,D", true,49030);
    sistema_ANDE[64] = new SistemaANDE ("71500197560",2,"20 GPD", "1500psi", "CL1 Div2Gr C,D", true,48120);
    
    
    
    
    
    
    
    
    
    function mostrarSistemas(){
    
    /*
    for(var i=1; i<9;i++){
        console.log (sistema_ANDE[i]);
        console.log (sistema_ANDE[i].nivelDeRuido);
    }
    */
    
    
    //populateTable();
    populateTableFiltered();
    
    }
    
    function populateTable() {
        const tableBody = document.getElementById('sistemaANDETable').getElementsByTagName('tbody')[0];
    
        sistema_ANDE.forEach((sistema, index) => {
            if (sistema) {
                let row = tableBody.insertRow();
                row.insertCell(0).textContent = sistema.codANDE;
                row.insertCell(1).textContent = sistema.caudal;
                row.insertCell(2).textContent = sistema.numBombas;
                row.insertCell(3).textContent = sistema.Pmax;
                row.insertCell(4).textContent = sistema.Clasificacion;
                row.insertCell(5).textContent = sistema.PIT ? 'Sí' : 'No';
                row.insertCell(6).textContent = sistema.precio;
            }
        });
    }
    
    
    function populateTableFiltered() {
        
        console.log("hola");
        console.log(document.getElementById('Caudal_max').value);
        console.log(sistema_ANDE.length)
        
        let sistema_ANDE_Filtered=[];
        sistema_ANDE_Filtered= sistema_ANDE;
        
        
    
        x = document.getElementById('Caudal_max');
        y=x.options[x.selectedIndex].text;
        if(y!="Seleccionar"){
        console.log(y);   
        sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.caudal==y)
        console.log("largo del filtrado" + sistema_ANDE_Filtered.length);
        }
    
        x = document.getElementById('N_bombas');
        y=x.options[x.selectedIndex].text;
        if(y!="Seleccionar"){
        console.log(y);
        console.log(typeof y);
        sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.numBombas.toString()==y)
        console.log("largo del filtrado" + sistema_ANDE_Filtered.length);
        }
    
        x = document.getElementById('P_max');
        y=x.options[x.selectedIndex].text;
        if(y!="Seleccionar"){
        console.log(y);   
        sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.Pmax==y)
        console.log("largo del filtrado" + sistema_ANDE_Filtered.length);
        }
    
        x = document.getElementById('Class_Area');
        y=x.options[x.selectedIndex].text;
        console.log("class area"+y);   
        if(y!="Seleccionar"){
        console.log(y);   
        sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.Clasificacion==y)
        console.log("largo del filtrado" + sistema_ANDE_Filtered.length);
        }
    
        x = document.getElementById('Trans_Presion');
        y=x.options[x.selectedIndex].text;
        console.log("Trans presion"+y);   
        if(y!="Seleccionar"){
        console.log(y); 
        if(y=="Si") z=true;
        if(y=="No") z=false;
        sistema_ANDE_Filtered= sistema_ANDE_Filtered.filter((sistema)=>sistema.PIT==z)
        console.log("largo del filtrado" + sistema_ANDE_Filtered.length);
        }
    
        //sistema_ANDE_Filtered= sistema_ANDE
    
        /*
        for(var i=0; i<sistema_ANDE_Filtered.length;i++){
                   
            
            console.log (sistema_ANDE_Filtered[i].caudal);
            
        }
        */
    
        /*
        sistema_ANDE_Filtered.forEach((sistema, index) => {
            if (sistema) {
                
                console.log(sistema.caudal);
                if(sistema.caudal=="20 GPD"){
                   
                    console.log("sizas");
                }
                
            }
        });
        */
    
        document.getElementById("sistemaANDETable").querySelector("tbody").innerHTML="";
    
        const tableBody = document.getElementById('sistemaANDETable').getElementsByTagName('tbody')[0];
        sistema_ANDE_Filtered.forEach((sistema, index) => {
            if (sistema) {
                let row = tableBody.insertRow();
                row.insertCell(0).textContent = sistema.codANDE;
                row.insertCell(1).textContent = sistema.caudal;
                row.insertCell(2).textContent = sistema.numBombas;
                row.insertCell(3).textContent = sistema.Pmax;
                row.insertCell(4).textContent = sistema.Clasificacion;
                row.insertCell(5).textContent = sistema.PIT ? 'Sí' : 'No';
                row.insertCell(6).textContent = sistema.precio;
            }
        });
    }
    
    
    
    const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
    
    const result = words.filter((word) => word.length > 6);
    
    console.log(result);
    // Expected output: Array ["exuberant", "destruction", "present"]