import { Button } from "antd";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ToggleThemeButton = (
    {
        darkTheme,
        toggleTheme
    }: {
        darkTheme : boolean;
        toggleTheme : () => void
    }) => {
  return (
    <div className="flex items-center justify-center text-base absolute bottom-7 left-5">
        <Button onClick={toggleTheme}>
            {darkTheme ? <HiOutlineSun/> : <HiOutlineMoon/>}
        </Button>
    </div>
  )
}

export default ToggleThemeButton