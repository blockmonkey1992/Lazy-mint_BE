import express from "express";
import { onSale_lazyMinting } from "../controller/market/onSale";
import { offSale } from "../controller/market/offSale";
import { getOneProducts, getPagingProducts, getSignedNft } from "../controller/market/getProducts";

// URL : /api/market
const router = express.Router();

router.get("/pages/:page", getPagingProducts);
router.get("/:id", getOneProducts);
router.get("/user/:id", getSignedNft);
router.post("/onsale/lazymint", onSale_lazyMinting);
router.patch("/offsale", offSale);

module.exports = router;