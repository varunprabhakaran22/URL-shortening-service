//importing the required packages and files
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const validUrl  = require('valid-url');
const shortID = require('shortid')
const config = require('config')

const url = require('../models/url')

//@ method   post
//@ desc     Converting the long url to short one 
router.post("/shortening",async (req,res)=>{ 
    console.log(req.body);
    const {longUrl} = req.body;
    console.log("long url " + longUrl);
    
    const baseUrl = config.get('baseUrl');

    console.log("base url " + baseUrl);
    
    // Generate random code 
    const urlCode = shortID.generate()
    console.log("urlCode " + urlCode);
    

    // Checking the base url validation
    if(!validUrl.isUri(baseUrl)){
        console.log("checking base url");
        res.status(401).json('invalid base url')
    }

    // Checking the long url validation 
    if(validUrl.isUri(longUrl)){
        console.log("true long url");
        try {
            let urlPresent = await url.findOne({ longUrl })
            if(urlPresent){
                console.log("url already present in db");
                res.json(urlPresent)
            }
            else{
                const shortUrl = baseUrl + '/' + urlCode;
                urlPresent = new url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date : new Date()
                })
                await urlPresent.save()
                console.log("new url ");
                console.log(urlPresent);
                res.json(urlPresent)
            }
        } catch (err) {
            console.log(err);
            res.status(500).json('server error')
        }
    }
    else{
        res.status(400).json('invalid long url');
    }
})

module.exports = router;