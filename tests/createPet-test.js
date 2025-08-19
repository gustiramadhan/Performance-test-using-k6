import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';


// Konfigurasi test
export let options = {
  vus: 5,          // 1 virtual user
  duration: '10s', // waktu test
  //iterations: 1,       // hanya sekali eksekusi
};

// Fungsi generate random ID
function randomId() {
  return Math.floor(Math.random() * 1000000);
}

export default function () {
const url = 'https://petstore.swagger.io/v2/pet';

const id = randomId();
console.log(`Generated randomID: ${id}`);

const payload = {
    id: id,
    category: {
        id: 0,
        name: "string"
    },
    name: "Kucing testing",
    photoUrls: ["string"],
    tags: [
    {
        id: 0,
        name: "string"
    }
    ],
    status: "lari"
};

const headers = {
    'Content-Type': 'application/json'
};

// Kirim request POST
let res = http.post(url, JSON.stringify(payload), { headers: headers });

// Validasi response
check(res, {
    'is status 200': (r) => r.status === 200,
    'is body not empty': (r) => r.body && r.body.length > 0,
});

sleep(1);
}

// This function generates a summary report in HTML and JSON format
export function handleSummary(data) {
    return {
        'createPet-report.html': htmlReport(data),
        'summary.json': JSON.stringify(data), // JSON murni
    };
}