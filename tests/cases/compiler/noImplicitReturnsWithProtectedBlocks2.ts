// @noImplicitReturns: true
declare function log(s: string): void;

function main1() : number {
    try {
        return 42;
    }
    catch(e) {
        log("in catch");
    }
    finally {
        log("in finally");
    }
}