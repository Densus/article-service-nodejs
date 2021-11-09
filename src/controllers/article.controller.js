'use strict';

const Article = require('./../models/article.model');
const articleService = require('./../services/article.service');

const findAll = async (req, res) => {
    try {
        await articleService.findAll(function(err, article) {
            if (err)
            res.send(err);
            res.status(200).json({ status: 200, data: article, message: "Articles Succesfully Retrieved" });
          });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message })
    }
};

const createArticle = async (req, res) => {
    const newArticle = new Article(req.body);
    try {
        // handles null error
        if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(400).json({ status:400, data:null, message: "Please provide all required field" });
        }else{
            await articleService.create(newArticle, function(err, article){
                console.log("article: ", article.insertId)
                if (err) {
                    res.send(err)
                }
                res.status(201).json({ status: 201, data: article, message: "Article Successfully Created" });
            });
        }
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message })
    }
};

const updateArticle = async (req, res) => {
    try {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(400).json({ status:400, data:null, message: "Please provide all required field" });
        }else{
            await articleService.update(req.params.id, new Article(req.body), function (err, article) {
                if (err) {
                    res.send(err)
                }
                res.status(200).json({ status: 200, data: article.affectedRows, message: "Article Successfully Updated" });
            });
        }
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message })
    }
};

const findArticleById = async (req, res) => {
    try {
        await articleService.findById(req.params.id, function (err, article) {
            if (err) {
                res.send(err);
            }
            res.status(200).json({ status: 200, data: article, message: "Article Successfully Retrieved" });
        });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message })
    }
};

const deleteArticleById = async (req, res) => {
    try {
        await articleService.deleteById(req.params.id, function (err, article) {
            if (err) {
                res.send(err);
            }
            res.status(200).json( {status: 200, data: null, message: "Article Successfully Deleted" });
        });
    } catch (e) {
        res.status(400).json({ status: 400, message: e.message })
    }
};

module.exports = {findAll, createArticle, updateArticle, findArticleById, deleteArticleById}