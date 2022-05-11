const Garant = require('../models/Garant');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs')

class GarantController {
    async addGarant(req, res) {
        try {
            const { title, description } = req.body;
            const { img } = req.files;
            const imgName = uuid.v4() + '.svg';
            img.mv(path.resolve(__dirname, '..', 'static', imgName));
            const garant = await Garant.create({ title, description, image: imgName });
            garant.save();
            return res.json(garant);
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: 'Server error'})
        }
    }

    async getGarantAll(req, res) {
        try {
            const garants = await Garant.find()
            return res.json(garants)
        } catch(e) {
            return res.status(500).json({message: 'Server error'})
        }
    }

    async deleteGarant(req, res) {
        try {
            const garant = await Garant.findById({_id: req.params.id})
            if(!garant) {
                return res.status(400).json({message: 'File not found'})
            }
            fs.unlinkSync(path.resolve(__dirname, '..', 'static', garant.image))
            garant.remove()
            return res.json({message: 'file success deleted'})
        } catch(e) {
            return res.status(500).json({message: 'server error'})
        }
    }
}

module.exports = new GarantController();
