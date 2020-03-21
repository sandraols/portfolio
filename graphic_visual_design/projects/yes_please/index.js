function resizeImages () {
    const windowWidth = $(document)[0].body.clientWidth;
    const containerWidth = windowWidth * .6;
    const marginWidth = windowWidth * .03;
    const leftImage = $('.divided-img')[0];
    const rightImage = $('.divided-img')[1];
    const imagesWidth = leftImage.width + rightImage.width;
    console.log(windowWidth);
    console.log(marginWidth);
    console.log(containerWidth);
    console.log(`imagesWidth ${imagesWidth}`);
    const differenceBetween = containerWidth - (imagesWidth + marginWidth);
    console.log(differenceBetween);
    Array.from($('.divided-img')).forEach(thing => thing.css('width', ()))
};
resizeImages();
//$(window).on('resize', function(){
//    resizeImages();
//});