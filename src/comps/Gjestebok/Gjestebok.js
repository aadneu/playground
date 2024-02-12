


import DisplayHellos from './DisplayHellos'
import WriteHellos from './WriteHellos'
import useFetch from '../useFetch'



const Gjestebok = ({editMode}) => {

  const {backendData: hellosApi, isPending} = useFetch("/api")



// const deleteHello = (deleteThisHello) => {
//     const newHellos = hellos.filter(hello => hello !== deleteThisHello)
//     setHellos(newHellos)
// }

// const addHello = (addThisHello) => {
//     const nameAlreadyExists = backendData.hellos.some(hello => hello.name === addThisHello.name)
//     if(!nameAlreadyExists){
//         setHellos((oldHellos) => [...oldHellos, addThisHello])
//     } else {alert('Denne personen har allerede skrevet i gjesteboka...')}
// }


  return (
    <div className="gjestebok">
          {isPending && <div>Loading...</div> }
          {hellosApi && <DisplayHellos hellosApi={hellosApi} editMode={editMode}/>}
          <WriteHellos />
    </div>
  )
}

export default Gjestebok