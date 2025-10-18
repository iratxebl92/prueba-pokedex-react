import { Arrow } from "../Icons"


export const Header = () => {
  return (
    <header>
        <div className="flex justify-between">
          <p className="flex text-2xl"><span className="font-semibold text-white "><Arrow/></span><span>Bulbasur</span></p>
          <p>#001</p>
        </div>
    </header>
  )
}
