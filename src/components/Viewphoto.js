import React from 'react'

export default function Viewphoto() {
    function ViewImg(event) {
        event.preventDefault();
        axios.get(`/getImages/${id}`).then((response) =>{
          console.log(typeof response)
          console.log(JSON.stringify(response.data))
          const reader = new FileReader()
          reader.addEventListener('loadend', () =>{
            console.log(reader.result);
            setFileData(reader.result);  
          });reader.readAsDataURL(response)})}
  return (
    <div>
            <image src={ViewImg}></image>
    </div>
  )
}
