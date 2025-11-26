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
    bookSidebar: [
        {
            type: 'doc',
            id: '01-intro',
            label: 'Introduction',
        },
        {
            type: 'category',
            label: 'SDD Foundations',
            collapsed: false,
            items: [
                '02-vague-code-problem',
                '03-why-specs-matter',
                '04-what-is-sdd',
                '05-build-first-spec',
                '06-shared-rules',
            ],
        },
        {
            type: 'category',
            label: 'Reusable Intelligence',
            collapsed: false,
            items: [
                '07-reusable-intelligence',
                '08-designing-skills',
                '09-framework-landscape',
            ],
        },
        {
            type: 'doc',
            id: '10-quiz',
            label: 'Assessment Quiz',
        },
    ],
};

module.exports = sidebars;
