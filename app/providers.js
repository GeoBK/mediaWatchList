System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, lookUpListToken, lookUpList;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            exports_1("lookUpListToken", lookUpListToken = new core_1.InjectionToken('lookUpListToken'));
            exports_1("lookUpList", lookUpList = {
                mediums: ['Movies', 'Series']
            });
        }
    };
});
//# sourceMappingURL=providers.js.map