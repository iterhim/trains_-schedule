const posts = require('./post_requests/posts')
const route = async (app, port, jsonParser, urlencodedParser) => {
    app.get('/status', (req, res) => { res.status(200).end(); });

    posts(app, port, jsonParser, urlencodedParser)

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
module.exports = route