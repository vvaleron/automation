import userGet from './user.get';

export default function (router) {
    router.get('/user', userGet.getAll);
    router.get('/user/:id', userGet.getById);
    return router;
};