const articleModel = require('./../models/article.model');

const findAll = async (result) => {
    try {
        return await articleModel.findAll(result);
    } catch (e) {
        throw new Error(e.message)
    }
};

const create = async (newArticle, result) => {
    try {
        return await articleModel.create(newArticle, result)
    } catch (e) {
        throw new Error(e.message)
    }
};

const update = async (id, article, result) => {
    try {
        return await articleModel.update(id, article, result);
    } catch (e) {
        throw new Error(e.message)
    }
};

const findById = async (id, result) => {
    try {
        return await articleModel.findById(id, result);
    } catch (e) {
        throw new Error(e.message);
    }
};

const deleteById = async (id, result) => {
    try {
        return await articleModel.delete(id, result);
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = {findAll, create, update, findById, deleteById}
