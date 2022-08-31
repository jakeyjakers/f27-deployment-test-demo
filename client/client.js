const hello = () => {
    alert(`Thank you for droping by!`)
}

hello()

setTimeout(hello, 10000)

const btn = document.querySelector('button')

const alertMe = () =>{
    alert(`You're such an amazing perosn`)
}

btn.addEventListener('click', alertMe)