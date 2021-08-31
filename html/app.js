document.write('<script src="src/controllers/controllerLogin.js?version=2.0"></script>');

document.write('<script src="src/controllers/controllerInicio.js?version=2.0"></script>');

document.write('<script src="src/controllers/controllerIngresoVehiculo.js?version=3.0"></script>');

document.write('<script src="src/controllers/controllerBuscarTicket.js?version=2.0"></script>');

document.write('<script src="src/controllers/controllerEditarTicket.js?version=3.0"></script>');

document.write('<script src="src/controllers/controllerAdministracion.js?version=2.0"></script>');

document.write('<script src="src/controllers/controllerUsuarios.js?version=2.0"></script>');

document.write('<script src="src/controllers/controllerEstacionamientos.js?version=2.0"></script>');




var app = angular.module('appProyecto', ['ui.router', 'ngValidate', 'ngStorage', 'AxelSoft', 'ui.bootstrap', 'angularTreeview', 'ngSanitize', 'frapontillo.bootstrap-duallistbox'])
													 
// Configuración de las rutas
app.config(function($stateProvider, $urlRouterProvider){	
    
	$stateProvider

		.state('login',{
			url: '/login',
			templateUrl: 'src/views/login.html',
			controller: 'controllerLogin'
		})	
		
		
		
		.state('inicio',{
			url: '/inicio',
			templateUrl: 'src/views/inicio.html',
			controller: 'controllerInicio'
		})
		
		
		.state('ingresoVehiculo',{
			url: '/ingresoVehiculo',
			templateUrl: 'src/views/frmIngresoVehiculo.html',
			controller: 'controllerIngresoVehiculo'
		})
		
		
		
		.state('buscarTicket',{
			url: '/buscarTicket',
			templateUrl: 'src/views/buscarTicket.html',
			controller: 'controllerBuscarTicket'
		})
		
		
		.state('editarTicket',{
			url: '/editarTicket',
			templateUrl: 'src/views/frmEditarTicket.html',
			controller: 'controllerEditarTicket'
		})
			
			
		.state('administracion',{
			url: '/administracion',
			templateUrl: 'src/views/administracion.html',
			controller: 'controllerAdministracion'
		})
			
			
		.state('usuarios',{
			url: '/usuarios',
			templateUrl: 'src/views/usuarios.html',
			controller: 'controllerUsuarios'
		})	
			
			
		.state('estacionamientos',{
			url: '/estacionamientos',
			templateUrl: 'src/views/estacionamientos.html',
			controller: 'controllerEstacionamientos'
		})	
			

		
	$urlRouterProvider.otherwise('login');

})











app.directive('convertToNumber', function() {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {                
            ngModel.$parsers.push(function(val) {                    
                return parseInt(val, 10);
            });
            ngModel.$formatters.push(function (val) {                    
                return '' + val;
            });
        }
    };
});



app.directive('toInteger', function ($parse) {
	return {
		require: 'ngModel',
		link: function (scope, elem, attrs, ngModel) {
	
			ngModel.$parsers.push(function (value) {
				var value = parseInt(value);
				$parse(attrs.ngModel).assign(scope, value);
				scope.$apply();
	
			});
		}
	};
});



app.filter('beginning_data', function(){
    return function(input, begin){
        if(input){
            begin = +begin;
            return input.slice(begin);
        }
        return [];
    }
});

/* Directive */
app.directive('excelExport',
    function () {
      return {
        restrict: 'A',
        scope: {
        	fileName: "@",
            data: "&exportData"
        },
        replace: true,
        template: '<button class="btn btn-primary btn-ef btn-ef-3 btn-ef-3c mb-10" ng-click="download()">Exportar a Excel <i class="fa fa-download"></i></button>',
        link: function (scope, element) {
        	
        	scope.download = function() {

        		function datenum(v, date1904) {
            		if(date1904) v+=1462;
            		var epoch = Date.parse(v);
            		return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
            	};
            	
            	function getSheet(data, opts) {
            		var ws = {};
            		var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
            		for(var R = 0; R != data.length; ++R) {
            			for(var C = 0; C != data[R].length; ++C) {
            				if(range.s.r > R) range.s.r = R;
            				if(range.s.c > C) range.s.c = C;
            				if(range.e.r < R) range.e.r = R;
            				if(range.e.c < C) range.e.c = C;
            				var cell = {v: data[R][C] };
            				if(cell.v == null) continue;
            				var cell_ref = XLSX.utils.encode_cell({c:C,r:R});
            				
            				if(typeof cell.v === 'number') cell.t = 'n';
            				else if(typeof cell.v === 'boolean') cell.t = 'b';
            				else if(cell.v instanceof Date) {
            					cell.t = 'n'; cell.z = XLSX.SSF._table[14];
            					cell.v = datenum(cell.v);
            				}
            				else cell.t = 's';
            				
            				ws[cell_ref] = cell;
            			}
            		}
            		if(range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
            		return ws;
            	};
            	
            	function Workbook() {
            		if(!(this instanceof Workbook)) return new Workbook();
            		this.SheetNames = [];
            		this.Sheets = {};
            	}
            	 
            	var wb = new Workbook(), ws = getSheet(scope.data());
            	/* add worksheet to workbook */
            	wb.SheetNames.push(scope.fileName);
            	wb.Sheets[scope.fileName] = ws;
            	var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});

            	function s2ab(s) {
            		var buf = new ArrayBuffer(s.length);
            		var view = new Uint8Array(buf);
            		for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            		return buf;
            	}
            	
        		saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), scope.fileName+'.xlsx');
        		
        	};
        
        }
      };
    }
 );
