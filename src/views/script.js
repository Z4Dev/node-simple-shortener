function Submit() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    const getbutton = document.getElementById('Encurtar');
    if(getbutton.innerText == 'Encurtar') {
        const geturl = document.getElementById('Link');
        if(geturl.value.length <= 7) {
            Toast.fire({
                icon: 'error',
                title: 'Link Inválido!'
            })
            return;
        }
        getbutton.innerText = 'Carregando...';

        fetch('/short/api', {
            method:'POST',
            body: JSON.stringify({
                link:geturl.value,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(data => data.json()).then(response => {
            console.log(response)
            if(response.code) {
                getbutton.innerText = 'Copiar';
                geturl.value = 'https://js-encurtador.vercel.app/short/'+response.code;
                Toast.fire({
                    icon: 'success',
                    title: 'URL Encurtada com sucesso!'
                })
            }
        })
    } else if(getbutton.innerText == 'Copiar') {
        const geturl = document.getElementById('Link').value;
        navigator.clipboard.writeText(geturl)
        Toast.fire({
            icon: 'success',
            title: 'Link Copiado com sucesso!'
        })
    }
}