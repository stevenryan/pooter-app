// $(document).on('turbolinks:load', function() {
//     if ($(".single-post-card").length) {
//         // set a solid background color style
//         if (mode == 1) {
//             $(".single-post-card").each(function() {
//                 $(this).addClass("solid-color-mode");
//                 $(this).css('background-color', randomColor());
//             });
//         }
//         // set a border color style
//         else {
//             $(".single-post-card").each(function() {
//                 $(this).addClass("border-color-mode");
//                 $(this).css('border', '5px solid ' + randomColor());
//             });
//         }
//     }
//
//
//     $('#feed').on( 'mouseenter', '.single-post-list', function() {
//         $(this).css('border-color', randomColor());
//     });
//
//     $('#feed').on( 'mouseleave', '.single-post-list', function() {
//         $(this).css('border-color', 'rgba(0, 0 , 0, 0.05)');
//     });
//
// });
//
// var colorSet = randomColorSet();
// var mode = Math.floor(Math.random() * 2);
//
// // Randomly returns a color scheme
// function randomColorSet() {
//     var colorSet1 = ['#666633', '#77773c', '#888844', '#99994d', '#aaaa55'];
//     var colorSet2 = ['#4d3319', '#604020', '#734d26', '#86592d', '#996633'];
//     var colorSet3 = ['#4d2600', '#663300', '#804000', '#994d00', '#b35900'];
//     var colorSet4 = ['#4d3300', '#664400', '#805500', '#996600', '#b37700'];
//     var colorSet5 = ['#ffdf80', '#ffe699', '#ffecb3', '#fff2cc', '#fff9e6'];
//     var colorSet6 = ['#ffff66', '#ffff80', '#ffff99', '#ffffb3', '#ffffcc'];
//     var colorSet7 = ['#ffe680', '#ffeb99', '#fff0b3', '#fff5cc', '#fffae6'];
//     var randomSet = [colorSet1, colorSet2, colorSet3, colorSet4, colorSet5, colorSet6, colorSet7];
//     return randomSet[Math.floor(Math.random() * randomSet.length )];
// }
//
// // Randomly returns a color from an array of colors
// function randomColor() {
//     var color = colorSet[Math.floor(Math.random() * colorSet.length)];
//     return color;
// }
