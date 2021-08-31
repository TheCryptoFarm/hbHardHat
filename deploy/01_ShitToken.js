module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const IterableMapping = await ethers.getContract("IterableMapping", deployer);
  await deploy("GIMMEREWARD", {
    from: deployer,
    log: true,
    libraries: {
      IterableMapping: IterableMapping.address,
    },
  });
};
module.exports.tags = ["GIMMEREWARD"];
