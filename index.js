var data = require("./OL.json"); // change this require and the value of folder for each postcode also GeoJSON files need to be renamed to just JSON files
var fs = require("fs");
var folder = "./OL";

var districts = data.features;

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}
for (var i = 0; i < districts.length; i++) {
  var newDistrict = {
    type: "FeatureCollection",
    features: [],
  };
  console.dir(districts[i].properties);
  var name = districts[i].properties.name;
  newDistrict.features[0] = districts[i];
  fs.writeFile(
    `${folder}/${name}.geojson`,
    JSON.stringify(newDistrict),
    "utf8",
    function (err) {
      if (err) {
        console.log("error");
        return console.log(err);
      }
      console.log("JSON file has been saved.");
    }
  );
}
