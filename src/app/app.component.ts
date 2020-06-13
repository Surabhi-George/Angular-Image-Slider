import { Component,ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor( private eleRef: ElementRef ) { }

    ngOnInit(): void {
    }

    // images
    images = [
        {
            image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
            data: '1'
        },
        {
            image: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            data: '2'
        },
        {
            image: 'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687',
            data: '3'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg',
            data: '4'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
            data: '5'
        },
        {
            image: 'https://static.toiimg.com/thumb/msid-67868104,width-800,height-600,resizemode-75,imgsize-1368689,pt-32,y_pad-40/67868104.jpg',
            data: '6'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg',
            data: '7'
        }
    ]
    leftClick(){
        var last_item = this.images.slice(-1);
        this.images.splice(-1,1);
        this.images.unshift({"image": last_item[0].image, "data": last_item[0].data});
    }
    rightClick(){     
        var first_item = this.images[0];
        this.images.shift();
        this.images.push({"image":first_item.image, "data": first_item.data});   
    }
}
