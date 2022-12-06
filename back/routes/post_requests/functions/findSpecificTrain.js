const findSpecificTrain = async (req, res) => {
    try{
        const name = (req.body.letters);
        Train.find({name}).then((train) => {

            res.send(train)

        })
    }catch (e) {
        console.log(e)
    }
}
module.exports = findSpecificTrain
