namespace JsStore {
    export var enable_log = false,
        db_version: number = 0,
        status: IJsStoreStatus = {
            ConStatus: ConnectionStatus.NotStarted,
            LastError: ""
        } as IJsStoreStatus,
        temp_results: any[] = [];

    export var throwError = function (error) {
        throw error;
    };

    export var getObjectFirstKey = function (value) {
        for (var key in value) {
            return key;
        }
        return null;
    };

    export var log = function (msg) {
        if (enable_log) {
            console.log(msg);
        }
    };

    export var logError = function (msg) {
        if (enable_log) {
            console.error(msg);
        }
    };
}