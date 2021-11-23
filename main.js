const jsonContent = [
    {
        "id": "1",
        "name": "google",
        "url": "www.google.com",
        "subData": [
            {
                "id": "2",
                "name": "walla",
                "url": "www.walla.co.il"
            },
            {
                "id": "3",
                "name": "ynet",
                "url": "www.ynet.co.il",
                "subData": [
                    {
                        "id": "4",
                        "name": "mako",
                        "url": "www.mako.co.il"
                    },
                    {
                        "id": "5",
                        "name": "google",
                        "url": "www.google.com"
                    },
                    {
                        "id": "6",
                        "name": "walla",
                        "url": "www.walla.co.il"
                    }
                ]
            },
            {
                "id": "7",
                "name": "google",
                "url": "www.google.com"
            }
        ]
    },
    {
        "id": "8",
        "name": "ynet",
        "url": "www.ynet.co.il",
        "subData": [
            {
                "id": "9",
                "name": "walla",
                "url": "www.walla.co.il"
            },
            {
                "id": "10",
                "name": "google",
                "url": "www.google.com",
                "subData": [
                    {
                        "id": "11",
                        "name": "ynet",
                        "url": "www.ynet.co.il",
                        "subData": [
                            {
                                "id": "12",
                                "name": "walla",
                                "url": "www.walla.co.il"
                            },
                            {
                                "id": "13",
                                "name": "google",
                                "url": "www.google.com"
                            },
                            {
                                "id": "14",
                                "name": "mako",
                                "url": "www.mako.co.il"
                            }
                    ]
                    },
                    {
                        "id": "15",
                        "name": "google",
                        "url": "www.google.com"
                    },
                    {
                        "id": "16",
                        "name": "mako",
                        "url": "www.mako.co.il"
                    }
                ]
            },
            {
                "id": "17",
                "name": "walla",
                "url": "www.walla.co.il",
                "subData": [
                    {
                        "id": "18",
                        "name": "ynet",
                        "url": "www.ynet.co.il"
                    },
                    {
                        "id": "19",
                        "name": "google",
                        "url": "www.google.com"
                    },
                    {
                        "id": "20",
                        "name": "walla",
                        "url": "www.walla.co.il"
                    }
                ]
            },
            {
                "id": "21",
                "name": "mako",
                "url": "www.mako.co.il"
            }
        ]
    }
]

function createLayout(data) {
    let websiteData = '<ul class="data_list">';
    websiteData += '<li class="data">' + 'Id: ' + data.id + '</li>';
    websiteData += '<li class="data">' + 'Site Name: ' + data.name + '</li>';
    websiteData += '<li class="data">' +`<a class="webLink" href=${'http://' + data.url}>` + 'Site Url:' + `${data.name}` + '</a>' + '</li>';

    if (data.subData) {
        for (let i = 0; i < data.subData.length; i++) {
            websiteData += createLayout(data.subData[i]);
        };
    };
    return websiteData + '</ul>';
};

let websitesPage = '';

for (let i = 0; i < jsonContent.length; i++) {
    websitesPage += createLayout(jsonContent[i]);
};

document.querySelector('.wrapper').innerHTML = websitesPage;