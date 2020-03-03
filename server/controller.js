// const inventoryDummy = [
//     {
//         id: 1,
//         name: 'Grrr',
//         price: 20,
//         img: 'https://media.makeameme.org/created/classic-placeholder.jpg'
//     },
//     {
//         id: 2,
//         name: 'Halp',
//         price: 300,
//         img: 'https://i.chzbgr.com/full/1219333376/h91D42DAC/placeholder'
//     },
//     {
//         id: 3,
//         name: 'Ug',
//         price: 4,
//         img: 'https://i.imgflip.com/1x71qp.jpg'
//     }
// ]

// let id = 4

//

module.exports = {
    displayProducts: (req, res, next) => {
        const dbObj = req.app.get('db')
        dbObj.return_inventory(id)
        .then( products => 
            res.status(200).send(products))
        .catch( err => {
            res.status(500).send({errorMessage: "Sorry folks, that's not working right now."})
            console.log(err)
        })
        console.log(this.displayProducts)
    },
}