import { DocItem } from './DocItem'

export function SideBar() {
  return (
    <div className="flex flex-col shadow-sm h-screen w-80 overflow-y-auto bg-gray-600">
      <div className="h-20 flex items-center">
        <h1 className="text-4xl font-bold px-6">
          Arque <span className="text-green-700">.</span>
        </h1>
      </div>

      <div className=" flex flex-1 border-r-[1px] shadow-sm border-gray-600">
        <ul className="px-6 mt-8">
          <DocItem>Definindo nossa API</DocItem>
          <DocItem>Utilizando Axios</DocItem>
          <DocItem>Axios Exceptions</DocItem>
          <DocItem>Conceitos de React Native</DocItem>
        </ul>
      </div>
    </div>
  )
}
