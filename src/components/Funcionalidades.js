import React, { useState } from "react";
import Funcionalidad from "./Funcionalidad";

export default function Funcionalidades({ funcionalidades, setFuncionalidades }) {

   const [nuevaFuncionalidad, setNuevaFuncionalidad] = useState({
      feature: '',
      areas_features: [{
         area_feature: '',
         time: null
      }]
   });
   const [horaTotales, setHoraTotales] = useState(0);

   // Función para manejar el cambio de tiempo
   const handleTimeChange = (e, funcionalidadIndex, areaIndex) => {
      const { name, value } = e.target;
      const numericValue = parseFloat(value) || 0; // Aseguramos que sea un número o 0 si no se puede convertir

      setFuncionalidades((prevFuncionalidades) => {
         const newFuncionalidades = [...prevFuncionalidades];
         newFuncionalidades[funcionalidadIndex].areas_features[areaIndex].time = numericValue;

         return newFuncionalidades;
      });

      // Recalcular las horas totales después de actualizar
      recalculateTotalHours();
   };

   const handleFuncionalidadSubmit = (e) => {
      e.preventDefault();
      setFuncionalidades((prev) => [...prev, { ...nuevaFuncionalidad }]);
      setNuevaFuncionalidad({
         feature: '',
         areas_features: [{
            area_feature: '',
            time: null
         }]
      });
   };

   return (
      <>
         <h2 className="text-2xl font-bold mb-4">Funcionalidades</h2>

         <div className="container mx-auto p-4">
            {Array.isArray(funcionalidades) && funcionalidades.map((funcionalidad, funcionalidadIndex) => (
               <Funcionalidad 
                  key={funcionalidadIndex} 
                  funcionalidad={funcionalidad} 
                  handleTimeChange={handleTimeChange} 
                  funcionalidadIndex={funcionalidadIndex}/>
            ))}
         </div>

         <button
            onClick={handleFuncionalidadSubmit}
            className="dark:text-white dark:bg-gray-500 rounded-lg"
         >
            Agregar funcionalidad
         </button>
      </>
   )
}
