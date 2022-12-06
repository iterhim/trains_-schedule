const createTrain = async (req, res) => {
    const inputRef = (req.body);

    inputRef.cities = (inputRef?.cities?.split(', '));
    inputRef.cities.filter(city => city)

    const newTrain = new Train(inputRef);
    newTrain.save().then(() => {
        res.status(200).send(JSON.stringify(newTrain))
    });
}
module.exports = createTrain
