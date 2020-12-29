import axios from 'axios';

const TopicListRequest = axios.create({
    baseURL: "http://localhost:8080/api"
});

export const APITopicList = () => TopicListRequest.get('/topics');

export const APIGetTopic = data => TopicListRequest.get('/topic/'+data); 

//Template with data input
// export const APILogin = data => TopicListRequest.get('/login',data);