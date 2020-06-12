import axios from 'axios'

function getJobs () {
    return axios.get('/jobs')
}

function getJob (id) {
    return axios.get(`/jobs/${id}`)
}

function getJobLocation (id) {
    return axios.get(`/jobs/${id}/location`)
}

export default {
    getJobs,
    getJob,
    getJobLocation,
}