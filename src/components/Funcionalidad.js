import React, { useEffect, useState } from "react";
import Input from "./Input";

export default function Funcionalidad({ funcionalidad, handleTimeChange, funcionalidadIndex }) {
   const [horaTotales, setHoraTotales] = useState()

   useEffect(() => {
      const totalHours = funcionalidad.areas_features.reduce((acc, area_feature) => acc + (area_feature.time || 0), 0);

      setHoraTotales(totalHours);
   }, [funcionalidad.areas_features]);
   
   return (
      <div className="grid gap-6 text-black mb-2" key={funcionalidadIndex}>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 rounded-lg border border-gray-300 dark:border-gray-600 p-3">
            <Input
               name="funcionalidad"
               placeholder="Funcionalidad"
               value={funcionalidad.feature}
            />
            
            {Array.isArray(funcionalidad.areas_features) && funcionalidad.areas_features.map((area_feature, areaIndex) => {
               console.log({ area_feature: area_feature.area_feature });

               return (
                  <Input
                     key={areaIndex}
                     placeholder={area_feature.area_feature.area}
                     value={area_feature.time || ""}
                     onChange={(e) => handleTimeChange(e, funcionalidadIndex, areaIndex)}
                  />
               )
            })}

            <Input
               name="horaTotales"
               placeholder="Horas Totales funcionalidad"
               value={horaTotales}
            />
         </div>
      </div>
   )
}