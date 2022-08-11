// if (checkServer === 'false') {
//     console.log('down')
// } else {
//     main()
// }

// main()
function main() {
    const socket = io("http://localhost:3000/")
    const player_name = "Anonymous" || prompt('Enter yout name \n(default: "Anonymous")')
    socket.on('connect', () => {
        console.log(`${socket.id}`)
        console.log(`${player_name}`)
    })
}



// socket.on("hello", (arg1, arg2, arg3) => {
//     console.log(arg1); // 1
//     console.log(arg2); // "2"
//     console.log(arg3); // { 3: '4', 5: ArrayBuffer (1) [ 6 ] }
// });
