document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. DATA REAL
    // ==========================================
    let pasajeros = [
        { asiento: "43", boleto: "B400-2435", nombre: "MARIA CECILIA ZUÑIGA FLORES", edad: 13, doc: "77783879", pnr: "13082", destino: "CHICLAYO", origen: "28 De Julio", importe: 108 },
        { asiento: "44", boleto: "B400-2434", nombre: "MAXIMO ALBERTO ZUÑIGA MENDOZA", edad: 37, doc: "45243568", pnr: "13082", destino: "CHICLAYO", origen: "28 De Julio", importe: 108 },
        { asiento: "45", boleto: "B735-29351", nombre: "WILLIAN EUSTACIO QUISPE CHACON", edad: 18, doc: "60233364", pnr: "12392", destino: "CHEPÉN", origen: "Plaza Norte", importe: 120 },
        { asiento: "46", boleto: "B2-2382", nombre: "MARIA DE FATIMA QUINTEROS PADILLA", edad: 0, doc: "74777155", pnr: "13519", destino: "CHICLAYO", origen: "28 De Julio", importe: 120 },
        { asiento: "47", boleto: "B2-2383", nombre: "LUZ ELENA PADILLA SOSA", edad: 59, doc: "27820047", pnr: "13520", destino: "CHICLAYO", origen: "28 De Julio", importe: 120 },
        { asiento: "48", boleto: "B713-113912", nombre: "LUIS MACKY TEJADA PALOMINO", edad: 18, doc: "61130701", pnr: "11313", destino: "CHEPÉN", origen: "28 De Julio", importe: 100 },
        { asiento: "49", boleto: "B2-2384", nombre: "MARIA JOSE CUMPA RAMOS", edad: 12, doc: "75246822", pnr: "13524", destino: "CHICLAYO", origen: "28 De Julio", importe: 120 },
        { asiento: "50", boleto: "B2-2385", nombre: "LUCAS JERICOB RAMIREZ TORRES", edad: 0, doc: "81500864", pnr: "13530", destino: "CHICLAYO", origen: "28 De Julio", importe: 120 },
        { asiento: "51", boleto: "B738-12972", nombre: "LUIS HUMBERTO VASQUEZ ZAMORA", edad: 35, doc: "70744336", pnr: "12189", destino: "CHICLAYO", origen: "28 De Julio", importe: 110 },
        { asiento: "52", boleto: "F400-299", nombre: "WILLIAM'S ABRAHAM TEJEDA CASTILLO", edad: 11, doc: "78703011", pnr: "12786", destino: "CHICLAYO", origen: "Marcopolo", importe: 108 },
        { asiento: "53", boleto: "F400-298", nombre: "ALEJANDRA CASTILLO CORDOVA", edad: 29, doc: "71739382", pnr: "12786", destino: "CHICLAYO", origen: "Marcopolo", importe: 108 },
        { asiento: "54", boleto: "B400-2490", nombre: "JUAN ISMAEL PUICON CAMPOS", edad: 36, doc: "45872990", pnr: "13536", destino: "CHICLAYO", origen: "Marcopolo", importe: 120 },
        { asiento: "01", boleto: "B703-274", nombre: "CARLOS ALBERTO MAYORGA ROMERO", edad: 35, doc: "46301614", pnr: "10701", destino: "CHEPÉN", origen: "Marcopolo", importe: 90 },
        { asiento: "02", boleto: "B726-17566", nombre: "ELADIO JULCA CHUNQUE", edad: 78, doc: "16452380", pnr: "11701", destino: "CHICLAYO", origen: "28 De Julio", importe: 90 },
        { asiento: "03", boleto: "B703-275", nombre: "ANGEL SAUL CASTAÑEDA ESPINOZA", edad: 32, doc: "73444110", pnr: "10704", destino: "CHEPÉN", origen: "Plaza Norte", importe: 90 },
        { asiento: "04", boleto: "B703-273", nombre: "JHONY PEDRO", edad: 32, doc: "45788822", pnr: "10700", destino: "CHEPÉN", origen: "Plaza Norte", importe: 90 },
        { asiento: "05", boleto: "B710-18453", nombre: "RUDIL PANDO TORRES", edad: 26, doc: "71738919", pnr: "13559", destino: "CHEPÉN", origen: "Marcopolo", importe: 120 },
        { asiento: "06", boleto: "B400-2607", nombre: "JHONNY RUBEN GALINDO IBARRA", edad: 35, doc: "47144642", pnr: "14127", destino: "CHICLAYO", origen: "Plaza Norte", importe: 120 },
        { asiento: "07", boleto: "B400-2509", nombre: "VIVIANA LIZET BLANCO MENDOZA", edad: 22, doc: "74647461", pnr: "13593", destino: "CHICLAYO", origen: "Marcopolo", importe: 120 },
        { asiento: "08", boleto: "B400-2605", nombre: "EDWIN SAMIR SANTOS DE LA CRUZ", edad: 23, doc: "74803394", pnr: "14123", destino: "CHICLAYO", origen: "28 De Julio", importe: 120 },
        { asiento: "09", boleto: "B735-29376", nombre: "ANDREA MARILYN PRADO GONZALES", edad: 38, doc: "44120346", pnr: "13021", destino: "CHEPÉN", origen: "Ventanilla", importe: 100 },
        { asiento: "10", boleto: "B735-29377", nombre: "NOELIA KARINA PRADO GONZALES", edad: 45, doc: "42363786", pnr: "13021", destino: "CHEPÉN", origen: "Ventanilla", importe: 100 },
        { asiento: "11", boleto: "B703-272", nombre: "BLANCA VICTORIA VALENCIA CHAMBA", edad: 81, doc: "16434988", pnr: "10699", destino: "CHICLAYO", origen: "Marcopolo", importe: 90 },
        { asiento: "12", boleto: "B703-271", nombre: "LUIS IVAN SALAZAR VALENCIA", edad: 42, doc: "41693677", pnr: "10699", destino: "CHICLAYO", origen: "Marcopolo", importe: 90 },
        { asiento: "13", boleto: "B735-29378", nombre: "HARUMI YAMILED LUNA PRADO", edad: 14, doc: "63334235", pnr: "13021", destino: "CHEPÉN", origen: "Ventanilla", importe: 100 },
        { asiento: "14", boleto: "B735-29379", nombre: "YURI KATHERINE PRADO GONZALES", edad: 41, doc: "42700259", pnr: "13021", destino: "CHEPÉN", origen: "Ventanilla", importe: 100 },
        { asiento: "15", boleto: "KPB-136", nombre: "NOEMI MARIA LOPEZ CHUMPITAZI", edad: 23, doc: "60855493", pnr: "12396", destino: "CHICLAYO", origen: "28 De Julio", importe: 90 },
        { asiento: "16", boleto: "F400-315", nombre: "JOSE LUIS OLIVA VASQUEZ", edad: 44, doc: "41139462", pnr: "13247", destino: "CHICLAYO", origen: "28 De Julio", importe: 108 },
        { asiento: "17", boleto: "B703-267", nombre: "JAVIER EDINSON VASQUEZ GAMARRA", edad: 55, doc: "43338195", pnr: "10691", destino: "CHICLAYO", origen: "Plaza Norte", importe: 90 },
        { asiento: "18", boleto: "B703-268", nombre: "ALESSANDRO EDINSON VASQUEZ GUEVARA", edad: 32, doc: "75230376", pnr: "10691", destino: "CHICLAYO", origen: "Plaza Norte", importe: 90 },
        { asiento: "19", boleto: "B703-269", nombre: "EDWARD JOEL CHUNGA EGGART", edad: 32, doc: "75301755", pnr: "10695", destino: "CHEPÉN", origen: "Plaza Norte", importe: 90 },
        { asiento: "20", boleto: "B703-270", nombre: "LAURIANA MÍA CHUNGA EGGART", edad: 32, doc: "90150760", pnr: "10695", destino: "CHEPÉN", origen: "Plaza Norte", importe: 90 },
        { asiento: "21", boleto: "B737-18368", nombre: "BETTY CHINCHAY HUAMAN", edad: 37, doc: "44997015", pnr: "12731", destino: "CHICLAYO", origen: "Plaza Norte", importe: 100 },
        { asiento: "22", boleto: "B703-260", nombre: "JENNY EGGART FERNANDEZ", edad: 46, doc: "40162812", pnr: "10686", destino: "CHEPÉN", origen: "Plaza Norte", importe: 90 },
        { asiento: "23", boleto: "B737-18676", nombre: "MARIELA EDITH ESPINOZA LAINES", edad: 56, doc: "40905837", pnr: "TR16844", destino: "CHICLAYO", origen: "28 De Julio", importe: 150 },
        { asiento: "24", boleto: "B703-262", nombre: "MARTHA SOLEDAD CHOLAN CALLIRGOS", edad: 59, doc: "07144924", pnr: "10686", destino: "CHEPÉN", origen: "Plaza Norte", importe: 90 },
        { asiento: "25", boleto: "B703-264", nombre: "ROSA DEL CARMEN", edad: 32, doc: "40752114", pnr: "10686", destino: "CHEPÉN", origen: "Plaza Norte", importe: 90 },
        { asiento: "26", boleto: "B703-263", nombre: "ROMANI CHRISTE", edad: 32, doc: "76973836", pnr: "10686", destino: "CHEPÉN", origen: "Plaza Norte", importe: 90 },
        { asiento: "27", boleto: "B400-2439", nombre: "GRABIELA JULISSA CAJUSOL SANDOVAL", edad: 32, doc: "47973094", pnr: "13091", destino: "CHICLAYO", origen: "28 De Julio", importe: 90 },
        { asiento: "28", boleto: "B400-2438", nombre: "JOSIAS JONATAN MENDOZA ORDOÑEZ", edad: 36, doc: "45817305", pnr: "13091", destino: "CHICLAYO", origen: "28 De Julio", importe: 90 },
        { asiento: "29", boleto: "B703-265", nombre: "LINDA SAYURI ARCOS CALLIRGOS", edad: 32, doc: "74182095", pnr: "10686", destino: "CHEPÉN", origen: "Plaza Norte", importe: 90 },
        { asiento: "30", boleto: "B703-266", nombre: "LUZ MARIEL RAMOS CHOLAN", edad: 32, doc: "78464247", pnr: "10686", destino: "CHEPÉN", origen: "Plaza Norte", importe: 90 },
        { asiento: "31", boleto: "B737-18679", nombre: "JAQUELINE JANNET SAAVEDRA PURISACA", edad: 35, doc: "16629039", pnr: "TR16886", destino: "CHICLAYO", origen: "Plaza Norte", importe: 150 },
        { asiento: "32", boleto: "KPB-150", nombre: "DIEGO JESUS BAUTISTA SAMAME", edad: 18, doc: "71143858", pnr: "12472", destino: "CHICLAYO", origen: "28 De Julio", importe: 90 },
        { asiento: "33", boleto: "B400-2581", nombre: "JESUS ADRIAN GONZALES FLORES", edad: 28, doc: "72032339", pnr: "14052", destino: "CHICLAYO", origen: "28 De Julio", importe: 120 },
        { asiento: "34", boleto: "B738-13007", nombre: "AYMAR JUNIOR PEREZ VASQUEZ", edad: 21, doc: "73576164", pnr: "14458", destino: "CHICLAYO", origen: "Ventanilla", importe: 120 },
        { asiento: "35", boleto: "F400-330", nombre: "FANNY HUAMAN HUAMAN", edad: 38, doc: "46286669", pnr: "14371", destino: "CHICLAYO", origen: "28 De Julio", importe: 120 },
        { asiento: "36", boleto: "F400-334", nombre: "VICTORIA AMPARO HUAMAN VISOSA", edad: 0, doc: "16539695", pnr: "14485", destino: "CHICLAYO", origen: "Plaza Norte", importe: 120 },
        { asiento: "37", boleto: "B737-18678", nombre: "MARINA PURISACA VDA DE SAAVEDRA", edad: 65, doc: "16635372", pnr: "TR16886", destino: "CHICLAYO", origen: "Plaza Norte", importe: 150 },
        { asiento: "38", boleto: "B737-18668", nombre: "JULIO EDGARDO LAMELA HERNANDEZ", edad: 51, doc: "19326816", pnr: "TR16708", destino: "CHEPÉN", origen: "Plaza Norte", importe: 150 },
        { asiento: "39", boleto: "B726-17728", nombre: "ISABELLA ROMERO PAREDES", edad: 7, doc: "90750212", pnr: "14545", destino: "CHICLAYO", origen: "Marcopolo", importe: 120 },
        { asiento: "40", boleto: "B726-17727", nombre: "THIAGO ROMERO PAREDES", edad: 10, doc: "79095818", pnr: "14545", destino: "CHICLAYO", origen: "Marcopolo", importe: 120 },
        { asiento: "41", boleto: "B726-17725", nombre: "JORGE LUIS ROMERO FLORES", edad: 42, doc: "42231233", pnr: "14545", destino: "CHICLAYO", origen: "Marcopolo", importe: 120 },
        { asiento: "42", boleto: "B726-17726", nombre: "CARMEN ROSA PAREDES ASALDE", edad: 32, doc: "72496186", pnr: "14545", destino: "CHICLAYO", origen: "Marcopolo", importe: 120 }
    ];

    // ==========================================
    // 2. ORDENAR Y RELLENAR
    // ==========================================
    pasajeros.sort((a, b) => parseInt(a.asiento) - parseInt(b.asiento));

    const CAPACIDAD = 64;
    const totalReal = pasajeros.length;
    const asientosLibres = CAPACIDAD - totalReal;

    if (pasajeros.length < CAPACIDAD) {
        for (let i = 0; i < asientosLibres; i++) {
            pasajeros.push({
                asiento: "&nbsp;", 
                boleto: "", nombre: "", edad: "", doc: "", 
                pnr: "", destino: "", origen: "", importe: "" 
            });
        }
    }

    // ==========================================
    // 3. RENDERIZADO (CON S/. PEN)
    // ==========================================
    const renderTable = (tableBodyId) => {
        const tableBody = document.getElementById(tableBodyId);
        if (!tableBody) return;

        tableBody.innerHTML = '';

        pasajeros.forEach(p => {
            const row = document.createElement("tr");

            let origenDisplay = p.origen ? p.origen.replace('-LIMA', '') : "";
            
            // AGREGAR "S/." AL IMPORTE
            let importeDisplay = "";
            if (p.importe && !isNaN(p.importe)) {
                importeDisplay = "S/. " + parseFloat(p.importe).toFixed(2);
            }

            row.innerHTML = `
                <td>${p.asiento}</td>
                <td>${p.nombre}</td>
                <td>${p.doc}</td>
                <td>${p.edad}</td>
                <td>${p.boleto}</td>
                <td>${p.pnr}</td>
                <td>${p.destino}</td>
                <td>${origenDisplay}</td>
                <td>${importeDisplay}</td>
            `;
            tableBody.appendChild(row);
        });
    };

    renderTable('tableBody1');
    renderTable('tableBody2');
    renderTable('tableBody3');

    // ==========================================
    // 4. TOTALES
    // ==========================================
    const updateTotals = () => {
        document.querySelectorAll('.totalAsientos').forEach(el => el.innerText = CAPACIDAD);
        document.querySelectorAll('.totalPasajeros').forEach(el => el.innerText = totalReal);
        document.querySelectorAll('.totalLibres').forEach(el => el.innerText = asientosLibres);
    };

    updateTotals();
});