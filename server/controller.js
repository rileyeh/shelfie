module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory().then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    },

    createProduct: (req, res) => {
       const db = req.app.get('db')
       const { name, price, img } = req.body

        db.create_product([name, price, img]).then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params 

        db.delete_product([id]).then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    }
}