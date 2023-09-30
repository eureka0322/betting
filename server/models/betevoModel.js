const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const betevoSchema = new Schema(
  {
    check_id: {
      type: String,
      required: true,
    },
    team_info: {
      type: String,
      required: true,
    },
    spread_odd: {
      type: String,
    },
    spread_stand: {
      type: String,
    },
    money_line_info: {
      type: String,
    },
    game_id: {
      type: String,
    },
    game_time: {
      type: String,
    },
    game_name: {
      type: String,
    },
    game_datetime: {
      type: Date,
    },
  },
);

module.exports = mongoose.model("mc_betevo88s", betevoSchema);
