// Create web server
const express = require('express');
const router = express.Router();

// Import comments controller
const commentsController = require('../controllers/commentsController');

// Import validator
const { check } = require('express-validator');

// Import auth
const auth = require('../middleware/auth');

// Create a comment
// api/comments
router.post('/',
    auth,
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('post', 'Post is required').not().isEmpty()
    ],
    commentsController.createComment
);

// Get comments by post
router.get('/',
    auth,
    commentsController.getComments
);

// Update comment
router.put('/:id',
    auth,
    commentsController.updateComment
);

// Delete comment
router.delete('/:id',
    auth,
    commentsController.deleteComment
);

module.exports = router;


