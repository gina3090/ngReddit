export const ProgHumorServiceName = 'ProgHumorService';
export const ProgHumorService = [
  '$http',
  class ProgHumorService {

    constructor($http) {
      this.$http = $http;
      this.endpoint = 'https://www.reddit.com/r/ProgrammerHumor.json';
    }

    getPosts() {
      return this.$http.get(this.endpoint);
    }
  }
];