function toBase64(){
    const file = document.getElementById('file')
    const reader = new FileReader();
    reader.onload = () => {
        send_img(reader.result.split(',')[1])
    }
    reader.readAsDataURL(file.files[0])
}

function send_img(b64){


    var data = { img: b64 }
    console.log(data)

    fetch('/img', {
        method: 'POST', body: data
    }).then((response) => { 
        console.log(response)
        console.log(response.text())
        return response.text()})
    .then((text) => console.log(text))
    .catch((err) => console.console.error(err))


}



