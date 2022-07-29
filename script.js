const socket = io("http://localhost:3000")
socket.on('connect', () => {
    console.log(`${socket.id}`)
    // socket.emit('player-name', 'dsakjdhsj')
})
class MakeRoom {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    open() {

    }

}
