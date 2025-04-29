const currentBalanceElement = document.getElementById("budget-left");

const sandInitiativesElements = {
    "sandRemaining": document.getElementById("sand-left-1"),
    "percentageRemaining": document.getElementById("percent-jauge-1"),
    "fillingBar": document.getElementById("filling-bar-1"),
    "sandRemainingSmall": document.getElementById("sand-left-small-1"),
    "viewTransactions": document.getElementById("transaction-btn-1"),
};

const liveOpsElements = {
    "sandRemaining": document.getElementById("sand-left-2"),
    "percentageRemaining": document.getElementById("percent-jauge-2"),
    "fillingBar": document.getElementById("filling-bar-2"),
    "sandRemainingSmall": document.getElementById("sand-left-small-2"),
    "viewTransactions": document.getElementById("transaction-btn-2"),
};

const gameContentElements = {
    "sandRemaining": document.getElementById("sand-left-3"),
    "percentageRemaining": document.getElementById("percent-jauge-3"),
    "fillingBar": document.getElementById("filling-bar-3"),
    "sandRemainingSmall": document.getElementById("sand-left-small-3"),
    "viewTransactions": document.getElementById("transaction-btn-3"),
};

const otherElements = {
    "sandRemaining": document.getElementById("sand-left-4"),
    "percentageRemaining": document.getElementById("percent-jauge-4"),
    "fillingBar": document.getElementById("filling-bar-4"),
    "sandRemainingSmall": document.getElementById("sand-left-small-4"),
    "viewTransactions": document.getElementById("transaction-btn-4"),
};

const operationsElements = {
    "sandRemaining": document.getElementById("sand-left-5"),
    "percentageRemaining": document.getElementById("percent-jauge-5"),
    "fillingBar": document.getElementById("filling-bar-5"),
    "sandRemainingSmall": document.getElementById("sand-left-small-5"),
    "viewTransactions": document.getElementById("transaction-btn-5"),
};

const stakingElements = {
    "sandRemaining": document.getElementById("sand-left-6"),
    "percentageRemaining": document.getElementById("percent-jauge-6"),
    "fillingBar": document.getElementById("filling-bar-6"),
    "sandRemainingSmall": document.getElementById("sand-left-small-6"),
    "viewTransactions": document.getElementById("transaction-btn-6"),
};

const sandboxForGoodElements = {
    "sandRemaining": document.getElementById("sand-left-7"),
    "percentageRemaining": document.getElementById("percent-jauge-7"),
    "fillingBar": document.getElementById("filling-bar-7"),
    "sandRemainingSmall": document.getElementById("sand-left-small-7"),
    "viewTransactions": document.getElementById("transaction-btn-7"),
};

const platformElements = {
    "sandRemaining": document.getElementById("sand-left-8"),
    "percentageRemaining": document.getElementById("percent-jauge-8"),
    "fillingBar": document.getElementById("filling-bar-8"),
    "sandRemainingSmall": document.getElementById("sand-left-small-8"),
    "viewTransactions": document.getElementById("transaction-btn-8"),
};

const nftElements = {
    "sandRemaining": document.getElementById("sand-left-9"),
    "percentageRemaining": document.getElementById("percent-jauge-9"),
    "fillingBar": document.getElementById("filling-bar-9"),
    "sandRemainingSmall": document.getElementById("sand-left-small-9"),
    "viewTransactions": document.getElementById("transaction-btn-9"),
};

async function fetchWalletBalances() {
    const url = `http://localhost:3000/daoWallet/`;
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
  
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    return json;
}

function numberToStringWithCommas(x) {
    //get the number and place a comma every 3 digits
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setSandRemainingSmallElements(walletBalancesDict) {
    sandInitiativesElements.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Web3 Ecosystem Integration"].regularBalance + walletBalancesDict["Web3 Ecosystem Integration"].reserveBalance);
    liveOpsElements.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Season Rewards & Game Creation"].regularBalance + walletBalancesDict["Season Rewards & Game Creation"].reserveBalance);
    gameContentElements.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Community Engagement & Charity"].regularBalance + walletBalancesDict["Community Engagement & Charity"].reserveBalance);
    otherElements.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Education, Onboarding & Technology"].regularBalance + walletBalancesDict["Education, Onboarding & Technology"].reserveBalance);
    operationsElements.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Operations"].regularBalance + walletBalancesDict["Operations"].reserveBalance);
    stakingElements.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Reserve"].regularBalance + walletBalancesDict["Reserve"].reserveBalance);
}

function setSandRemainingElements(walletBalancesDict) {
    sandInitiativesElements.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Web3 Ecosystem Integration"].regularBalance + walletBalancesDict["Web3 Ecosystem Integration"].reserveBalance);
    liveOpsElements.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Season Rewards & Game Creation"].regularBalance + walletBalancesDict["Season Rewards & Game Creation"].reserveBalance);
    gameContentElements.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Community Engagement & Charity"].regularBalance + walletBalancesDict["Community Engagement & Charity"].reserveBalance);
    otherElements.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Education, Onboarding & Technology"].regularBalance + walletBalancesDict["Education, Onboarding & Technology"].reserveBalance);
    operationsElements.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Operations"].regularBalance + walletBalancesDict["Operations"].reserveBalance);
    stakingElements.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Reserve"].regularBalance + walletBalancesDict["Reserve"].reserveBalance);
}

function setPercentageRemainingToElement(walletBalance, percentageRemainingElement, fillingBarElement) {
    const totalBalance = walletBalance.regularBalance + walletBalance.reserveBalance;
    const percentage = (totalBalance / walletBalance.annualBudget) * 100;
    setPercentageAmount(percentageRemainingElement, percentage);
    setColorOfFillinBar(fillingBarElement, percentage);
    fillingBarElement.style.width = Math.min(percentage, 100) + "%";
}

function setPercentageRemainingElements(walletBalancesDict) {
    setPercentageRemainingToElement(walletBalancesDict["Web3 Ecosystem Integration"], sandInitiativesElements.percentageRemaining, sandInitiativesElements.fillingBar);
    setPercentageRemainingToElement(walletBalancesDict["Season Rewards & Game Creation"], liveOpsElements.percentageRemaining, liveOpsElements.fillingBar);
    setPercentageRemainingToElement(walletBalancesDict["Community Engagement & Charity"], gameContentElements.percentageRemaining, gameContentElements.fillingBar);
    setPercentageRemainingToElement(walletBalancesDict["Education, Onboarding & Technology"], otherElements.percentageRemaining, otherElements.fillingBar);
    setPercentageRemainingToElement(walletBalancesDict["Operations"], operationsElements.percentageRemaining, operationsElements.fillingBar);
    setPercentageRemainingToElement(walletBalancesDict["Reserve"], stakingElements.percentageRemaining, stakingElements.fillingBar);
}

function setPercentageAmount(percentageRemaining, percentage) {
    percentageRemaining.innerHTML = percentage.toFixed(1).toString() + "%";
}

function setColorOfFillinBar(fillingBar, percentage) {
    if (percentage < 20) {
        fillingBar.style.backgroundColor = "#FF2545";
    } else if (percentage < 60) {
        fillingBar.style.backgroundColor = "#FFBF36";
    } else {
        fillingBar.style.backgroundColor = "#00CF74";
    }
}

function setViewTransactionsElements(walletBalancesDict) {
    sandInitiativesElements.viewTransactions.href = "https://polygonscan.com/address/" + walletBalancesDict["Web3 Ecosystem Integration"].regularAddress;
    liveOpsElements.viewTransactions.href = "https://polygonscan.com/address/" + walletBalancesDict["Season Rewards & Game Creation"].regularAddress;
    gameContentElements.viewTransactions.href = "https://polygonscan.com/address/" + walletBalancesDict["Community Engagement & Charity"].regularAddress;
    otherElements.viewTransactions.href = "https://polygonscan.com/address/" + walletBalancesDict["Education, Onboarding & Technology"].regularAddress;
    operationsElements.viewTransactions.href = "https://polygonscan.com/address/" + walletBalancesDict["Operations"].regularAddress;
    stakingElements.viewTransactions.href = "https://polygonscan.com/address/" + walletBalancesDict["Reserve"].regularAddress;
}

function setCurrentBalanceElement(walletBalancesDict) {
    let totalBalance = 0;
    for (let key in walletBalancesDict) {
        totalBalance += (walletBalancesDict[key].regularBalance + walletBalancesDict[key].reserveBalance);
    }
    console.log("Total DAO Balance:", totalBalance);
    currentBalanceElement.innerHTML = numberToStringWithCommas(totalBalance.toFixed(2));
}

function setElementsAccordingToBalances(walletBalancesDict) {
    setSandRemainingElements(walletBalancesDict);
    setSandRemainingSmallElements(walletBalancesDict);
    setViewTransactionsElements(walletBalancesDict);
    setPercentageRemainingElements(walletBalancesDict);
    setCurrentBalanceElement(walletBalancesDict);
}

async function main(){
    try {
        const fetchedBalancesArray = await fetchWalletBalances();
        console.log("Fetched Balances:", fetchedBalancesArray);

        let walletBalancesDict = {};
        for (let i=0; i < fetchedBalancesArray.length; i++) {
            walletBalancesDict[fetchedBalancesArray[i].name] = fetchedBalancesArray[i];
        }
        console.log("Processed Balances Dictionary:", walletBalancesDict);

        if (Object.keys(walletBalancesDict).length > 0) {
             setElementsAccordingToBalances(walletBalancesDict);
        } else {
             console.error("Wallet balances dictionary is empty after processing fetch results.");
        }

    } catch (error) {
        console.error("Failed to fetch or process wallet balances:", error);
        currentBalanceElement.innerHTML = "Error loading data";
    }
}

main();