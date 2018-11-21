import * as sapper from '../__sapper__/client.js';
import { AppStore } from './store';

sapper.start({
	target: document.querySelector('#sapper'),
	store: data => {
		return new AppStore(data)
	}
});