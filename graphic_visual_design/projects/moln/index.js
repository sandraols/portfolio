function resizeImages () {
    const windowWidth = $(document)[0].body.clientWidth;
    const containerWidth = $("#img-container").width();
    const marginWidth = windowWidth * .03;
    const leftImage = $('.divided-img')[0];
    const rightImage = $('.divided-img')[1];
    console.log(windowWidth);
    console.log(containerWidth);
    const expectedTotalWidth = containerWidth - marginWidth;
    console.log($(leftImage).width() * $(leftImage).width()/expectedTotalWidth)
    const newLeftWidth = $(leftImage)[0].width / $(leftImage)[0].width/expectedTotalWidth;
    const newRightWidth = $(rightImage)[0].width / $(rightImage)[0].width/expectedTotalWidth;
    console.log(newLeftWidth);
    $(leftImage).css('width', newLeftWidth);
    $(rightImage).css('width', newRightWidth);
};
resizeImages();
//$(window).on('resize', function(){
//    resizeImages();
//});