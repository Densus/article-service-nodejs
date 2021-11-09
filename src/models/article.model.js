'use strict';

var dbConn = require('./../../config/db.config');

var Article = function(article){
    this.title = article.title;
    this.description = article.description;
    this.author = article.author;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Article.create = function (newArticle, result) {
    dbConn.query("INSERT INTO articles SET ?", newArticle, function (err, res) {
        if (err) {
            console.log("error: ", err)
            result(err, null)
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Article.update = function (id, article, result) {
    dbConn.query("UPDATE articles SET title=?, description=?, author=? WHERE id=?", [article.title, article.description, article.author, id], function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
    else{
        result(null, res)
    }
    });
};

Article.findById = function(id, result){
    dbConn.query("SELECT * FROM articles WHERE id=?", id, function(err, res){
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

Article.findAll = function(result){
    dbConn.query("SELECT * FROM articles", function(err, res){
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

Article.delete = function(id, result){
    dbConn.query("DELETE FROM articles where id=?", id, function(err, res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

module.exports = Article;