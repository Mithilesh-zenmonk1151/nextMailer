
export default function page({params}:any) {
  return (
    <div>
        <h1>Profile</h1>
        <hr/>
        <p>Profile Page <span>{params.id}</span></p>
      
    </div>
  )
}
