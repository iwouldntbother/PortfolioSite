const db = {
  "galleryItems": [
    {
      id: "0000",
      size: "span-h-2 span-v-2",
      cover: "/imageDB/0000/cover0000.jpg",
      title: "title0",
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
                    "text": "GoogleBitch"
                  }
        },
        
      ]
    },
    {
      id: "0001",
      size: "span-h-2",
      cover: "cover.jpg",
      title: "title1",
      date: "date"
    },
    {
      id: "0002",
      size: "span-v-2",
      cover: "cover.jpg",
      title: "title2",
      date: "date"
    },
    {
      id: "0003",
      size: "",
      cover: "cover.jpg",
      title: "title3",
      date: "date"
    },
    {
      id: "0004",
      size: "",
      cover: "cover.jpg",
      title: "title4",
      date: "date"
    },
    
  ]
}

export default db;