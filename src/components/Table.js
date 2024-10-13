import { useState } from "react";
import Areas from "./Areas";
import Funcionalidades from "./Funcionalidades";

// "INDEX"
function INDEX() {
   const areasStimate = [
      {
         "_id": "6682a5f74cca31f59e52bdd9",
         "area": "FrontEnd Javascript Jr",
      },
      {
         "_id": "6682a5f74cca31f59e52bdda",
         "area": "BackEnd Laravel Md"
      },
      {
         "_id": "6682a5f74cca31f59e52bddb",
         "area": "Analista"
      }
   ]

   const areasProject = [
      {
         "area": {
            "_id": "6682a5f74cca31f59e52bdd8",
            "area": "Analista"
         },
         "hourly_charge": 113.50,
         "hours_work_per_day": 3
      },
      {
         "area": {
            "_id": "6682a5f74cca31f59e52bdd9",
            "area": "FrontEnd Javascript Jr"
         },
         "hourly_charge": 65.63,
         "hours_work_per_day": 5
      },
      {
         "area": {
            "_id": "6682a5f74cca31f59e52bdda",
            "area": "BackEnd Laravel Md"
         },
         "hourly_charge": 137.50,
         "hours_work_per_day": 3
      }
   ]

   const featuresProject = [
      {
         "feature": "Inicio de sesión",
         "areas_features": areasProject.map(area => {
            return {
               "area_feature": area.area,
               "time": 0
            }
         })
      },
      {
         "feature": "Cierre de sesión",
         "areas_features": areasProject.map(area => {
            return {
               "area_feature": area.area,
               "time": 0
            }
         })
      }
   ];

   const [areas, setAreas] = useState(areasProject)
   const [funcionalidades, setFuncionalidades] = useState(featuresProject);

   const handleAddArea = (newArea) => {
      setAreas((prevAreas) => {
         const updatedAreas = [...prevAreas, newArea];
         return updatedAreas;
      });

      setFuncionalidades((prevFuncionalidades) => {
         return prevFuncionalidades.map((funcionalidad) => ({
            ...funcionalidad,
            areas_features: [
               ...funcionalidad.areas_features,
               {
                  area_feature: newArea.area,
                  time: null
               }
            ]
         }));
      });
   };

   const handleUpdateArea = (updatedAreas) => {
      setAreas(updatedAreas);

      setFuncionalidades((prevFuncionalidades) => {
         return prevFuncionalidades.map((funcionalidad) => {
            const updatedAreasFeatures = funcionalidad.areas_features.map((area_feature) => {
               const updatedArea = updatedAreas.find(area => area.area._id === area_feature.area_feature._id);

               if (updatedArea) {
                  return {
                     ...area_feature,
                     area_feature: updatedArea.area
                  };
               }
               return area_feature;
            });

            return {
               ...funcionalidad,
               areas_features: updatedAreasFeatures,
            };
         });
      });
   };

   return (
      <>
         <div className="grid gap-8">

            <Areas areas={areas} setAreas={setAreas} onAddArea={handleAddArea} onUpdateArea={handleUpdateArea} />


            <Funcionalidades funcionalidades={funcionalidades} setFuncionalidades={setFuncionalidades} />
            
         </div>
      </>
   )
}

export default INDEX;