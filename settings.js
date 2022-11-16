const collectionInfo = {
    name: "Swag Animals NFt Mint", // Name of the collection
    title: "{name}", 
    date: "16.11.2022", // Today Date
    socialMedia: {
        discord: "https://discord.gg/Fu52QJZUHY", // Discord link
        twitter: "https://discord.gg/Fu52QJZUHY", // Twitter link
    },
    medias: {
        preview: "gif.gif", // Location logo
	favicon: "logo.jpg", // Location logo page tab
    },
    background: {
        type: "image",
        image: "bj.jpg", // Location background
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 0.3,
    totalSupply: 100,
	toFixed: 0,
    minUnits: 1,
    maxUnits: 5,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 2,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);
