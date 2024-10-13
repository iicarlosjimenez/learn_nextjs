import React, { useState } from 'react';
import Area from './Area';

export default function Areas({ areas, setAreas, onAddArea, onUpdateArea }) {
   const [nuevaArea, setNuevaArea] = useState({
      area: {
         area: ''
      },
      hourly_charge: null,
      mouthly_charge: null,
      hours_work_per_day: null,
      salarioPorHora: null,
      salarioAlMes: null
   });

   const areaChange = (e, index) => {
      const { name, value } = e.target;
      const numericValue = parseFloat(value);

      setAreas((prevAreas) => {
         if (!Array.isArray(prevAreas)) {
            return [];
         }

         const updatedAreas = prevAreas.map((area, i) => {
            if (i === index) {
               if (name === "hourly_charge") {
                  return {
                     ...area,
                     hourly_charge: value,
                     mouthly_charge: !isNaN(numericValue) ? (numericValue * 160).toFixed(2) : "",
                  };
               } else if (name === "mouthly_charge") {
                  return {
                     ...area,
                     mouthly_charge: value,
                     hourly_charge: !isNaN(numericValue) ? (numericValue / 160).toFixed(2) : "",
                  };
               } else if (name === "area") {

                  return {
                     ...area,
                     area: {
                        ...area.area,
                        area: value
                     },
                  };
               } else {
                  return {
                     ...area,
                     [name]: value,
                  };
               }
            }

            return area;
         });

         onUpdateArea(updatedAreas);
         return updatedAreas;
      });
   };

   const handleAreaSubmit = (e) => {
      e.preventDefault(); 
      
      const lastArea = areas[areas.length - 1];
      if (!lastArea?.area?.area) {
         alert("La última área debe tener un nombre válido.");
         return; // Salir de la función si la validación falla
      }
      
      onAddArea(nuevaArea);
   };

   const handleAreaDelete = (e, index) => {
      setAreas(prevAreas => {
         const updatedAreas= prevAreas.filter((_, i) => i !== index)


         onUpdateArea(updatedAreas);
         return updatedAreas
      });
   }

   return (
      <>
         <h2 className="text-2xl font-bold mb-4">Áreas</h2>

         <div className="container mx-auto p-4">
            {Array.isArray(areas) && areas.map((area, index) => (
               // "TARJETA DE EQUIPO DE TRABAJO"
               <Area area={area} handleAreaChange={areaChange} handleAreaDelete={handleAreaDelete} index={index} key={index} />
            ))}
         </div>

         <button onClick={handleAreaSubmit} className="dark:text-white dark:bg-gray-500 rounded-lg">Agregar Área</button>
      </>
   );
}