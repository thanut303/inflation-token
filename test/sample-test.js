const { expect } = require("chai");

describe("InflationToken", function() {
  it("Should return the new greeting once it's changed", async function() {
    const InflationToken = await ethers.getContractFactory("InflationToken");
    const inflationtoken = await InflationToken.deploy();
    
    await inflationtoken.deployed();
    expect(await inflationtoken.name()).to.equal("Tiger");

    expect(await inflationtoken.symbol()).to.equal("TIGER");
  });
});
