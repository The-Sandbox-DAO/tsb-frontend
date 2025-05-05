const currentBalanceElement = document.getElementById("budget-left");

const WEB3_ECOSYSTEM_INTEGRATION = {
    "sandRemaining": document.getElementById("sand-left-1"),
    "percentageRemaining": document.getElementById("percent-jauge-1"),
    "fillingBar": document.getElementById("filling-bar-1"),
    "sandRemainingSmall": document.getElementById("sand-left-small-1"),
};

const SEASON_REWARDS_GAME_CREATION = {
    "sandRemaining": document.getElementById("sand-left-3"),
    "percentageRemaining": document.getElementById("percent-jauge-3"),
    "fillingBar": document.getElementById("filling-bar-3"),
    "sandRemainingSmall": document.getElementById("sand-left-small-3"),
};

const COMMUNITY_ENGAGEMENT_CHARITY = {
    "sandRemaining": document.getElementById("sand-left-7"),
    "percentageRemaining": document.getElementById("percent-jauge-7"),
    "fillingBar": document.getElementById("filling-bar-7"),
    "sandRemainingSmall": document.getElementById("sand-left-small-7"),
};

const EDUCATION_ONBOARDING_TECHNOLOGY = {
    "sandRemaining": document.getElementById("sand-left-8"),
    "percentageRemaining": document.getElementById("percent-jauge-8"),
    "fillingBar": document.getElementById("filling-bar-8"),
    "sandRemainingSmall": document.getElementById("sand-left-small-8"),
};

const OPERATIONS = {
    "sandRemaining": document.getElementById("sand-left-5"),
    "percentageRemaining": document.getElementById("percent-jauge-5"),
    "fillingBar": document.getElementById("filling-bar-5"),
    "sandRemainingSmall": document.getElementById("sand-left-small-5"),
};  

const RESERVE = {
    "sandRemaining": document.getElementById("sand-left-4"),
    "percentageRemaining": document.getElementById("percent-jauge-4"),
    "fillingBar": document.getElementById("filling-bar-4"),
    "sandRemainingSmall": document.getElementById("sand-left-small-4"),
};

function numberToStringWithCommas(x) {
    //get the number and place a comma every 3 digits
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setSandRemainingSmallElements(walletBalancesDict) {
    WEB3_ECOSYSTEM_INTEGRATION.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Web3 Ecosystem Integration"].regularBalance + walletBalancesDict["Web3 Ecosystem Integration"].reserveBalance);
    SEASON_REWARDS_GAME_CREATION.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Season Rewards & Game Creation"].regularBalance + walletBalancesDict["Season Rewards & Game Creation"].reserveBalance);
    COMMUNITY_ENGAGEMENT_CHARITY.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Community Engagement & Charity"].regularBalance + walletBalancesDict["Community Engagement & Charity"].reserveBalance);
    EDUCATION_ONBOARDING_TECHNOLOGY.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Education, Onboarding & Technology"].regularBalance + walletBalancesDict["Education, Onboarding & Technology"].reserveBalance);
    OPERATIONS.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Operations"].regularBalance + walletBalancesDict["Operations"].reserveBalance);
    RESERVE.sandRemainingSmall.innerHTML = numberToStringWithCommas(walletBalancesDict["Reserve"].regularBalance + walletBalancesDict["Reserve"].reserveBalance);
}

function setSandRemainingElements(walletBalancesDict) {
    WEB3_ECOSYSTEM_INTEGRATION.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Web3 Ecosystem Integration"].regularBalance + walletBalancesDict["Web3 Ecosystem Integration"].reserveBalance);
    SEASON_REWARDS_GAME_CREATION.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Season Rewards & Game Creation"].regularBalance + walletBalancesDict["Season Rewards & Game Creation"].reserveBalance);
    COMMUNITY_ENGAGEMENT_CHARITY.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Community Engagement & Charity"].regularBalance + walletBalancesDict["Community Engagement & Charity"].reserveBalance);
    EDUCATION_ONBOARDING_TECHNOLOGY.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Education, Onboarding & Technology"].regularBalance + walletBalancesDict["Education, Onboarding & Technology"].reserveBalance);
    OPERATIONS.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Operations"].regularBalance + walletBalancesDict["Operations"].reserveBalance);
    RESERVE.sandRemaining.innerHTML = numberToStringWithCommas(walletBalancesDict["Reserve"].regularBalance + walletBalancesDict["Reserve"].reserveBalance);
}

function setPercentageRemainingToElement(walletBalance, percentageRemainingElement, fillingBarElement) {
    const totalBalance = walletBalance.regularBalance + walletBalance.reserveBalance;
    const percentage = (totalBalance / walletBalance.annualBudget) * 100;
    setPercentageAmount(percentageRemainingElement, percentage);
    setColorOfFillinBar(fillingBarElement, percentage);
    fillingBarElement.style.width = Math.min(percentage, 100) + "%";
}

function setPercentageRemainingElements(walletBalancesDict) {
    setPercentageRemainingToElement(walletBalancesDict["Web3 Ecosystem Integration"], WEB3_ECOSYSTEM_INTEGRATION.percentageRemaining, WEB3_ECOSYSTEM_INTEGRATION.fillingBar);
    setPercentageRemainingToElement(walletBalancesDict["Season Rewards & Game Creation"], SEASON_REWARDS_GAME_CREATION.percentageRemaining, SEASON_REWARDS_GAME_CREATION.fillingBar);
    setPercentageRemainingToElement(walletBalancesDict["Community Engagement & Charity"], COMMUNITY_ENGAGEMENT_CHARITY.percentageRemaining, COMMUNITY_ENGAGEMENT_CHARITY.fillingBar);
    setPercentageRemainingToElement(walletBalancesDict["Education, Onboarding & Technology"], EDUCATION_ONBOARDING_TECHNOLOGY.percentageRemaining, EDUCATION_ONBOARDING_TECHNOLOGY.fillingBar);
    setPercentageRemainingToElement(walletBalancesDict["Operations"], OPERATIONS.percentageRemaining, OPERATIONS.fillingBar);
    setPercentageRemainingToElement(walletBalancesDict["Reserve"], RESERVE.percentageRemaining, RESERVE.fillingBar);
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
    setPercentageRemainingElements(walletBalancesDict);
    setCurrentBalanceElement(walletBalancesDict);
}

async function main(){
    try {
        const fetchedBalancesArray = [
            {
                "_id": "6810c8b5ee5bc52a633d657f",
                "name": "Web3 Ecosystem Integration",
                "regularAddress": "0x2DD312897051e4A1b5D38A4AfCA027894b977F3f",
                "reserveAddress": "0x90D09dCEBD053Bb65D56EF8dddE9810972f583Ba",
                "regularBalance": 0,
                "reserveBalance": 4183673,
                "annualBudget": 3600000,
                "__v": 0
            },
            {
                "_id": "6810c8b5ee5bc52a633d6582",
                "name": "Season Rewards & Game Creation",
                "regularAddress": "0xA8C021CaaBaCeC2065301763988d0826618CC038",
                "reserveAddress": "0x3025642a82b2938E08bFD239d246dA2d597d8f1e",
                "regularBalance": 0,
                "reserveBalance": 2565986,
                "annualBudget": 3000000,
                "__v": 0
            },
            {
                "_id": "6810c8b5ee5bc52a633d6585",
                "name": "Community Engagement & Charity",
                "regularAddress": "0x5839eD64c3f8d75E354eAa0ca0DCE5C5e582fe5c",
                "reserveAddress": "0x3EC1425375E631F4C3E6A0a10D2da94d69612e66",
                "regularBalance": 317,
                "reserveBalance": 1758033.47259012,
                "annualBudget": 600000,
                "__v": 0
            },
            {
                "_id": "6810c8b5ee5bc52a633d6588",
                "name": "Education, Onboarding & Technology",
                "regularAddress": "0xf2CD6F7f3Aa9B26ED813aFE972808785Ba881C9F",
                "reserveAddress": "0x8EB7E5120D5a0CF989C296E4f2BBCE40bac8cD9B",
                "regularBalance": 0,
                "reserveBalance": 446253.985,
                "annualBudget": 600000,
                "__v": 0
            },
            {
                "_id": "6810c8b5ee5bc52a633d658b",
                "name": "Operations",
                "regularAddress": "0xaC65abf880e4D5BF4c8864FC3b141CD4C4aa6B3b",
                "reserveAddress": "0xF7aEa344B416cB5D4F23e6310DAf4b14A81aE18A",
                "regularBalance": 112508.9407083081,
                "reserveBalance": 2807365,
                "annualBudget": 1800000,
                "__v": 0
            },
            {
                "_id": "6810c8b5ee5bc52a633d658e",
                "name": "Reserve",
                "regularAddress": "0x48e487cF2C6e48d6d6d9bE41e7b6846372a9d111",
                "reserveAddress": "0x997FB6d902cAD0b7dD736829FB7871A8f28865f5",
                "regularBalance": 0,
                "reserveBalance": 390481,
                "annualBudget": 100000,
                "__v": 0
            }
        ];
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