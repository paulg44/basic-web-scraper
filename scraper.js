import * as cheerio from "cheerio";
import fetch from "node-fetch";
import fs from "fs-extra";

const url =
  "https://fulltime.thefa.com/fixtures.html?selectedSeason=467119000&selectedFixtureGroupKey=1_122275881&selectedDateCode=all&selectedClub=&selectedTeam=322951206&selectedRelatedFixtureOption=3&selectedFixtureDateStatus=&selectedFixtureStatus=&previousSelectedFixtureGroupAgeGroup=&previousSelectedFixtureGroupKey=1_122275881&previousSelectedClub=&itemsPerPage=25";

(async () => {
  const response = await fetch(url);
  const $ = cheerio.load(await response.text());

  const fixtures = [];

  // Select each row in the table body
  $("tbody tr").each((i, elem) => {
    const fixture = {};

    // Extract data from relevant columns
    fixture.type = $(elem).find("td").eq(0).text().trim();
    fixture.date = $(elem).find("td").eq(1).find("span").eq(0).text().trim();
    fixture.time = $(elem).find("td").eq(1).find("span").eq(1).text().trim();
    fixture.homeTeam = $(elem).find("td.home-team").text().trim();
    fixture.awayTeam = $(elem).find("td.road-team").text().trim();
    fixture.venue = $(elem).find("td").eq(7).text().trim();
    fixture.competition = $(elem).find("td").eq(8).text().trim();
    fixture.status = $(elem).find("td").eq(9).text().trim();

    // Add the fixture to the fixtures array
    fixtures.push(fixture);
  });

  fs.writeFileSync("cleaned.fixtures.json", JSON.stringify(fixtures, null, 2));
})();