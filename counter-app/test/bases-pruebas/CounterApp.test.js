import { render } from "@testing-library/react"
import { CounterApp } from "../../src/CounterApp"

describe('pruebas en el componente <CounterApp/>', () => { 
    test('Debe de hacer match con el snapshot',()=>{
     const { container } = render(<CounterApp></CounterApp>)
    })
})