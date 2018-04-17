export class UniqueIDGenerator {
    private chr4() {
        return Math.random().toString(16).slice(-4);
    }
    getUniqueId() {
        return this.chr4() + this.chr4() +
            '-' + this.chr4() +
            '-' + this.chr4() +
            '-' + this.chr4() +
            '-' + this.chr4() + this.chr4() + this.chr4() + '-' + Date.now();
    }
}
