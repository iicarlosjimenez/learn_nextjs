import React from 'react';
import Input from './Input';
import BtnTrash from './BtnTrash';

export default function Area({ area, handleAreaChange, index, handleAreaDelete }) {
   const formatCurrency = (value) => {
      if (isNaN(value)) {
         return '';
      }

      return new Intl.NumberFormat('es-MX', {
         style: 'currency',
         currency: 'MXN',
         minimumFractionDigits: 2,
      }).format(value);
   };

   function Trash(index) {
      
      return (
         <BtnTrash onClick={(e) => handleAreaDelete(e, index)} />
      )
   }

   return (
      <div className="grid gap-6 text-black mb-2 rounded-lg border border-gray-300 dark:border-gray-600 p-3">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
            <Input
               name="area"
               onChange={(e) => handleAreaChange(e, index)}
               placeholder="Nombre del área"
               value={area.area.area}
            />
            <Input
               name="hourly_charge"
               type="number"
               onChange={(e) => handleAreaChange(e, index)}
               placeholder="Salario por hora"
               value={area.hourly_charge}
               displayValue={formatCurrency(area.hourly_charge)}
            />
            <Input
               name="mouthly_charge"
               type="number"
               onChange={(e) => handleAreaChange(e, index)}
               placeholder="Salario al mes"
               value={area.mouthly_charge ?? area.hourly_charge * 160}
               displayValue={formatCurrency(area.mouthly_charge ?? area.hourly_charge * 160)}
            />
            <Input
               name="hours_work_per_day"
               type="number"
               onChange={(e) => handleAreaChange(e, index)}
               placeholder="Horas al día"
               value={area.hours_work_per_day}
            />
            <Input placeholder="Horas a la semana" value={area.hours_work_per_day * 5} disabled/>
            <Input placeholder="Horas al mes" value={area.hours_work_per_day * 20} disabled/>
         </div>
         <div className="flex justify-end text-white">
            <BtnTrash onClick={(e) => handleAreaDelete(e, index)} /> Eliminar
         </div>
      </div>
   );
}