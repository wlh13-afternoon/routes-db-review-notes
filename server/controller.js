module.exports = {
    create(req, res) {
        const db = req.app.get('db')
        const {product_name, price, image} = req.body
        db.create_product([product_name, price, image]).then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Error'})
            console.log(err)
        })
    },
    getProducts: (req, res) => {
        const db = req.app.get('db')
        db.get_products().then(products => {
            console.log(products)
            res.status(200).send(products)
        }).catch(err => { 
            res.status(500).send({errorMessage: 'Error'})
            console.log(err)
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product(id).then(products => {
            res.status(200).send(products)
        })
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {product_name, price, image} = req.body
        db.update_product([product_name,price,image,id]).then(products => {
            res.status(200).send(products)
        })
    }
}