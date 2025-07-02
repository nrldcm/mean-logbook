const express = require("express");
const router = express.Router();
const Log = require("../models/log");

// CRUD endpoints
router.post("/", async (req, res) => res.json(await new Log(req.body).save()));
router.get("/", async (req, res) =>
  res.json(await Log.find().sort({ date: -1 }))
);
router.put("/:id", async (req, res) =>
  res.json(await Log.findByIdAndUpdate(req.params.id, req.body, { new: true }))
);
router.delete("/:id", async (req, res) =>
  res.json(await Log.findByIdAndDelete(req.params.id))
);

module.exports = router;
