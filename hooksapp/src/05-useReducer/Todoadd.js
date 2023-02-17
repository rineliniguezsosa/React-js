import { useForm } from "../hooks/useForm"

export const Todoadd = () => {
    const [form,inputchange,resetform] = useForm({
        descripcion:''
    })
  return (
    <form>
            <input type="text" className='form-control' placeholder="Agregar tarea"></input>

            <button className="btn btn-primary" type="submit">Agregar</button>
    </form>
  )
}
