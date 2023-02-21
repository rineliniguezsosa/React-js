import { useForm } from "../hooks/useForm"

export const Todoadd = ({onNewTodo}) => {
    const {form,inputchange,resetform} = useForm({
        descripcion:''
    })
    const { descripcion } = form
    //console.log(resetform);
    const SubmitForm = (event) =>{
        event.preventDefault()
        
        if(descripcion.length <= 1) return

        const newTodo = {
            id:new Date().getTime(),
            descripcion:descripcion,
            realizado:false
        }

        onNewTodo(newTodo)
        resetform()
    }
  return (
    <form onSubmit={SubmitForm}>
            <input type="text" name="descripcion" value={descripcion} onChange={inputchange} className='form-control' placeholder="Agregar tarea"></input>

            <button className="btn btn-primary" type="submit">Agregar</button>
    </form>
  )
}
