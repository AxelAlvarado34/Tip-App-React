import { Fade } from 'react-awesome-reveal'
import { menuItems } from './data/menu'
import { Item } from './components/Item'

import './styles/NavBar.css'
import './styles/MainMenu.css'
import './styles/ListStyle.css'

import { TipList } from './components/TipList'
import { useReducer } from 'react'
import { initialState, menuReducer } from './recucer/MenuRecuder'
import { TotalOrder } from './components/TotalOrder'

function App() {

  const [state, dispatch] = useReducer(menuReducer, initialState);

  return (
    <>
      <header className="header">
        <nav className="nav">

          <Fade direction='up' duration={1500} triggerOnce={true}>
            <div className="nav_logo">
              <img src="./image/logo.png" className='nav_img' alt="menu" />
              <p className='nav_title'>Grill House</p>
            </div>
          </Fade>

          <Fade direction='up' duration={1500} delay={500} triggerOnce={true}>
            <button
              className='nav_button'

              onClick={() => {
                dispatch({ type: "reset-app" })
              }}
            >
              Reset App
            </button>
          </Fade>

        </nav>
      </header>


      <main className='main'>

        <div className='main_items'>
          {
            menuItems.map((item) => (
              <Item key={item.id} item={item} dispatch={dispatch} />
            ))
          }
        </div>

        <div className="main_transaction">
          <div className="list-items">

            <h1 className='list-title'>{state.order.length > 0 ? 'Order' : 'There is no order yet...'}</h1>


            {
              state.order.length > 0 && (
                <>
                  <TipList order={state.order} dispatch={dispatch} />

                  <h1 className='list-total'>Total</h1>
                  <TotalOrder
                    order={state.order}
                    dispatch={dispatch}
                  />
                </>
              )
            }

          </div>
        </div>

      </main>

    </>
  )
}

export default App
