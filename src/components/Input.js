export default function Input({ name, value, displayValue, placeholder, className = '', type = 'text', onChange=null, label=''}) {

   return (
      <div className="">
         <label for={name} className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
            {placeholder}
         </label>
         <input
            id={name} 
            name={name}
            value={value}
            type={type}
            className={"block px-2 py-3 w-full text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " + className}
            onChange={onChange}
            placeholder={placeholder} 
         />

      </div>
   )
}