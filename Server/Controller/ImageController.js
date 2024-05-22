export const dummyResponse = (req, res)=>{
    res.send('App is running ...');
}

export const generateImage = async(req, res)=>{
    const body = req.body;
    const searchText = body.searchText;
    
    const imgRes = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTYzOTU3NzEsImV4cCI6MTcxNjQ4MjE3MX0.0pAqbC1XKJ37ZlP3EBGzEvH13k-lcUi5E_BUGBTFTvo",
          "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
          "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryf4XHPER0SQwkE3wD",
          "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site"
        },
        "referrer": "https://hotpot.ai/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `------WebKitFormBoundaryf4XHPER0SQwkE3wD\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryf4XHPER0SQwkE3wD\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryf4XHPER0SQwkE3wD\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryf4XHPER0SQwkE3wD\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryf4XHPER0SQwkE3wD\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundaryf4XHPER0SQwkE3wD\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryf4XHPER0SQwkE3wD\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryf4XHPER0SQwkE3wD\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryf4XHPER0SQwkE3wD\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-PdJe9mzzNY92zCb\r\n------WebKitFormBoundaryf4XHPER0SQwkE3wD\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-PdJe9mzzNY92zCb.png\r\n------WebKitFormBoundaryf4XHPER0SQwkE3wD--\r\n`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });

    const image = await imgRes.json();

    res.json({
        status: 'success',
        image: image,
    });
}