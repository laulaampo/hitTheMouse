import util from './util';
import config from './config';

import HallPage from '@/pages/HallPage';
window.HallPage = HallPage;

let mercy = {};

mercy.init = function (call) {
    util.log(util.format('%cVersion: {1}   lxt: {2}', config.ClientVersion, util.getLxt()), 'color:#ea681c');
};

export default mercy;
