const whitelist = [
    'http://localhost:3000',
    'https://www.google.com'
]

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },

    credentials: true,
    optionsSuccessStatus: 200 
}

module.exports = corsOptions