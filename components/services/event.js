import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:4000/api/'
});

export const getEvents = () => {
    return client.get('event');
};

export const getEvent = (id) => {
    return client.get(`event/${id}`);
};
