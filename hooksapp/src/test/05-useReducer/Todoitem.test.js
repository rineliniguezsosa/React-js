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
        
    });
});