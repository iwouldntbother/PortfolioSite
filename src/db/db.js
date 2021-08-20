const db = {
  "galleryItems": [
    {
      id: "0000",
      tag: "university",
      size: "span-h-2 span-v-2",
      cover: "/imageDB/0000/cover0000.jpg",
      title: "title 0",
      date: "date",
      detail: [
        {
          "type": "title",
          "data": "Title Switch Test"
        },
        {
          "type": "sub",
          "data": "Sub Switch Test"
        },
        {
          "type": "image",
          "data": {
            "src": "/imageDB/0000/image0000.jpg",
            "alt": "Test Image"
          }
        },
        {
          "type": "text",
          "data": "Text Switch Test"
        },
        {
          "type": "link",
          "data": {
                    "url": "https://google.co.uk",
                    "target": "_blank",
                    "text": "Link Test"
                  }
        },
        
      ]
    },
    {
      id: "0001",
      tag: "university",
      size: "span-h-2",
      cover: "cover.jpg",
      title: "title1",
      date: "date"
    },
    {
      id: "0002",
      tag: "personal",
      size: "span-v-2",
      cover: "cover.jpg",
      title: "title2",
      date: "date"
    },
    {
      id: "0003",
      tag: "personal",
      size: "",
      cover: "cover.jpg",
      title: "title3",
      date: "date"
    },
    {
      id: "0004",
      tag: "personal",
      size: "",
      cover: "cover.jpg",
      title: "title4",
      date: "date"
    },
    
  ]
}

export default db;