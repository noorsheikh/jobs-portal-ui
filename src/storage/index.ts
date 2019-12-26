export default class Storage {
    private storage: any;

    constructor() {
        this.storage = window.sessionStorage
    }

    addSearchKeyword(keyword: any) {
        let keywords: any = {};

        if (this.getSearchKeywords()) {
            keywords = this.getSearchKeywords();
        }

        keywords.what = ('what' in keyword) ? keyword.what : '';
        keywords.where = ('where' in keyword) ? keyword.where : '';

        this.storage.setItem('_searchKeywords', JSON.stringify(keywords));
    }

    getSearchKeywords(): any {
        return JSON.parse(this.storage.getItem('_searchKeywords'));
    }

    clearSearchKeywords(): void {
        this.storage.clear();
    }
}
