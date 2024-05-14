/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

    // But you can create a sidebar manually
    docs: [
        "intro",
        "hashdit-extension",
        "wallet-integration",
        "tutorial",
        "hashdit-api-authorization",
        {
            type: "category",
            label: "Hashdit API",
            link: {
                type: "generated-index",
            },
            collapsed: true,
            items: [
                "hashdit-api/api-access",
                "hashdit-api/address-analysis-api",
                "hashdit-api/dapp-url-analysis",
                "hashdit-api/transaction-analysis-api",
                "hashdit-api/signature-analysis-api",
                "hashdit-api/erc20-security-api",
            ],
        },
        {
            type: "category",
            label: "Risk Level Description",
            link: {
                type: "generated-index",
            },
            collapsed: true,
            items: [
                "risk-level-description/risk-level-description-short",
                "risk-level-description/risk-level-description",
            ],
        },
        {
            type: "category",
            label: "Transaction Prevention Solution",
            link: {
                type: "doc",
                id: "transaction-prevention/introduction",
            },
            collapsed: true,
            items: [
                "transaction-prevention/timelock-strategy",
                "transaction-prevention/guardian-strategy",
                "transaction-prevention/oracle-strategy",
                "transaction-prevention/meta-signature-strategy",
            ],
        },
        "trust-score-description",
        "privacy-policy",
        {
            type: "category",
            label: "Glossary",
            link: {
                type: "generated-index",
            },
            collapsed: true,
            items: [
                "glossary/general_incident_classification",
                "glossary/project_type_classification",
            ],
        },
    ],
    /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
