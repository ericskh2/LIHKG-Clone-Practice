import axios from 'axios';

const TopicListRequest = axios.create({
    baseURL: "http://localhost:8080/api"
});

export const APITopicList = data => TopicListRequest.get('/topics',data);