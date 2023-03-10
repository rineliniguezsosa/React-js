import {render, screen,fireEvent} from '@testing-library/react'
import { Todoitem } from '../../05-useReducer/Todoitem';


describe('pruebas en el componente <Todoitem/>', () => {

    const todo = {
        id:1,
        descripcion:'curso react router',
        realizado:false
    }

    const onremoveItem = jest.fn()
    const completado = jest.fn()

    beforeEach(()=>{
        jest.clearAllMocks()
    })

    test('debe de mostrar pendiente por completar', () => {
        render(<Todoitem todo={todo} onremoveItem={onremoveItem} completado={completado} />)

        const elementli = screen.getByRole('listitem')

        expect(elementli.className).toBe('list-group-item d-flex justify-content-between');

        const span = screen.getByLabelText('span')
        
        expect(span.className).toBe('align-self-center ');
        
    });

    test('debe de mostrar el todo completado o marcado', () => {
        todo.realizado = true;

        render(<Todoitem todo={todo} onremoveItem={onremoveItem} completado={completado} />)

        const span = screen.getByLabelText('span')

        expect(span.className).toBe('align-self-center text-decoration-line-through');
    });

    test('debe de llamar al completado cuando se hace click', () => {
        
        render(<Todoitem todo={todo} onremoveItem={onremoveItem} completado={completado} />)

        const boton = screen.getByRole('button',{name:'completado'})
        fireEvent.click(boton)

        expect(completado).toHaveBeenCalledWith(todo.id);
       
    });

    test('el boton debe de llamar al onremoveitem', () => {
        render(<Todoitem todo={todo} onremoveItem={onremoveItem} completado={completado} />)

        const botoneliminar = screen.getByRole('button',{name:'Eliminar'})
        fireEvent.click(botoneliminar)

        expect(onremoveItem).toHaveBeenCalledWith(todo.id);

    });
});