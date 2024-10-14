import {Menu} from "antd";
import {AppstoreOutlined, AreaChartOutlined, BarsOutlined, HomeOutlined, PayCircleOutlined, SettingOutlined}  from "@ant-design/icons";
import React from "react";


const MenuList = ({darkTheme}: {darkTheme: boolean}) => {
    const menuItems = [
        {
            "key": "home",
            "label": "Home",
            "icon":  React.createElement(HomeOutlined)
        },
        {
            "key": "activity",
            "label": "Activity",
            "icon":  React.createElement(AppstoreOutlined)
        },
        {
            "key": "tasks",
            "label": "Tasks",
            "icon":  React.createElement(BarsOutlined),
            "children": [
                {
                    "key": "task-1",
                    "label": "Task 1",
                },
                {
                    "key": "task-2",
                    "label": "Task 2",
                },
                {
                    "key": "subtasks",
                    "label": "Subtasks",
                    "children": [
                        {
                            "key": "subtask-1",
                            "label": "Sub Task 1",
                        },
                        {
                            "key": "subtask-2",
                            "label": "Sub Task 2",
                        }
                    ]
                }
            ]
        },
        {
            "key": "progress",
            "label": "Progress",
            "icon":  React.createElement(AreaChartOutlined)
        },
        {
            "key": "payment",
            "label": "Payment",
            "icon":  React.createElement(PayCircleOutlined)
        },
        {
            "key": "setting",
            "label": "Setting",
            "icon":  React.createElement(SettingOutlined)
        }
    ];
  return (
    <Menu items={menuItems} theme={darkTheme ? 'dark' : 'light'} mode="inline" className="flex flex-col  h-full gap-4 text-base">
    </Menu>
  )
}

export default MenuList