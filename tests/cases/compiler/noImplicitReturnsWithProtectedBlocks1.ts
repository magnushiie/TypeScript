// @noImplicitReturns: true
declare function log(s: string): void;

function main1() : number {
    try {
        return 42;
    }
    finally {
        log("in finally");
    }
}