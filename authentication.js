export function urlEncodeData(data) {
    return Object.keys(data)
        .map((key) => { return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]); })
        .join('&');
}

export async function getDeviceCode() {
    try {
      const response = await fetch(`https://${import.meta.env.VITE_AUTH0_DOMAIN}/oauth/device/code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodeData({
            client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
            scope: "openid profile email"
          })
      });
      return response.json();
    } catch (error) {
      return error;
    }
  }