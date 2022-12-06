const deleteTrain = async (req, res) => {
    try {
        const body = (req.body);
        await Train.findByIdAndDelete(body.id)

        Train.find().then((train) => {

            res.send(train)

        })
    } catch (e) {
        console.log(e)
    }
}
module.exports = deleteTrain
