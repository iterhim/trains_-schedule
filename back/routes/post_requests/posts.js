const createTrain = require('./functions/createTrain')
const updateTrain = require('./functions/updateTrain')
const findSpecificTrain = require('./functions/findSpecificTrain')
const findManyTrains = require('./functions/findManyTrains')
const deleteTrain = require('./functions/deleteTrain')
const posts = async (app, port, jsonParser, urlencodedParser) => {
    app.post('/api/createTrain', jsonParser, async (req, res) => {
        await createTrain(req, res)
    })
    app.post('/api/updateTrain', jsonParser, async (req, res) => {
        await updateTrain(req, res)
    })
    app.post('/api/findSpecificTrain', jsonParser, async (req, res) => {
        await findSpecificTrain(req, res)
    })
    app.post('/api/findManyTrains', jsonParser, async (req, res) => {
        await findManyTrains(req, res)
    })
    app.post('/api/deleteTrain', jsonParser, async (req, res) => {
        await deleteTrain(req, res)
    })
}
module.exports = posts