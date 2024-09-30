/**
 * @author deivid & santiago
 * @version 1.0.0
 * 
 * User routes
 * This file defines user routes
 */

const {Router} = require('express');

const router = Router(); 

/**
 * Importing methods or controllers
 */

const {ShowUsers, ShowUser, AddUsers, DeleteUsers, EditUsers} = require ('../controllers/users.controllers');

/**
 * routes
 */

router.get('/', ShowUsers);
router.get('/:id', ShowUser);
router.post('/', AddUsers);
router.delete('/', DeleteUsers);
router.put('/', EditUsers);

module.exports = router;