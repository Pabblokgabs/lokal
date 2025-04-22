const { getDefaultConfig } = require("metro-config");

module.exports = async () => {
	const config = await getDefaultConfig();
	config.transformer.babelTransformerPath = require.resolve(
		"react-native-svg-transformer"
	);
	config.resolver.assetExts.push("svg");
	return config;
};
