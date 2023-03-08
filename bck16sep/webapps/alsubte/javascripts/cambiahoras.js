function cambiaHoras()
{
	//navigator.vibrate([100,100,100]);
	//navigator.vibrate([100,100,500]);
	//navigator.vibrate([500,100,500,100,500]);
	
	
	var d = new Date();
	var dia = d.getDay();
	var timer;
	
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";

	
	var fecha=new Date()
	var hora=fecha.getHours()
	var minuto=fecha.getMinutes()
	if (hora==0){hora = "00";}
	if (minuto<10){minuto = "0"+minuto;}
	var fueraServicioA = 0;
	var fueraServicioB = 0;
	var fueraServicioC = 0;
	var fueraServicioD = 0;
	var fueraServicioE = 0;
	var fueraServicioH = 0;
	var fueraServicioP = 0;
	var cancelado = 0;
	var reducido = 0;
    var demorado = 0;

	
	if (dia==0){ //domingo
		document.getElementById('ultimotrenASale').innerHTML = "22:08"; 	//08:00
		document.getElementById('ultimotrenAEntra').innerHTML = "22:36";	//08:00
		document.getElementById('ultimotrenBSale').innerHTML = "22:00";		//08:00
		document.getElementById('ultimotrenBEntra').innerHTML = "22:28";	//08:00
		document.getElementById('ultimotrenCSale').innerHTML = "22:21";		//08:00
		document.getElementById('ultimotrenCEntra').innerHTML = "22:23";	//08:00
		document.getElementById('ultimotrenDSale').innerHTML = "22:00";		//08:00
		document.getElementById('ultimotrenDEntra').innerHTML = "22:28";	//08:00
		document.getElementById('ultimotrenESale').innerHTML = "22:03";		//08:00
		document.getElementById('ultimotrenEEntra').innerHTML = "22:35";	//08:00
		document.getElementById('ultimotrenHSale').innerHTML = "22:30";		//08:00
		document.getElementById('ultimotrenHEntra').innerHTML = "22:30";	//08:31
		//document.getElementById('ultimotrenPSale').innerHTML = "21:03";	//08:00
		//document.getElementById('ultimotrenPEntra').innerHTML = "21:29";	//08:31
		document.getElementById('ultimotrenPPSale').innerHTML = "20:53";	//08:09
		document.getElementById('ultimotrenPPEntra').innerHTML = "21:22";	//08:38
		
		//Si la hora es mayor/igual al cierre ó menor a la hora de apertura
		//Líneas A
        if  (((hora >= 22) && (minuto >= 08)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaA').innerHTML = "";
        	document.getElementById('letraLineaA').className = "bl-box";
        	document.getElementById('boxLineaA').className = "bl-icon findelservicio";
        	document.getElementById('estadoA').innerHTML = "Fin del Servicio";
        	document.getElementById('descA').innerHTML = "PRIMER TREN <br> a San Pedrito - 8:00<br>a Plaza de Mayo - 8:00";
        	fueraServicioA = 1;
        }
        //Líneas B
        if  ((hora >= 22) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaB').innerHTML = "";
        	document.getElementById('letraLineaB').className = "bl-box";
        	document.getElementById('boxLineaB').className = "bl-icon findelservicio";
        	document.getElementById('estadoB').innerHTML = "Fin del Servicio";
        	document.getElementById('descB').innerHTML = "PRIMER TREN <br> a J. M. de Rosas - 8:00<br>a L. N. Alem - 8:00";
        	fueraServicioB = 1;
        }
        //Líneas C
        if  (((hora >= 22) && (minuto >= 21)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaC').innerHTML = "";
        	document.getElementById('letraLineaC').className = "bl-box";
        	document.getElementById('boxLineaC').className = "bl-icon findelservicio";
        	document.getElementById('estadoC').innerHTML = "Fin del Servicio";
        	document.getElementById('descC').innerHTML = "PRIMER TREN <br> a Constitucion - 8:00<br>a Retiro - 8:00";
        	fueraServicioC = 1;
        }
        //Líneas D
        if  ((hora >= 22) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaD').innerHTML = "";
        	document.getElementById('letraLineaD').className = "bl-box";
        	document.getElementById('boxLineaD').className = "bl-icon findelservicio";
        	document.getElementById('estadoD').innerHTML = "Fin del Servicio";
        	document.getElementById('descD').innerHTML = "PRIMER TREN <br> a C. de Tucuman - 8:00<br>a Catedral - 8:00";
        	fueraServicioD = 1;
        }
        //Líneas E
        if  (((hora >= 22) && (minuto >= 03)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaE').innerHTML = "";
        	document.getElementById('letraLineaE').className = "bl-box";
        	document.getElementById('boxLineaE').className = "bl-icon findelservicio";
        	document.getElementById('estadoE').innerHTML = "Fin del Servicio";
        	document.getElementById('descE').innerHTML = "PRIMER TREN <br> a Pza. de los Virreyes - 8:00<br>a Bolivar - 8:00";
        	fueraServicioE = 1;
        }
        //Líneas H
        if  (((hora >= 23) && (minuto >= 30)) || (hora < 05)){
        	document.getElementById('frecuenciaLineaH').innerHTML = "";
        	document.getElementById('letraLineaH').className = "bl-box";
        	document.getElementById('boxLineaH').className = "bl-icon findelservicio";
        	document.getElementById('estadoH').innerHTML = "Fin del Servicio";
        	document.getElementById('descH').innerHTML = "PRIMER TREN <br> a Hospitales - 8:00<br>a Corrientes - 8:00";
        	fueraServicioH = 1;
        }
        //Líneas P
        if  (((hora >= 20) && (minuto >= 53)) || ((hora >= 21) && (hora <= 23)) || (hora < 05) || ((hora == 05) && (minuto < 37))){
        	document.getElementById('frecuenciaLineaP').innerHTML = "";
        	document.getElementById('letraLineaP').className = "bl-box";
        	document.getElementById('boxLineaP').className = "bl-icon findelservicio";
        	document.getElementById('estadoP').innerHTML = "Fin del Servicio";
        	document.getElementById('descP').innerHTML = "PRIMER TREN <br> a Int. Saguier - 8:00/8:09<br>a Ctro. Civico Lugano - 8:31<br>a Gral. Savio - 8:38";
        	fueraServicioP = 1;
        }
	}
	
	if (dia>0 && dia<6){ //entre semana
		document.getElementById('ultimotrenASale').innerHTML = "22:28";		//05:00
		document.getElementById('ultimotrenAEntra').innerHTML = "22:56";	//05:00		
		document.getElementById('ultimotrenBSale').innerHTML = "22:21";		//05:00
		document.getElementById('ultimotrenBEntra').innerHTML = "22:49";	//05:00
		document.getElementById('ultimotrenCSale').innerHTML = "22:45";		//05:00
		document.getElementById('ultimotrenCEntra').innerHTML = "22:47";	//05:00
		document.getElementById('ultimotrenDSale').innerHTML = "22:24";		//05:00
		document.getElementById('ultimotrenDEntra').innerHTML = "22:51";	//05:00
		document.getElementById('ultimotrenESale').innerHTML = "22:27";		//05:00
		document.getElementById('ultimotrenEEntra').innerHTML = "22:59";	//05:00
		document.getElementById('ultimotrenHSale').innerHTML = "23:06";		//05:00
		document.getElementById('ultimotrenHEntra').innerHTML = "23:02";	//05:00
		//document.getElementById('ultimotrenPSale').innerHTML = "21:00";	//05:30
		//document.getElementById('ultimotrenPEntra').innerHTML = "21:30";	//06:01
		document.getElementById('ultimotrenPPSale').innerHTML = "20:56";	//05:37
		document.getElementById('ultimotrenPPEntra').innerHTML = "21:23";	//06:06

		//Si la hora es mayor/igual al cierre ó menor a la hora de apertura
		//Líneas A
        if  (((hora >= 22) && (minuto >= 28)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaA').innerHTML = "";
        	document.getElementById('letraLineaA').className = "bl-box";
        	document.getElementById('boxLineaA').className = "bl-icon findelservicio";
        	document.getElementById('estadoA').innerHTML = "Fin del Servicio";
        	document.getElementById('descA').innerHTML = "PRIMER TREN <br> a San Pedrito - 5:00<br>a Plaza de Mayo - 5:00";
        	fueraServicioA = 1;
        }
        //Líneas B
        if  (((hora >= 22) && (minuto >= 21)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaB').innerHTML = "";
        	document.getElementById('letraLineaB').className = "bl-box";
        	document.getElementById('boxLineaB').className = "bl-icon findelservicio";
        	document.getElementById('estadoB').innerHTML = "Fin del Servicio";
        	document.getElementById('descB').innerHTML = "PRIMER TREN <br> a J. M. de Rosas - 5:00<br>a L. N. Alem - 5:00";
        	fueraServicioB = 1;
        }
        //Líneas C
        if  (((hora >= 22) && (minuto >= 45)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaC').innerHTML = "";
        	document.getElementById('letraLineaC').className = "bl-box";
        	document.getElementById('boxLineaC').className = "bl-icon findelservicio";
        	document.getElementById('estadoC').innerHTML = "Fin del Servicio";
        	document.getElementById('descC').innerHTML = "PRIMER TREN <br> a Constitucion - 5:00<br>a Retiro - 5:00";
        	fueraServicioC = 1;
        }
        //Líneas D
        if  (((hora >= 22) && (minuto >= 24)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaD').innerHTML = "";
        	document.getElementById('letraLineaD').className = "bl-box";
        	document.getElementById('boxLineaD').className = "bl-icon findelservicio";
        	document.getElementById('estadoD').innerHTML = "Fin del Servicio";
        	document.getElementById('descD').innerHTML = "PRIMER TREN <br> a C. de Tucuman - 4:00<br>a Catedral - 5:00";
        	fueraServicioD = 1;
        }
        //Líneas E
        if  (((hora >= 22) && (minuto >= 27)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaE').innerHTML = "";
        	document.getElementById('letraLineaE').className = "bl-box";
        	document.getElementById('boxLineaE').className = "bl-icon findelservicio";
        	document.getElementById('estadoE').innerHTML = "Fin del Servicio";
        	document.getElementById('descE').innerHTML = "PRIMER TREN <br> a Pza. de los Virreyes - 5:00<br>a Bolivar - 5:00";
        	fueraServicioE = 1;
        }
        //Líneas H
        if  (((hora >= 23) && (minuto >= 02)) || (hora < 05)){
        	document.getElementById('frecuenciaLineaH').innerHTML = "";
        	document.getElementById('letraLineaH').className = "bl-box";
        	document.getElementById('boxLineaH').className = "bl-icon findelservicio";
        	document.getElementById('estadoH').innerHTML = "Fin del Servicio";
        	document.getElementById('descH').innerHTML = "PRIMER TREN <br> a Hospitales - 5:00<br>a Corrientes - 5:00";
        	fueraServicioH = 1;
        }
        //Líneas P
        if  (((hora >= 20) && (minuto >= 56)) || ((hora >= 21) && (hora <= 23)) || (hora < 05) || ((hora == 05) && (minuto < 37))){
        	document.getElementById('frecuenciaLineaP').innerHTML = "";
        	document.getElementById('letraLineaP').className = "bl-box";
        	document.getElementById('boxLineaP').className = "bl-icon findelservicio";
        	document.getElementById('estadoP').innerHTML = "Fin del Servicio";
        	document.getElementById('descP').innerHTML = "PRIMER TREN <br> a Int. Saguier - 5:30/5:37<br>a Ctro. Civico Lugano - 6:01<br>a Gral. Savio - 6:06";
        	fueraServicioP = 1;
        }
        
	}
	
	if (dia==6){ //sabado
		document.getElementById('ultimotrenASale').innerHTML = "22:28";		//05:00
		document.getElementById('ultimotrenAEntra').innerHTML = "22:56";	//05:00
		document.getElementById('ultimotrenBSale').innerHTML = "22:21";		//05:00
		document.getElementById('ultimotrenBEntra').innerHTML = "22:49";	//05:00
		document.getElementById('ultimotrenCSale').innerHTML = "22:45";		//05:00
		document.getElementById('ultimotrenCEntra').innerHTML = "22:47";	//05:00
		document.getElementById('ultimotrenDSale').innerHTML = "22:24";		//05:00
		document.getElementById('ultimotrenDEntra').innerHTML = "22:51";	//05:00
		document.getElementById('ultimotrenESale').innerHTML = "22:27";		//05:00
		document.getElementById('ultimotrenEEntra').innerHTML = "22:59";	//05:00
		document.getElementById('ultimotrenHSale').innerHTML = "23:00";		//05:00
		document.getElementById('ultimotrenHEntra').innerHTML = "23:00";	//05:00
		//document.getElementById('ultimotrenPSale').innerHTML = "21:07";	//05:30
		//document.getElementById('ultimotrenPEntra').innerHTML = "21:34";	//06:31
		document.getElementById('ultimotrenPPSale').innerHTML = "20:58";	//05:39
		document.getElementById('ultimotrenPPEntra').innerHTML = "21:26";	//06:08
		
		//Si la hora es mayor/igual al cierre ó menor a la hora de apertura
		//Líneas A
        if  (((hora >= 22) && (minuto >= 28)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaA').innerHTML = "";
        	document.getElementById('letraLineaA').className = "bl-box";
        	document.getElementById('boxLineaA').className = "bl-icon findelservicio";
        	document.getElementById('estadoA').innerHTML = "Fin del Servicio";
        	document.getElementById('descA').innerHTML = "PRIMER TREN <br> a San Pedrito - 5:00<br>a Plaza de Mayo - 5:00";
        	fueraServicioA = 1;
        }
        //Líneas B
        if  (((hora >= 22) && (minuto >= 21)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaB').innerHTML = "";
        	document.getElementById('letraLineaB').className = "bl-box";
        	document.getElementById('boxLineaB').className = "bl-icon findelservicio";
        	document.getElementById('estadoB').innerHTML = "Fin del Servicio";
        	document.getElementById('descB').innerHTML = "PRIMER TREN <br> a J. M. de Rosas - 5:00<br>a L. N. Alem - 5:00";
        	fueraServicioB = 1;
        }
        //Líneas C
        if  (((hora >= 22) && (minuto >= 45)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaC').innerHTML = "";
        	document.getElementById('letraLineaC').className = "bl-box";
        	document.getElementById('boxLineaC').className = "bl-icon findelservicio";
        	document.getElementById('estadoC').innerHTML = "Fin del Servicio";
        	document.getElementById('descC').innerHTML = "PRIMER TREN <br> a Constitucion - 5:00<br>a Retiro - 5:00";
        	fueraServicioC = 1;
        }
        //Líneas D
        if  (((hora >= 22) && (minuto >= 24)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaD').innerHTML = "";
        	document.getElementById('letraLineaD').className = "bl-box";
        	document.getElementById('boxLineaD').className = "bl-icon findelservicio";
        	document.getElementById('estadoD').innerHTML = "Fin del Servicio";
        	document.getElementById('descD').innerHTML = "PRIMER TREN <br> a C. de Tucuman - 4:00<br>a Catedral - 5:00";
        	fueraServicioD = 1;
        }
        //Líneas E
        if  (((hora >= 22) && (minuto >= 27)) || ((hora > 22) || (hora < 05))){
        	document.getElementById('frecuenciaLineaE').innerHTML = "";
        	document.getElementById('letraLineaE').className = "bl-box";
        	document.getElementById('boxLineaE').className = "bl-icon findelservicio";
        	document.getElementById('estadoE').innerHTML = "Fin del Servicio";
        	document.getElementById('descE').innerHTML = "PRIMER TREN <br> a Pza. de los Virreyes - 5:00<br>a Bolivar - 5:00";
        	fueraServicioE = 1;
        }
        //Líneas H
        if  ((hora >= 23) || (hora < 05)){
        	document.getElementById('frecuenciaLineaH').innerHTML = "";
        	document.getElementById('letraLineaH').className = "bl-box frecuenciah";
        	document.getElementById('boxLineaH').className = "bl-icon findelservicio";
        	document.getElementById('estadoH').innerHTML = "Fin del Servicio";
        	document.getElementById('descH').innerHTML = "PRIMER TREN <br> a Hospitales - 5:00<br>a Corrientes - 5:00";
        	fueraServicioH = 1;
        }
        //Líneas P
        if  (((hora >= 20) && (minuto >= 58)) || ((hora >= 21) && (hora <= 23)) || (hora < 05) || ((hora == 05) && (minuto < 37))){
        	document.getElementById('frecuenciaLineaP').innerHTML = "";
        	document.getElementById('letraLineaP').className = "bl-box";
        	document.getElementById('boxLineaP').className = "bl-icon findelservicio";
        	document.getElementById('estadoP').innerHTML = "Fin del Servicio";
        	document.getElementById('descP').innerHTML = "PRIMER TREN <br> a Int. Saguier - 5:30/5:39<br>a Ctro. Civico Lugano - 6:01<br>a Gral. Savio - 6:08";
        	fueraServicioP = 1;
        }
	}
	
	

	$.get("listinfosubte.xml", function (xml) {
	    $(xml).find("Linea").each(function () {
	       var nombre = $(this).find('nombre').text();
	       nombre = $.trim(nombre);
	       var estado = $(this).find('estado').text();
	       estado = $.trim(estado);
	       var estadoLower = estado.toLowerCase();
	       var frecuencia = $(this).find('frecuencia').text();
	       frecuencia = $.trim(frecuencia);
	       //alert(nombre + " " + estado + " " + frecuencia);

	       var frecuenciaTemp = Number(frecuencia);
	       var frecuenciaMinutos = frecuenciaTemp;
	       frecuenciaMinutos = Math.floor(frecuenciaMinutos/60);
	       var frecuenciaSegundos = frecuenciaTemp-(frecuenciaMinutos*60);
	       var frecuenciaSegundosChar = ""
	       if (frecuenciaSegundos<10){
	       	    frecuenciaSegundosChar="0"
	       }
	       
	       /*NORMAL*/
	       if ((estado == "") || (estadoLower.search("normal") != -1)){
		       //alert("Linea '"+nombre+"' con estado:"+estado);

			   if (fueraServicioA != 1) {
				   if (nombre.search("nea A") != -1) {
				       document.getElementById('estadoA').innerHTML = "Servicio Normal";
				       document.getElementById('descA').innerHTML = estado;
				       document.getElementById('boxLineaA').className = "bl-icon";
				       document.getElementById('letraLineaA').className = "bl-box";
				       document.getElementById('frecuenciaLineaA').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
				   }  
			   }
			   if (fueraServicioB != 1) {
				   if (nombre.search("nea B") != -1) {
				       document.getElementById('estadoB').innerHTML = "Servicio Normal";
				       document.getElementById('descB').innerHTML = estado;
				       document.getElementById('boxLineaB').className = "bl-icon";
				       document.getElementById('letraLineaB').className = "bl-box";
				       document.getElementById('frecuenciaLineaB').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
				   }  
			   }
			   if (fueraServicioC != 1) {
				   if (nombre.search("nea C") != -1) {
				       document.getElementById('estadoC').innerHTML = "Servicio Normal";
				       document.getElementById('descC').innerHTML = estado;
				       document.getElementById('boxLineaC').className = "bl-icon";
				       document.getElementById('letraLineaC').className = "bl-box";
				       document.getElementById('frecuenciaLineaC').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
				   }  
			   }
			   if (fueraServicioD != 1) {
				   if (nombre.search("nea D") != -1) {
				       document.getElementById('estadoD').innerHTML = "Servicio Normal";
				       document.getElementById('descD').innerHTML = estado;
				       document.getElementById('boxLineaD').className = "bl-icon";
				       document.getElementById('letraLineaD').className = "bl-box";
				       document.getElementById('frecuenciaLineaD').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
				   }  
			   }
			   if (fueraServicioE != 1) {
				   if (nombre.search("nea E") != -1) {
				       document.getElementById('estadoE').innerHTML = "Servicio Normal";
				       document.getElementById('descE').innerHTML = estado;
				       document.getElementById('boxLineaE').className = "bl-icon";
				       document.getElementById('letraLineaE').className = "bl-box";
				       document.getElementById('frecuenciaLineaE').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
				   }  
			   }
			   if (fueraServicioH != 1) {
				   if (nombre.search("nea H") != -1) {
				       document.getElementById('estadoH').innerHTML = "Servicio Normal";
				       document.getElementById('descH').innerHTML = estado;
				       document.getElementById('boxLineaH').className = "bl-icon bl-icon-h";
				       document.getElementById('letraLineaH').className = "bl-box";
				       document.getElementById('frecuenciaLineaH').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
				       document.getElementById('frecuenciaLineaH').className = "frecuencia frecuenciah";
				   }  
			   }
			   if (fueraServicioH != 1) {
				   if (nombre.search("nea P") != -1) {
				       document.getElementById('estadoP').innerHTML = "Servicio Normal";
				       document.getElementById('descP').innerHTML = estado;
				       document.getElementById('boxLineaP').className = "bl-icon";
				       document.getElementById('letraLineaP').className = "bl-box";
				       document.getElementById('frecuenciaLineaP').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
				   }  
			   }
	       } else {
	        /*
	        NORMAL
			servicio normal (ver si hay mas contenido, o si es solo normal)
			DEMORADO
			demora
			CANCELADO
			gremial interrumpido interrumpc paro
			REDUCIDO
			entre estaciones
			estaciones
			limitado
			FIN DEL SERVICIO
			*/
	       	//navigator.vibrate([100,100,100]);
			//navigator.vibrate([100,100,500]);
			//navigator.vibrate([500,100,500,100,500]);
		    //alert(nombre+" con SIN estado normal");
		       //if (estado.search("nterrup")!= 0){
			   //    alert(estado.search("x"));
		       //}
		       
		       //REDUCIDO
		       if ((estadoLower.search("entre estaciones") != -1) || (estadoLower.search("estaciones") != -1) || (estadoLower.search("limitado") != -1)){
			       if (fueraServicioA != 1) {
					   if (nombre.search("nea A") != -1) {
					       document.getElementById('estadoA').innerHTML = "Servicio Reducido";
					       document.getElementById('descA').innerHTML = estado;
					       document.getElementById('boxLineaA').className = "bl-icon reducido";
					       document.getElementById('letraLineaA').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaA').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       reducido += 1;
					   }  
				   }
				   if (fueraServicioB != 1) {
					   if (nombre.search("nea B") != -1) {
					       document.getElementById('estadoB').innerHTML = "Servicio Reducido";
					       document.getElementById('descB').innerHTML = estado;
					       document.getElementById('boxLineaB').className = "bl-icon reducido";
					       document.getElementById('letraLineaB').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaB').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       reducido += 1;
					   }  
				   }
				   if (fueraServicioC != 1) {
					   if (nombre.search("nea C") != -1) {
					       document.getElementById('estadoC').innerHTML = "Servicio Reducido";
					       document.getElementById('descC').innerHTML = estado;
					       document.getElementById('boxLineaC').className = "bl-icon reducido";
					       document.getElementById('letraLineaC').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaC').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       reducido += 1;
					   }  
				   }
				   if (fueraServicioP != 1) {
					   if (nombre.search("nea D") != -1) {
					       document.getElementById('estadoD').innerHTML = "Servicio Reducido";
					       document.getElementById('descD').innerHTML = estado;
					       document.getElementById('boxLineaD').className = "bl-icon reducido";
					       document.getElementById('letraLineaD').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaD').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       reducido += 1;
					   }  
				   }
				   if (fueraServicioP != 1) {
					   if (nombre.search("nea E") != -1) {
					       document.getElementById('estadoE').innerHTML = "Servicio Reducido";
					       document.getElementById('descE').innerHTML = estado;
					       document.getElementById('boxLineaE').className = "bl-icon reducido";
					       document.getElementById('letraLineaE').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaE').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       reducido += 1;
					   }  
				   }
				   if (fueraServicioP != 1) {
					   if (nombre.search("nea H") != -1) {
					       document.getElementById('estadoH').innerHTML = "Servicio Reducido";
					       document.getElementById('descH').innerHTML = estado;
					       document.getElementById('boxLineaH').className = "bl-icon reducido";
					       document.getElementById('letraLineaH').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaH').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       document.getElementById('frecuenciaLineaH').className = "frecuencia frecuenciah";
					       reducido += 1;
					   }  
				   }
			       if (fueraServicioP != 1) {
					   if (nombre.search("nea P") != -1) {
					       document.getElementById('estadoP').innerHTML = "Servicio Reducido";
					       document.getElementById('descP').innerHTML = estado;
					       document.getElementById('boxLineaP').className = "bl-icon reducido";
					       document.getElementById('letraLineaP').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaP').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       reducido += 1;
					   }  
				   }		       
		       }
		       //DEMORA
		       if (estadoLower.search("demora") != -1){
			       if (fueraServicioA != 1) {
					   if (nombre.search("nea A") != -1) {
					       document.getElementById('estadoA').innerHTML = "Servicio Demorado";
					       document.getElementById('descA').innerHTML = estado;
					       document.getElementById('boxLineaA').className = "bl-icon message";
					       document.getElementById('letraLineaA').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaA').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       demorado += 1
					   }  
				   }
				   if (fueraServicioB != 1) {
					   if (nombre.search("nea B") != -1) {
					       document.getElementById('estadoB').innerHTML = "Servicio Demorado";
					       document.getElementById('descB').innerHTML = estado;
					       document.getElementById('boxLineaB').className = "bl-icon message";
					       document.getElementById('letraLineaB').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaB').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       demorado += 1
					   }  
				   }
			       if (fueraServicioC != 1) {
					   if (nombre.search("nea C") != -1) {
					       document.getElementById('estadoC').innerHTML = "Servicio Demorado";
					       document.getElementById('descC').innerHTML = estado;
					       document.getElementById('boxLineaC').className = "bl-icon message";
					       document.getElementById('letraLineaC').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaC').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       demorado += 1
					   }  
				   }
				   if (fueraServicioD != 1) {
					   if (nombre.search("nea D") != -1) {
					       document.getElementById('estadoD').innerHTML = "Servicio Demorado";
					       document.getElementById('descD').innerHTML = estado;
					       document.getElementById('boxLineaD').className = "bl-icon message";
					       document.getElementById('letraLineaD').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaD').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       demorado += 1
					   }  
				   }
				   if (fueraServicioE != 1) {
					   if (nombre.search("nea E") != -1) {
					       document.getElementById('estadoE').innerHTML = "Servicio Demorado";
					       document.getElementById('descE').innerHTML = estado;
					       document.getElementById('boxLineaE').className = "bl-icon message";
					       document.getElementById('letraLineaE').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaE').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       demorado += 1
					   }  
				   }
				   if (fueraServicioH != 1) {
					   if (nombre.search("nea H") != -1) {
					       document.getElementById('estadoH').innerHTML = "Servicio Demorado";
					       document.getElementById('descH').innerHTML = estado;
					       document.getElementById('boxLineaH').className = "bl-icon message";
					       document.getElementById('letraLineaH').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaH').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       document.getElementById('frecuenciaLineaH').className = "frecuencia frecuenciah";
					       demorado += 1
					   }  
				   }
				   if (fueraServicioP != 1) {
					   if (nombre.search("nea P") != -1) {
					       document.getElementById('estadoP').innerHTML = "Servicio Demorado";
					       document.getElementById('descP').innerHTML = estado;
					       document.getElementById('boxLineaP').className = "bl-icon message";
					       document.getElementById('letraLineaP').className = "bl-box problema";
					       document.getElementById('frecuenciaLineaP').innerHTML = frecuenciaMinutos+"'"+frecuenciaSegundosChar+frecuenciaSegundos+"''";
					       demorado += 1
					   }  
				   }
		       }

		       //CANCELADO
		       if ((estadoLower.search("gremial") != -1) || (estadoLower.search("nterrump") != -1) || (estadoLower.search("paro") != -1)){
			       if (fueraServicioA != 1) {
					   if (nombre.search("nea A") != -1) {
					       document.getElementById('estadoA').innerHTML = "Servicio Cancelado";
					       document.getElementById('descA').innerHTML = estado;
					       document.getElementById('boxLineaA').className = "bl-icon messagebr";
					       document.getElementById('letraLineaA').className = "bl-box problemared";
					       document.getElementById('frecuenciaLineaA').innerHTML = "";
					       cancelado += 1;
					   }  
				   }
				   if (fueraServicioB != 1) {
					   if (nombre.search("nea B") != -1) {
					       document.getElementById('estadoB').innerHTML = "Servicio Cancelado";
					       document.getElementById('descB').innerHTML = estado;
					       document.getElementById('boxLineaB').className = "bl-icon messagebr";
					       document.getElementById('letraLineaB').className = "bl-box problemared";
					       document.getElementById('frecuenciaLineaB').innerHTML = "";
					       cancelado += 1;
					   }  
				   }
				   if (fueraServicioC != 1) {
					   if (nombre.search("nea C") != -1) {
					       document.getElementById('estadoC').innerHTML = "Servicio Cancelado";
					       document.getElementById('descC').innerHTML = estado;
					       document.getElementById('boxLineaC').className = "bl-icon messagebr";
					       document.getElementById('letraLineaC').className = "bl-box problemared";
					       document.getElementById('frecuenciaLineaC').innerHTML = "";
					       cancelado += 1;
					   }  
				   }
				   if (fueraServicioD != 1) {
					   if (nombre.search("nea D") != -1) {
					       document.getElementById('estadoD').innerHTML = "Servicio Cancelado";
					       document.getElementById('descD').innerHTML = estado;
					       document.getElementById('boxLineaD').className = "bl-icon messagebr";
					       document.getElementById('letraLineaD').className = "bl-box problemared";
					       document.getElementById('frecuenciaLineaD').innerHTML = "";
					       cancelado += 1;
					   }  
				   }
			       if (fueraServicioE != 1) {
					   if (nombre.search("nea E") != -1) {
					       document.getElementById('estadoE').innerHTML = "Servicio Cancelado";
					       document.getElementById('descE').innerHTML = estado;
					       document.getElementById('boxLineaE').className = "bl-icon messagebr";
					       document.getElementById('letraLineaE').className = "bl-box problemared";
					       document.getElementById('frecuenciaLineaE').innerHTML = "";
					       cancelado += 1;
					   }  
				   }
				   if (fueraServicioH != 1) {
					   if (nombre.search("nea H") != -1) {
					       document.getElementById('estadoH').innerHTML = "Servicio Cancelado";
					       document.getElementById('descH').innerHTML = estado;
					       document.getElementById('boxLineaH').className = "bl-icon messagebr";
					       document.getElementById('letraLineaH').className = "bl-box problemared";
					       document.getElementById('frecuenciaLineaH').innerHTML = "";
					       cancelado += 1;
					   }  
				   }
				   if (fueraServicioP != 1) {
					   if (nombre.search("nea P") != -1) {
					       document.getElementById('estadoP').innerHTML = "Servicio Cancelado";
					       document.getElementById('descP').innerHTML = estado;
					       document.getElementById('boxLineaP').className = "bl-icon messagebr";
					       document.getElementById('letraLineaP').className = "bl-box problemared";
					       document.getElementById('frecuenciaLineaP').innerHTML = "";
					       cancelado += 1;
					   }  
				   }

		       }

	       }
	       
	    });
	    
	    var fechaactualizacion = $(xml).find("FechaActualizacion").text();
	    document.getElementById('horaactualizacion').innerHTML = "actualizad0<br><b>"+fechaactualizacion+"</b>";


	    //vibra sólo por el peor de las alertas
		if (cancelado>0) {
			navigator.vibrate([500,150,500,150,500]);
		} else {
			if (reducido>0) {
				navigator.vibrate([200,150,500]);
			} else{
				if (demorado>0) {
					navigator.vibrate([100,100,100]);
				};
			};
		};
		
/*		if ((cancelado>0) || (reducido>0) || (demorado>0)) {
			document.getElementById('estadoTotalLeyenda').innerHTML = "Servicio con Inconvenientes";
			document.getElementById('estadoTotalImg').className = "status yellow";	
		} else {
			if ((fueraServicioA=1) && (fueraServicioB=1) && (fueraServicioC=1) && (fueraServicioD=1) && (fueraServicioE=1) &&(fueraServicioH=1) && (fueraServicioP=1)) {
			alert("pasa fin");
				document.getElementById('estadoTotalLeyenda').innerHTML = "Fin del Servicio";
				document.getElementById('estadoTotalImg').className = "status";
			} else {
				document.getElementById('estadoTotalLeyenda').innerHTML = "Servicio Normal";
				document.getElementById('estadoTotalImg').className = "status";
			}
		};*/

    });

}

timer = setInterval(cambiaHoras, 900000);