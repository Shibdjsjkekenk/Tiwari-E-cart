const express = require('express');
const router = express.Router();

const userSignUpController = require('../controller/user/userSignUp.js');
const userSignInController = require('../controller/user/userSignIn.js');
const userDetailsController = require('../controller/user/userDetails.js');
const authToken = require('../middleware/authToken.js');
const userLogout = require('../controller/user/userLogout.js');
const allUsers = require('../controller/user/allUsers.js');
const updateUser = require('../controller/user/updateUser.js');
const UploadProductController = require('../controller/product/uploadProduct.js');
const getProductController = require('../controller/product/getProduct.js');
const updateProductController = require('../controller/product/updateProduct.js');
const getCategoryProductOne = require('../controller/product/getCategoryProductOne.js');
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct.js');
const getProductDetails = require('../controller/product/getProductDetails.js');
const addToCartController = require('../controller/user/addToCartController.js');
const countAddToCartProduct = require('../controller/user/countAddToCartProduct.js');
const addToCartViewProduct = require('../controller/user/addToCartViewProduct.js');
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct.js');
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct.js');
const searchProduct = require('../controller/product/searchProduct.js');
const filterProductController = require('../controller/product/filterProduct.js');
const paymentController = require('../controller/order/paymentController.js');
const webhooks = require('../controller/order/webhook.js');
const orderController = require('../controller/order/order.controller.js');
const allorderController = require('../controller/order/allOrder.controller.js');


router.post('/signup', userSignUpController);
router.post('/signin', userSignInController);
router.get("/user-details", authToken, userDetailsController)
router.get("/userLogout", userLogout)


// admin panel
router.get("/all-user", authToken, allUsers)
router.post("/update-user", authToken, updateUser)

// our product
router.post("/upload-product", authToken, UploadProductController)
router.get("/get-product", getProductController)
router.post("/update-product", authToken, updateProductController)
router.get("/get-categoryProduct", getCategoryProductOne)
router.post("/category-product", getCategoryWiseProduct)
router.post("/product-details", getProductDetails)
router.get("/search", searchProduct)
router.post("/filter-product", filterProductController)



//user add to cart
router.post("/addtocart", authToken, addToCartController)
router.get("/countAddToCartProduct", authToken, countAddToCartProduct)
router.get("/view-card-product", authToken, addToCartViewProduct)
router.post("/update-cart-product", authToken, updateAddToCartProduct)
router.post("/delete-cart-product", authToken, deleteAddToCartProduct)

//Payment & orders
router.post("/checkout", authToken, paymentController)
router.post("/webhook", webhooks) // api/webhook
router.get("/order-list",authToken,orderController)
router.get("/all-order",authToken,allorderController)





module.exports = router;
