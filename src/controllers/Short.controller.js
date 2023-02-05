import {Link} from '../models/short.js'

export const shortload = async (req,res) => {
    if(req.params.short) {
        let links = await Link.findAll({
            where: {code: req.params.short}
        })
        if(links.length < 1) {
            res.status(404).json({msg:'Code Not Found'})
            return;
        }
        res.status(302).redirect(links[0].dataValues.redirect)
    }
}

export const createShort = async (req,res) => {
    console.log(req.body)
    if(req.query.link) {
        const code = randomString(5)
        const newuser = Link.create({
            code: code,
            redirect: req.query.link
        })
        res.status(200).json({code:code})
    }
    if(req.body.link) {
        const code = randomString(5)
        const newuser = Link.create({
            code: code,
            redirect: req.body.link
        })
        res.status(200).json({code:code})
    }
}

const randomString = (n, r='') => {
    while (n--) r += String.fromCharCode((r=Math.random()*62|0, r+=r>9?(r<36?55:61):48));
    return r;
};