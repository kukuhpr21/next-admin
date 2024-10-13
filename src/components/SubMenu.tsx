"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IconType } from "react-icons";

type SubMenuProps = {
    data: {
      name: string;
      icon: IconType;
      menus: Array<string>;
    };
  };

const SubMenu = ({ data }: SubMenuProps) => {
    const pathname  = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
      <>
      <li
        className={`link flex flex-row gap-2 ${pathname.includes(data.name) && "text-blue-600"}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="flex-1 capitalize">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
      >
        {data.menus?.map((menu: string) => (
          <li key={menu}>
            {/* className="hover:text-blue-600 hover:font-medium" */}
            <Link
              href={`/${data.name}/${menu}`}
              className="link !bg-transparent capitalize flex flex-row gap-2"
            >
              {menu}
            </Link>
          </li>
        ))}
      </motion.ul>
      </>
  );
};

// const SubMenu = ({ data }: SubMenuProps) => {
//     return (
//       <div>{data.name}</div>
//     );
//   };

export default SubMenu