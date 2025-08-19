import http from 'k6/http';
import { BASE_URL, PET_ENDPOINT } from '../config/env.js';

export function getPetsByStatus(status) {
    const url = `${BASE_URL}${PET_ENDPOINT}?status=${status}`;
    return http.get(url);
}