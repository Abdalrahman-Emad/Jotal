/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://jotalpestcontrol.com",
  generateRobotsTxt: true,
  sitemapBaseFileName: "sitemap", // يضمن اسم الملف يكون sitemap.xml
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://jotalpestcontrol.com/sitemap.xml",
    ],
  },
};
