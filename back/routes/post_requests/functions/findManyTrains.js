const findManyTrains = async (req, res) => {
    try {

        const selectedOption = (req.body.selectedOption);
        switch (selectedOption) {
            case 'dateStart' :
                Train.find().sort({'dateStart': -1}).then((trains) => {
                    res.send(trains)
                })
                break;
            case 'dateEnd' :
                Train.find().sort({'dateEnd': -1}).then((trains) => {
                    res.send(trains)
                })
                break;
            default:
                Train.find().then((trains) => {
                    res.send(trains)
                });
                break;
        }


    } catch
        (e) {
        console.log(e);
    }
}
module.exports = findManyTrains
