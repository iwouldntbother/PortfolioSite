import React from 'react';
import './gallery.css';
import { db } from '../database/db.js';

class Gallery extends React.Component {
    render() { 
        return <div class="galleryContainer">
            {galleryItems.map((galleryItem, index) => (
            <div class="galleryItemHolder" style={{backgroundImage: 'url("'+galleryItem.cover+'")'}} key={index}>
                <div class="galleryItemCover"></div>
                <div class="galleryItemDetails">
                    <h1 class="galleryItemTitle">{galleryItem.title}</h1>
                    <p class="galleryItemDate">{galleryItem.date}</p>
                </div>
            </div>
            ))}
        </div>
    };
}


class GalleryItem {
    constructor(cover, title, date) {
        this.cover = cover;
        this.title = title;
        this.date = date;
    }
    
    render() {
        return <div class="galleryItemHolder" style={{backgroundImage: 'url("'+String(this.cover)+'")'}}></div>
    }
}

var galleryItems = [];
function buildGallery() {
    for(var i=0; i < db.galleryItems.length; i++) {
        var item = new GalleryItem(db.galleryItems[i].cover, db.galleryItems[i].title, db.galleryItems[i].date)
        galleryItems.push(item)
    }
}

buildGallery();


export default Gallery;