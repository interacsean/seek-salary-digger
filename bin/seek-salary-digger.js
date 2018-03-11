#! /usr/bin/env node

const fetch = require('node-fetch');

async function getForSearchTerm(term, location) {
  const salaryRangeReqs = [40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]
    .map(
      sal => fetch(`https://www.seek.com.au/${term}-jobs/in-${location}?salaryrange=${sal}000-${sal}999&salarytype=annual`)
    );
  const rallResp = await Promise.all(salaryRangeReqs);
  const rallTxt = await Promise.all(
    rallResp.map(async function(r) {
      const txt = await r.text();
      const matches = txt.match(/Find your ideal job at SEEK with (\d*?) /);
      let matchTxt;
      try{
        matchTxt = matches[1];
      } catch (e) {
        matchTxt = '-';
      }
      return r.url.match(/salaryrange=(\d*?)-/)[1]+', '+matchTxt;
    })
  );
  rallTxt.map(r => console.log(r));
}

const defaultLocation = 'all-Sydney-NSW';

getForSearchTerm(process.argv[2], process.argv[3] || defaultLocation);
