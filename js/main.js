const button = document.querySelector("button")
const input = document.querySelector("input").value

button.addEventListener("click",display)
let display = async()=>{
    try{
        const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.DOB
    }catch(error){
        console.log(error)
    }


}