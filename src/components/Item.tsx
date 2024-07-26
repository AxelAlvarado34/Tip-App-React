import type { MenuItemsType } from "../types"
import '../styles/ItemMenu.css'
import { Fade } from "react-awesome-reveal"
import { Dispatch } from "react"
import { ActionsMenu } from "../recucer/MenuRecuder"

type ItemProops = {
    item: MenuItemsType
    dispatch: Dispatch<ActionsMenu>
}

export const Item = ({ item, dispatch }: ItemProops) => {
    return (

        <Fade duration={1500} direction="up" triggerOnce={true} className="fade">
            <button
                className="item_menu"

                onClick={() => {
                    dispatch({ type: "add-menu", payload: { item: item } })
                }}
            >

                <img src={`./image/${item.image}.png`} className="item_img" alt="" />

                <div className="item_text">

                    <p className="item_name">{item.name}</p>

                    <p className="item_price">${item.price}</p>
                </div>

            </button>
        </Fade>

    )
}
