





document.getElementById('mahabox').addEventListener('click', function(event) {
    if (event.target.classList.contains('box4')) {
        window.location.href = 'msft.html';
    }
});

document.getElementById('mahabox').addEventListener('click', function(event) {
    if (event.target.classList.contains('box1')) {
        window.location.href = 'aapl.html';
    }
});

document.getElementById('mahabox').addEventListener('click', function(event) {
    if (event.target.classList.contains('box3')) {
        window.location.href = 'pfe.html';
    }
});
document.getElementById('mahabox').addEventListener('click', function(event) {
    if (event.target.classList.contains('box2')) {
        window.location.href = 'jpm.html';
    }
});
document.getElementById('mahabox').addEventListener('click', function(event) {
    if (event.target.classList.contains('box5')) {
        window.location.href = 'wmt.html';
    }
});

document.getElementById('mahabox').addEventListener('click', function(event) {
    if (event.target.classList.contains('box6')) {
        window.location.href = 'alphabet.html';
    }
});

document.getElementById('mahabox').addEventListener('click', function(event) {
    if (event.target.classList.contains('box7')) {
        window.location.href = 'xom.html';
    }
});

document.getElementById('mahabox').addEventListener('click', function(event) {
    if (event.target.classList.contains('box8')) {
        window.location.href = 'jnj.html';
    }
});


















document.addEventListener('DOMContentLoaded', async function() {
  const stockId1 = 1;
  const stockId2 = 2;
  const stockId3 = 3;
  const stockId4 = 4;
  const stockId5 = 5;
  const stockId6 = 6;
  const stockId7 = 7;
  const stockId8 = 8;

  try {
      const stockResponse1 = await fetch(`/stock/${stockId1}`);
      if (!stockResponse1.ok) {
          throw new Error('Failed to fetch stock information for Stock ID 1');
      }
      const stockData1 = await stockResponse1.json();
      console.log('Stock 1 Response data:', stockData1);
      displayStockInfo(stockData1);



      const stockResponse2 = await fetch(`/stock/${stockId2}`);
      if (!stockResponse2.ok) {
          throw new Error('Failed to fetch stock information for Stock ID 2');
      }
      const stockData2 = await stockResponse2.json();
      console.log('Stock 2 Response data:', stockData2);
      displayStockInfo2(stockData2);





      const stockResponse3 = await fetch(`/stock/${stockId3}`);
      if (!stockResponse3.ok) {
          throw new Error('Failed to fetch stock information for Stock ID 3');
      }
      const stockData3 = await stockResponse3.json();
      console.log('Stock 3 Response data:', stockData3);
      displayStockInfo3(stockData3);




      const stockResponse4 = await fetch(`/stock/${stockId4}`);
      if (!stockResponse4.ok) {
          throw new Error('Failed to fetch stock information for Stock ID 2');
      }
      const stockData4 = await stockResponse4.json();
      console.log('Stock 2 Response data:', stockData2);
      displayStockInfo4(stockData4);



      const stockResponse5 = await fetch(`/stock/${stockId5}`);
      if (!stockResponse5.ok) {
          throw new Error('Failed to fetch stock information for Stock ID 5');
      }
      const stockData5 = await stockResponse5.json();
      console.log('Stock 2 Response data:', stockData5);
      displayStockInfo5(stockData5);


      const stockResponse6 = await fetch(`/stock/${stockId6}`);
      if (!stockResponse6.ok) {
          throw new Error('Failed to fetch stock information for Stock ID 2');
      }
      const stockData6 = await stockResponse6.json();
      console.log('Stock 2 Response data:', stockData6);
      displayStockInfo6(stockData6);




      const stockResponse7 = await fetch(`/stock/${stockId7}`);
      if (!stockResponse4.ok) {
          throw new Error('Failed to fetch stock information for Stock ID 7');
      }
      const stockData7 = await stockResponse7.json();
      console.log('Stock 2 Response data:', stockData7);
      displayStockInfo7(stockData7);






      const stockResponse8 = await fetch(`/stock/${stockId8}`);
      if (!stockResponse8.ok) {
          throw new Error('Failed to fetch stock information for Stock ID 8');
      }
      const stockData8 = await stockResponse8.json();
      console.log('Stock 2 Response data:', stockData8);
      displayStockInfo8(stockData8);






































  } catch (error) {
      console.error('Error fetching data:', error);
      displayError('Internal server error');
  }
});

function displayStockInfo(stock) {
  const companyNameElement = document.getElementById('companyName');
  const sectorElement = document.getElementById('sector');
  const industryElement = document.getElementById('industry');
  const openPriceElement = document.getElementById('openPrice');
  const closePriceElement = document.getElementById('closePrice');
  const peratioElement=document.getElementById('peratio');
  const pbratioElement=document.getElementById('pbratio');
  const roeElement=document.getElementById('roe');
  const profitsElement=document.getElementById('profits');
  const assetsElement=document.getElementById('assets');
  const liabilitiesElement=document.getElementById('liabilities');
  const amountElement=document.getElementById('amount');


  if (!stock || stock.length !== 12) {
      companyNameElement.innerText = 'Error: Stock information not found';
      sectorElement.innerText = '';
      industryElement.innerText = '';
      openPriceElement.innerText = '';
      closePriceElement.innerText = '';

  peratioElement.innerText = '';
  pbratioElement.innerText = '';
  roeElement.innerText = '';
  profitsElement.innerText = '';
  assetsElement.innerText = '';
  liabilitiesElement.innerText = '';
  amountElement.innerText = '';
  } else {
      const sector = stock[0];
      const company = stock[1];
      const industry = stock[2];
      const openPrice = stock[3];
      const closePrice = stock[4];
      const peratio=stock[5];
      const pbratio=stock[6];
      const roe=stock[7];
      const profits=stock[8];
      const assets=stock[9];
      const liabilities=stock[10];
      const amount=stock[11];

      companyNameElement.innerText = company;
      sectorElement.innerText = `Sector: ${sector}`;
      industryElement.innerText = `Industry: ${industry}`;
      openPriceElement.innerText = `Open Price: ${openPrice}`;
      closePriceElement.innerText = `Close Price: ${closePrice}`;
      peratioElement.innerText = `PE Ratio: ${peratio}`;
      pbratioElement.innerText = `PB Ratio: ${pbratio}`;
      roeElement.innerText = `ROE: ${roe}`;
      profitsElement.innerText = `Profits: ${profits}`;
      assetsElement.innerText = `Assets: ${assets}`;
      liabilitiesElement.innerText = `Liabilities: ${liabilities}`;
      amountElement.innerText = `Dividend Amount: ${amount}`;
         
      const stockInfoDiv = document.getElementById('stockInfo');
       // Clear any existing content in the stockInfoDiv
  }
}






function displayStockInfo2(stock) {
  const companyNameElement = document.getElementById('companyName2');
  const sectorElement = document.getElementById('sector2');
  const industryElement = document.getElementById('industry2');
  const openPriceElement = document.getElementById('openPrice2');
  const closePriceElement = document.getElementById('closePrice2');
  const peratioElement=document.getElementById('peratio2');
  const pbratioElement=document.getElementById('pbratio2');
  const roeElement=document.getElementById('roe2');
  const profitsElement=document.getElementById('profits2');
  const assetsElement=document.getElementById('assets2');
  const liabilitiesElement=document.getElementById('liabilities2');
  const amountElement=document.getElementById('amount2');


  if (!stock || stock.length !== 12) {
      companyNameElement.innerText = 'Error: Stock information not found';
      sectorElement.innerText = '';
      industryElement.innerText = '';
      openPriceElement.innerText = '';
      closePriceElement.innerText = '';

  peratioElement.innerText = '';
  pbratioElement.innerText = '';
  roeElement.innerText = '';
  profitsElement.innerText = '';
  assetsElement.innerText = '';
  liabilitiesElement.innerText = '';
  amountElement.innerText = '';
  } else {
      const sector2 = stock[0];
      const company2 = stock[1];
      const industry2 = stock[2];
      const openPrice2 = stock[3];
      const closePrice2 = stock[4];
      const peratio2=stock[5];
      const pbratio2=stock[6];
      const roe2=stock[7];
      const profits2=stock[8];
      const assets2=stock[9];
      const liabilities2=stock[10];
      const amount2=stock[11];

      companyNameElement.innerText = company2;
      sectorElement.innerText = `Sector: ${sector2}`;
      industryElement.innerText = `Industry: ${industry2}`;
      openPriceElement.innerText = `Open Price: ${openPrice2}`;
      closePriceElement.innerText = `Close Price: ${closePrice2}`;
      peratioElement.innerText = `PE Ratio: ${peratio2}`;
      pbratioElement.innerText = `PB Ratio: ${pbratio2}`;
      roeElement.innerText = `ROE: ${roe2}`;
      profitsElement.innerText = `Profits: ${profits2}`;
      assetsElement.innerText = `Assets: ${assets2}`;
      liabilitiesElement.innerText = `Liabilities: ${liabilities2}`;
      amountElement.innerText = `Dividend Amount: ${amount2}`;
         
      const stockInfoDiv = document.getElementById('stockInfo2');
       // Clear any existing content in the stockInfoDiv
  }
}




function displayStockInfo3(stock) {
  const companyNameElement = document.getElementById('companyName3');
  const sectorElement = document.getElementById('sector3');
  const industryElement = document.getElementById('industry3');
  const openPriceElement = document.getElementById('openPrice3');
  const closePriceElement = document.getElementById('closePrice3');
  const peratioElement=document.getElementById('peratio3');
  const pbratioElement=document.getElementById('pbratio3');
  const roeElement=document.getElementById('roe3');
  const profitsElement=document.getElementById('profits3');
  const assetsElement=document.getElementById('assets3');
  const liabilitiesElement=document.getElementById('liabilities3');
  const amountElement=document.getElementById('amount3');


  if (!stock || stock.length !== 12) {
      companyNameElement.innerText = 'Error: Stock information not found';
      sectorElement.innerText = '';
      industryElement.innerText = '';
      openPriceElement.innerText = '';
      closePriceElement.innerText = '';

  peratioElement.innerText = '';
  pbratioElement.innerText = '';
  roeElement.innerText = '';
  profitsElement.innerText = '';
  assetsElement.innerText = '';
  liabilitiesElement.innerText = '';
  amountElement.innerText = '';
  } else {
      const sector3 = stock[0];
      const company3 = stock[1];
      const industry3 = stock[2];
      const openPrice3 = stock[3];
      const closePrice3 = stock[4];
      const peratio3=stock[5];
      const pbratio3=stock[6];
      const roe3=stock[7];
      const profits3=stock[8];
      const assets3=stock[9];
      const liabilities3=stock[10];
      const amount3=stock[11];

      companyNameElement.innerText = company3;
      sectorElement.innerText = `Sector: ${sector3}`;
      industryElement.innerText = `Industry: ${industry3}`;
      openPriceElement.innerText = `Open Price: ${openPrice3}`;
      closePriceElement.innerText = `Close Price: ${closePrice3}`;
      peratioElement.innerText = `PE Ratio: ${peratio3}`;
      pbratioElement.innerText = `PB Ratio: ${pbratio3}`;
      roeElement.innerText = `ROE: ${roe3}`;
      profitsElement.innerText = `Profits: ${profits3}`;
      assetsElement.innerText = `Assets: ${assets3}`;
      liabilitiesElement.innerText = `Liabilities: ${liabilities3}`;
      amountElement.innerText = `Dividend Amount: ${amount3}`;
         
      const stockInfoDiv = document.getElementById('stockInfo3');
       // Clear any existing content in the stockInfoDiv
  }
}




function displayStockInfo4(stock) {
  const companyNameElement = document.getElementById('companyName4');
  const sectorElement = document.getElementById('sector4');
  const industryElement = document.getElementById('industry4');
  const openPriceElement = document.getElementById('openPrice4');
  const closePriceElement = document.getElementById('closePrice4');
  const peratioElement=document.getElementById('peratio4');
  const pbratioElement=document.getElementById('pbratio4');
  const roeElement=document.getElementById('roe4');
  const profitsElement=document.getElementById('profits4');
  const assetsElement=document.getElementById('assets4');
  const liabilitiesElement=document.getElementById('liabilities4');
  const amountElement=document.getElementById('amount4');


  if (!stock || stock.length !== 12) {
      companyNameElement.innerText = 'Error: Stock information not found';
      sectorElement.innerText = '';
      industryElement.innerText = '';
      openPriceElement.innerText = '';
      closePriceElement.innerText = '';

  peratioElement.innerText = '';
  pbratioElement.innerText = '';
  roeElement.innerText = '';
  profitsElement.innerText = '';
  assetsElement.innerText = '';
  liabilitiesElement.innerText = '';
  amountElement.innerText = '';
  } else {
      const sector4 = stock[0];
      const company4 = stock[1];
      const industry4 = stock[2];
      const openPrice4 = stock[3];
      const closePrice4 = stock[4];
      const peratio4=stock[5];
      const pbratio4=stock[6];
      const roe4=stock[7];
      const profits4=stock[8];
      const assets4=stock[9];
      const liabilities4=stock[10];
      const amount4=stock[11];

      companyNameElement.innerText = company4;
      sectorElement.innerText = `Sector: ${sector4}`;
      industryElement.innerText = `Industry: ${industry4}`;
      openPriceElement.innerText = `Open Price: ${openPrice4}`;
      closePriceElement.innerText = `Close Price: ${closePrice4}`;
      peratioElement.innerText = `PE Ratio: ${peratio4}`;
      pbratioElement.innerText = `PB Ratio: ${pbratio4}`;
      roeElement.innerText = `ROE: ${roe4}`;
      profitsElement.innerText = `Profits: ${profits4}`;
      assetsElement.innerText = `Assets: ${assets4}`;
      liabilitiesElement.innerText = `Liabilities: ${liabilities4}`;
      amountElement.innerText = `Dividend Amount: ${amount4}`;
         
      const stockInfoDiv = document.getElementById('stockInfo4');
       // Clear any existing content in the stockInfoDiv
  }
}




function displayStockInfo5(stock) {
  const companyNameElement = document.getElementById('companyName5');
  const sectorElement = document.getElementById('sector5');
  const industryElement = document.getElementById('industry5');
  const openPriceElement = document.getElementById('openPrice5');
  const closePriceElement = document.getElementById('closePrice5');
  const peratioElement=document.getElementById('peratio5');
  const pbratioElement=document.getElementById('pbratio5');
  const roeElement=document.getElementById('roe5');
  const profitsElement=document.getElementById('profits5');
  const assetsElement=document.getElementById('assets5');
  const liabilitiesElement=document.getElementById('liabilities5');
  const amountElement=document.getElementById('amount5');


  if (!stock || stock.length !== 12) {
      companyNameElement.innerText = 'Error: Stock information not found';
      sectorElement.innerText = '';
      industryElement.innerText = '';
      openPriceElement.innerText = '';
      closePriceElement.innerText = '';

  peratioElement.innerText = '';
  pbratioElement.innerText = '';
  roeElement.innerText = '';
  profitsElement.innerText = '';
  assetsElement.innerText = '';
  liabilitiesElement.innerText = '';
  amountElement.innerText = '';
  } else {
      const sector5 = stock[0];
      const company5 = stock[1];
      const industry5 = stock[2];
      const openPrice5= stock[3];
      const closePrice5 = stock[4];
      const peratio5=stock[5];
      const pbratio5=stock[6];
      const roe5=stock[7];
      const profits5=stock[8];
      const assets5=stock[9];
      const liabilities5=stock[10];
      const amount5=stock[11];

      companyNameElement.innerText = company5;
      sectorElement.innerText = `Sector: ${sector5}`;
      industryElement.innerText = `Industry: ${industry5}`;
      openPriceElement.innerText = `Open Price: ${openPrice5}`;
      closePriceElement.innerText = `Close Price: ${closePrice5}`;
      peratioElement.innerText = `PE Ratio: ${peratio5}`;
      pbratioElement.innerText = `PB Ratio: ${pbratio5}`;
      roeElement.innerText = `ROE: ${roe5}`;
      profitsElement.innerText = `Profits: ${profits5}`;
      assetsElement.innerText = `Assets: ${assets5}`;
      liabilitiesElement.innerText = `Liabilities: ${liabilities5}`;
      amountElement.innerText = `Dividend Amount: ${amount5}`;
         
      const stockInfoDiv = document.getElementById('stockInfo5');
       // Clear any existing content in the stockInfoDiv
  }
}




function displayStockInfo6(stock) {
  const companyNameElement = document.getElementById('companyName6');
  const sectorElement = document.getElementById('sector6');
  const industryElement = document.getElementById('industry6');
  const openPriceElement = document.getElementById('openPrice6');
  const closePriceElement = document.getElementById('closePrice6');
  const peratioElement=document.getElementById('peratio6');
  const pbratioElement=document.getElementById('pbratio6');
  const roeElement=document.getElementById('roe6');
  const profitsElement=document.getElementById('profits6');
  const assetsElement=document.getElementById('assets6');
  const liabilitiesElement=document.getElementById('liabilities6');
  const amountElement=document.getElementById('amount6');


  if (!stock || stock.length !== 12) {
      companyNameElement.innerText = 'Error: Stock information not found';
      sectorElement.innerText = '';
      industryElement.innerText = '';
      openPriceElement.innerText = '';
      closePriceElement.innerText = '';

  peratioElement.innerText = '';
  pbratioElement.innerText = '';
  roeElement.innerText = '';
  profitsElement.innerText = '';
  assetsElement.innerText = '';
  liabilitiesElement.innerText = '';
  amountElement.innerText = '';
  } else {
      const sector6 = stock[0];
      const company6 = stock[1];
      const industry6 = stock[2];
      const openPrice6= stock[3];
      const closePrice6 = stock[4];
      const peratio6=stock[5];
      const pbratio6=stock[6];
      const roe6=stock[7];
      const profits6=stock[8];
      const assets6=stock[9];
      const liabilities6=stock[10];
      const amount6=stock[11];

      companyNameElement.innerText = company6;
      sectorElement.innerText = `Sector: ${sector6}`;
      industryElement.innerText = `Industry: ${industry6}`;
      openPriceElement.innerText = `Open Price: ${openPrice6}`;
      closePriceElement.innerText = `Close Price: ${closePrice6}`;
      peratioElement.innerText = `PE Ratio: ${peratio6}`;
      pbratioElement.innerText = `PB Ratio: ${pbratio6}`;
      roeElement.innerText = `ROE: ${roe6}`;
      profitsElement.innerText = `Profits: ${profits6}`;
      assetsElement.innerText = `Assets: ${assets6}`;
      liabilitiesElement.innerText = `Liabilities: ${liabilities6}`;
      amountElement.innerText = `Dividend Amount: ${amount6}`;
         
      const stockInfoDiv = document.getElementById('stockInfo6');
       // Clear any existing content in the stockInfoDiv
  }
}




function displayStockInfo7(stock) {
  const companyNameElement = document.getElementById('companyName7');
  const sectorElement = document.getElementById('sector7');
  const industryElement = document.getElementById('industry7');
  const openPriceElement = document.getElementById('openPrice7');
  const closePriceElement = document.getElementById('closePrice7');
  const peratioElement=document.getElementById('peratio7');
  const pbratioElement=document.getElementById('pbratio7');
  const roeElement=document.getElementById('roe7');
  const profitsElement=document.getElementById('profits7');
  const assetsElement=document.getElementById('assets7');
  const liabilitiesElement=document.getElementById('liabilities7');
  const amountElement=document.getElementById('amount7');


  if (!stock || stock.length !== 12) {
      companyNameElement.innerText = 'Error: Stock information not found';
      sectorElement.innerText = '';
      industryElement.innerText = '';
      openPriceElement.innerText = '';
      closePriceElement.innerText = '';

  peratioElement.innerText = '';
  pbratioElement.innerText = '';
  roeElement.innerText = '';
  profitsElement.innerText = '';
  assetsElement.innerText = '';
  liabilitiesElement.innerText = '';
  amountElement.innerText = '';
  } else {
      const sector7 = stock[0];
      const company7 = stock[1];
      const industry7 = stock[2];
      const openPrice7= stock[3];
      const closePrice7 = stock[4];
      const peratio7=stock[5];
      const pbratio7=stock[6];
      const roe7=stock[7];
      const profits7=stock[8];
      const assets7=stock[9];
      const liabilities7=stock[10];
      const amount7=stock[11];

      companyNameElement.innerText = company7;
      sectorElement.innerText = `Sector: ${sector7}`;
      industryElement.innerText = `Industry: ${industry7}`;
      openPriceElement.innerText = `Open Price: ${openPrice7}`;
      closePriceElement.innerText = `Close Price: ${closePrice7}`;
      peratioElement.innerText = `PE Ratio: ${peratio7}`;
      pbratioElement.innerText = `PB Ratio: ${pbratio7}`;
      roeElement.innerText = `ROE: ${roe7}`;
      profitsElement.innerText = `Profits: ${profits7}`;
      assetsElement.innerText = `Assets: ${assets7}`;
      liabilitiesElement.innerText = `Liabilities: ${liabilities7}`;
      amountElement.innerText = `Dividend Amount: ${amount7}`;
         
      const stockInfoDiv = document.getElementById('stockInfo7');
       // Clear any existing content in the stockInfoDiv
  }
}





function displayStockInfo8(stock) {
  const companyNameElement = document.getElementById('companyName8');
  const sectorElement = document.getElementById('sector8');
  const industryElement = document.getElementById('industry8');
  const openPriceElement = document.getElementById('openPrice8');
  const closePriceElement = document.getElementById('closePrice8');
  const peratioElement=document.getElementById('peratio8');
  const pbratioElement=document.getElementById('pbratio8');
  const roeElement=document.getElementById('roe8');
  const profitsElement=document.getElementById('profits8');
  const assetsElement=document.getElementById('assets8');
  const liabilitiesElement=document.getElementById('liabilities8');
  const amountElement=document.getElementById('amount8');


  if (!stock || stock.length !== 12) {
      companyNameElement.innerText = 'Error: Stock information not found';
      sectorElement.innerText = '';
      industryElement.innerText = '';
      openPriceElement.innerText = '';
      closePriceElement.innerText = '';

  peratioElement.innerText = '';
  pbratioElement.innerText = '';
  roeElement.innerText = '';
  profitsElement.innerText = '';
  assetsElement.innerText = '';
  liabilitiesElement.innerText = '';
  amountElement.innerText = '';
  } else {
      const sector8 = stock[0];
      const company8 = stock[1];
      const industry8 = stock[2];
      const openPrice8 = stock[3];
      const closePrice8 = stock[4];
      const peratio8=stock[5];
      const pbratio8=stock[6];
      const roe8=stock[7];
      const profits8=stock[8];
      const assets8=stock[9];
      const liabilities8=stock[10];
      const amount8=stock[11];

      companyNameElement.innerText = company8;
      sectorElement.innerText = `Sector: ${sector8}`;
      industryElement.innerText = `Industry: ${industry8}`;
      openPriceElement.innerText = `Open Price: ${openPrice8}`;
      closePriceElement.innerText = `Close Price: ${closePrice8}`;
      peratioElement.innerText = `PE Ratio: ${peratio8}`;
      pbratioElement.innerText = `PB Ratio: ${pbratio8}`;
      roeElement.innerText = `ROE: ${roe8}`;
      profitsElement.innerText = `Profits: ${profits8}`;
      assetsElement.innerText = `Assets: ${assets8}`;
      liabilitiesElement.innerText = `Liabilities: ${liabilities8}`;
      amountElement.innerText = `Dividend Amount: ${amount8}`;
         
      const stockInfoDiv = document.getElementById('stockInfo8');
       // Clear any existing content in the stockInfoDiv
  }
}





function displayError(message) {
  const stockInfoDiv = document.getElementById('stockInfo');
  stockInfoDiv.innerHTML = `<p>Error: ${message}</p>`;
}








