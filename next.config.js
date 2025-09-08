const nextConfig = {
    webpack(config) {
      // 기존 svg rule 제거
      const fileLoaderRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test(".svg")
      );
      fileLoaderRule.exclude = /\.svg$/;
  
      // 새 rule 추가 (svgr)
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;