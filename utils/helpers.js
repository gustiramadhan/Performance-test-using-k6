import { check } from 'k6';

export function validateResponse(res, statusText) {
    check(res, {
        [`${statusText} - HTTP 200`]: (r) => r.status === 200,
        [`${statusText} - Body not empty`]: (r) => r.body && r.body.length > 0,
    });
}


