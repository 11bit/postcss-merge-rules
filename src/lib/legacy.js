'use strict';

import selectorParser from 'postcss-selector-parser';

const unrecognisedPseudos = [
    'nth-child',
    'nth-last-child',
    'nth-of-type',
    'nth-last-of-type',
    'last-child',
    'first-of-type',
    'last-of-type',
    'only-child',
    'only-of-type',
    'empty',
    'target',
    'enabled',
    'disabled',
    'checked',
    'not'
];

const unrecognisedOperators = [
    '^=',
    '$=',
    '*='
];

let has = (list, value) => list.some(v => ~value.indexOf(v));

let legacyMerge = rule => {
    let merge = true;
    selectorParser(selectors => {
        selectors.eachInside(selector => {
            if (
                selector.type === 'pseudo' &&
                has(unrecognisedPseudos, selector.value)
            ) {
                merge = false;
                return false;
            }
            if (
                selector.type === 'attribute' &&
                has(unrecognisedOperators, selector.operator)
            ) {
                merge = false;
                return false;
            }
            if (selector.type === 'combinator' && ~selector.value.indexOf('~')) {
                merge = false;
                return false;
            }
        });
    }).process(rule.selector);
    return merge;
};

export default (ruleA, ruleB) => {
    return legacyMerge(ruleA) && legacyMerge(ruleB);
};
