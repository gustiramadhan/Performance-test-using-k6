import { sleep } from 'k6';
import { getPetsByStatus } from '../pages/petstore-api.js';
import { validateResponse } from '../utils/helpers.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

// Konfigurasi test
// Ini akan mengatur jumlah virtual users (VU) dan durasi test
export const options = {
    vus: 5,          // virtual users
    duration: '10s', // waktu test
};
// Fungsi utama yang akan dieksekusi oleh K6
// Ini akan mengirim request ke endpoint untuk setiap status yang ditentukan
export default function () {
    const statuses = ['available', 'pending', 'sold'];

    statuses.forEach(status => {
        let res = getPetsByStatus(status);
        validateResponse(res, `Status ${status}`);
        sleep(1);
    });
}


// This function generates a summary report in HTML and JSON format
export function handleSummary(data) {
    return {
        'getPet-report.html': htmlReport(data),
        'summary.json': JSON.stringify(data), // JSON murni
    };
}
