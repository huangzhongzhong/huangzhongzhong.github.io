#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fse = require("fs-extra");
var yargs = require("yargs");
var argv = yargs
    .usage('Usage: $0 [-L] source target')
    .demand(2, 2)
    .boolean('d')
    .alias('d', 'dereference')
    .describe('d', 'Dereference symlinks')
    .help('h')
    .alias('h', 'help').argv;
var source = argv._[0];
var target = argv._[1];
var options = {
    dereference: argv.dereference,
    overwrite: true,
};
fse.copy(source, target, options).catch(function (error) {
    if (error) {
        // tslint:disable-next-line
        console.error(error);
    }
});
