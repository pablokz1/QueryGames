const userRepository = require('../repositories/user-repository');
const profileRepository = require('../repositories/profile-repository');
const jwt = require('jsonwebtoken');

const ONE_MINUTE = 1000 * 60;
const SECRET = 'hf293uh4g90234hg92-384hg2-9034nc-742-37c02-734-0239u40-239u0-237u4-023u-450n3h-';

async function postAuth(req, res) {
    const authContent = req.body;    
    const user = await userRepository.findByEmailAndPassword(authContent.email, authContent.password);
    if (user === null || user === undefined) {
        res.status(401).json({message: 'Invalid Credentials!!!'}).end();
        return;
    }
    let profileName = null;
    if (user.profileId !== null) {
        const profile = await profileRepository.findById(user.profileId);
        profileName = profile.name;
    }
    const timeExpire = new Date().getTime() + (ONE_MINUTE * 60);
    const token = jwt.sign({userId: user.id, username: user.name, profile: profileName}, SECRET, {subject: user.email, issuer: 'Query Games API', expiresIn: timeExpire});
    res.status(200).json({type: 'Bearer', token: token, expire: timeExpire});
}

function verifyToken(req, res, next) {
    const authorization = req.headers['authorization'];
    if (!authorization) {
        res.status(401).json({message: 'Invalid Token!!!'}).end();
        return;
    }
    const token = authorization.split(' ')[1];
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({message: 'Invalid Token!!!'}).end();
            return;
        }
        req.logged = {
            id: decoded.userId,
            name: decoded.username,
            profile: decoded.profile
        };
        next();
    });
}

module.exports = {postAuth, verifyToken};