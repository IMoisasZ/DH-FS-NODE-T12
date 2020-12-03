const IndexController = {
    showSobre: (req, res)=> {
        res.render('sobre')
    },

    showIndex: (req, res)=> {
        res.render('index')
    }
}

module.exports = IndexController