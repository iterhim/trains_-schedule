const updateTrain = async (req, res) => {
    try {
        const body = (req.body);
        await Train.findByIdAndUpdate(body.id, body.data)
        Train.find().then((trains) => {

            res.send(trains)

        })
    } catch (e) {
        console.log(e)
    }
}
module.exports = updateTrain
