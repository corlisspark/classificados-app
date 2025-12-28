import axios from 'axios';

const port = '5001';

const baseURL = `https://localhost:${port}/api/`;

const api = {
    classifieds(url = baseURL + 'classifieds/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
};

export default api;

// export default api;

/* Note: To access http://localhost:5001/api, you must start the server in backend/ */