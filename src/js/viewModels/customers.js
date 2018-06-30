/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your departments ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController','ojs/ojarraydataprovider', 'ojs/ojlistview'],
  function (oj, ko, $,appData) {

    function UsersViewModel() {
      var self = this;
      var aux='';

//var cadena3 =[];
      var cadena=val.slice(1,val.length-1);
      var cadena2=cadena.slice(37,cadena.length-1);
      var aux=cadena2;
      var aux2;

      function cadena(cadena){
        this.cadena=cadena;
      }
      var cadenas=[];
      while(aux.indexOf('}')!=-1){
        
        var aux2=aux.slice(1,aux.indexOf('}'));
        aux=aux.slice(aux.indexOf('}')+2,aux.length);
        cadenas.push(aux2);
       

      }
      function plato(id,unidades,idPlato,idCategoria,nombre){
        this.id=id;
       this.unidades=unidades;
        this.idPlato=idPlato;
        this.idCategoria=idCategoria;
        this.nombre=nombre;

      }
      platos=[];
      var cad;
      var cad2;
      var campo1;
      var campo2;
      var campo3;
      var campo4;
      for(var i=0;i<cadenas.length;i++)
      {
          cad2=cadenas[i];
         
          
         cad=cadenas[i].slice(0,cadenas[i].indexOf(','));
          campo1=cad.slice(cad.indexOf(':')+1,cad.length);
         
      cad2=cadenas[i].slice(cadenas[i].indexOf(',')+1,cadenas[i].length);
       cad=cad2.slice(0,cad2.indexOf(','));
       campo2=cad.slice(cad.indexOf(':')+1,cad.length);
      
       cad2=cad2.slice(cad2.indexOf(',')+1,cad2.length);
       cad=cad2.slice(0,cad2.indexOf(','));
       campo3=cad.slice(cad.indexOf(':')+1,cad.length);
       
       cad2=cad2.slice(cad2.indexOf(',')+1,cad2.length);
       cad2=cad2.slice(0,cad2.indexOf(','));
       campo4=cad2.slice(cad2.indexOf(':')+1,cad2.length);


        var plat=new plato(i,campo1,campo2.replace('"', '').replace('"',''),campo3.replace('"', '').replace('"',''),campo4.replace('"', '').replace('"',''));
        platos.push(plat);
      }
     /* cad2=cad2.slice(0,cad2.indexOf(','));
      
      campo2=cad2.slice(cad2.indexOf(':')+1,cad2.length);
      document.write(campo2.replace('"', '').replace('"',''));
      document.write("    hola "+cadenas[2]);*/
      //cadena3=cadena2.split("{");
     /*var auxiliar4= cadenas[0].slice(0,cadenas[0].indexOf(','));
     document.write(auxiliar4.slice(auxiliar4.indexOf(':')+1,auxiliar4.length));
     */ 
    //document.write(cadenas[0].slice(cadenas[0].indexOf(',')+1,cadenas[0].length));
     var prueba = [{id: 0, name: cadena, date: 'Apr 2'}];
      var users = ko.observableArray(platos);
      

      self.currentItem = ko.observable();


   
      self.ArrayDataProvider = new oj.ArrayDataProvider(users, { idAttributes: 'id' });

      self.mostrarNombre = function(data)
        {
            //var itemId = "fruit"+event.detail.value.substring(3);
            // Access current item via ui.it
           
           aux=aux+" "+data.id;
            self.currentItem(aux);

        }

      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additional available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function (info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function (info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function (info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function (info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new UsersViewModel();
  }
);

