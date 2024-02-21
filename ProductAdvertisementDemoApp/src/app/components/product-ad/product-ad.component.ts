import { Component, OnInit, ViewChild } from '@angular/core'; 

@Component({
  selector: 'productAd-page',
  templateUrl: './product-ad.component.html',
  styleUrls: ['./product-ad.component.css'],
})
export class ProductAdComponent implements OnInit   {


    @ViewChild('slickModal', { static: false }) slickModalRef: any; // variable to access slider element

    readonly imageSliderPath = "assets/product-ad/";
    readonly sampleImagePath = "assets/product-ad/shiva_1.jpg";
    readonly videoPath = "assets/product-ad/shiva_video.mp4";

     // config variable for slider
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true
  };

  slideImages: any = [];  // array for showing slides on slider 

  ngOnInit() { 
      // this will automatic play the slider
      this.slideImages = this.getImageFeeds();
    }
 


   /**
   * 
   * @param sliderFor Pass the value which is got by home page
   * @returns Method returns the imageFeeds as per passed parameters
   */
    private getImageFeeds() {
        let imageFeeds = new Set(); 
        imageFeeds = this.prepareImagePathObject(this.imageSliderPath, 8, 'shiva_');  
                
        return imageFeeds;
    }


     /**
   * below method will prepare the image path as per passed parameters
   * @param folderPath  Pass Folder name on which the images are stored
   * @param imagesCount Pass the total image counts
   * @param imageNamePrefix Pass Image naming convention like slide, studentName etc.
   */
  private prepareImagePathObject(folderPath: string, imagesCount: number, imageNamePrefix: string, imageExtension = '.jpg') {

    var imagesSet = new Set();
    let currentImagePath = '';
    for (let i = 1; i <= imagesCount; i++) {
      currentImagePath = this.imageSliderPath +  imageNamePrefix + i.toString() + imageExtension;
      imagesSet.add({ image: currentImagePath });
    }

    return imagesSet;
  }

}