import { sync, isArray } from "./components/sync/index.js"
import(/* webpackChunkName:"async-test"*/'../src/components/async/index.js').then(_=>{
_.default.init();
});
console.log('fdsaufhkj');
sync();
