const Partner = require('../models/Partner');
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')

class PartnerController {
    async addPartner(req, res) {
        try {
            const { title, description } = req.body;
            const { img } = req.files;
            const imgName = uuid.v4() + '.svg'
            img.mv(path.resolve(__dirname, '..', 'static', imgName))
            const partner = await Partner.create({title, description, image: imgName})
            partner.save()
            return res.json(partner)
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: 'server error'})
        }
    }

    async deletePartner(req, res) {
        try {
            const partner = await Partner.findById({_id: req.params.id})
            if(!partner) {
                return res.status(400).json({message: 'File not found'})
            }
            fs.unlinkSync(path.resolve(__dirname, '..', 'static', partner.image))
            partner.remove()
            return res.json({message: 'file success deleted'})
        } catch(e) {
            console.log(e)
            return res.status(500).json({message: 'server error'})
        }
    }

    async getPartnerAll(req, res) {
        try {
            const partners = await Partner.find()
            return res.json(partners)
        } catch(e) {
            console.log(e)
            return res.status(500).json({message: 'server error'})
        }
    }
}

module.exports = new PartnerController();
