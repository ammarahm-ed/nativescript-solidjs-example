import { Application } from '@nativescript/core';
import { render } from '@dominative/solid';
import { App } from './app';

document.body.actionBarHidden = false;
render(App, document.body);

const create = () => document;

Application.run({ create });
