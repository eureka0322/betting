const mongoose = require("mongoose");
const betevos = require("../models/betevoModel");

const getbetevos = async (req, res) => {
  try {
    const currentDate = new Date();
    // Set the time to the start of the current day
    currentDate.setHours(0, 0, 0, 0);
    // Set the time to the end of the current day
    const endDate = new Date(currentDate);
    endDate.setHours(23, 59, 59, 999);
    // Define the query
    const query = {
      game_datetime: {
        $gte: currentDate,
        $lt: endDate,
      },
      spread_odd: {
        $ne: ""
      },
      spread_stand: {
        $ne: ""
      },
      money_line_info: {
        $ne: ""
      }
    };
    const betevo = await betevos.find(query);
    let listData = [];
    for(var i=0;i<betevo.length;i+=2){
      const data = {
        game_id: betevo[i].game_id,
        game_title: betevo[i].game_name,
        game_date: betevo[i].game_time,
        category: betevo[i].check_id,
        game_datetime: betevo[i].game_datetime,
        details: [
          {
            id: betevo[i].id,
            team_name: betevo[i].team_info,
            spread_odd: betevo[i].spread_odd,
            spread_standard: betevo[i].spread_stand,
            money_line: betevo[i].money_line_info
          },
          {
            id: betevo[i+1].id,
            team_name: betevo[i+1].team_info,
            spread_odd: betevo[i+1].spread_odd,
            spread_standard: betevo[i+1].spread_stand,
            money_line: betevo[i+1].money_line_info
          }
        ]
      };
      listData.push(data);
    }
    res.status(200).json(listData);
  } catch (error) {
    res.status(400).json({ error: "error.message" });
  }
};

module.exports = {
  getbetevos
};
