// Տրված են n ամբողջ թիվը և n տարրեր պարունակող
// x և y միաչափ զանգվածները։ Կազմել բլոկ-սխեմա
//  և ծրագիր, որոնք կհաշվեն և կտպեն

// 1․

// տրված զանգվածների տարրերի միջին թվաբանականների արտադրյալը

// let x = [1, 5, 6, 8, 9, 1, 3, 4];

// let y = [6, 7, 9, 6, 2, 3, 4, 8];

// let sum1 = 0;
// let sum2 = 0;
// let mijin1 = 0;
// let mijin2 = 0;

// for (let i = 0; i < x.length; i++) {
//   sum1 += x[i];
// }

// mijin1 = sum1 / x.length;

// for (let i = 0; i < y.length; i++ ) {
//   sum2 += y[i];
// }

// mijin2 = sum2 / y.length;

// console.log(mijin1 * mijin2);

// 2

// տրված զանգվածների դրական տարրերի ընդհանւոիր քանակը


// let x =[2,1,-8,5,-9,4];

// let y =[4,5,-7,4,-8,3];

// let sum1 = 0;
// let sum2 = 0;

// for (let i = 0; i< x.length; i++){
//     if(x[i]>0){
//         sum1++
//     }  
// }
// for (let i = 0; i< y.length; i++){
//     if(y[i]>0){
//         sum2++
//     }
// }
// console.log(sum1+sum2)

// 3
//  տրված զանգվածների բացասական տարրերի քանակը

// let x = [8,-8,7,5,66,-88,-5];

// let y = [-7,55,99,-99,7,3,-6];

// let sum1 = 0;
// let sum2 = 0;

// for(let i = 0; i< x.length; i++){
//     if(x[i]<0){
//         sum1++
//     }
// }
// for(let i = 0; i<y.length; i++){
//     if(x[i]<0){
//         sum2++
//     }
// }
// console.log(sum1+sum2);

// 4
// տրված զանգվածների տարրերի միջին քառակուսայինների գումարը


// let x = [2,4,6,5,3,-3,7,-8];
// let y = [7,9,4,6,-5,-3,9,7];
// let sum1 = 0;
// let sum2 = 0;

// for (let i = 0; i < x.length; i++){
//     if(x[i] **2){

//     }sum1+=x[i];
// } 

// for (let i = 0; i < y.length; i++){
//     if(y[i]**2){

//     }sum2+=y[i];
// }
// console.log(sum1 +sum2);

// 5
// X զանգվածի տարրերի գումարի հարաբերությունը y զանգվածի տարրերի արտադրյալին
// (ենթադրվում է, որ y զանգվածը չի պարունակում զրոյին հավասար տարր)

// let x = [2,9,6,3,7,-5,-7];
// let y = [4,6,8,2,-7,-8,3];
// let sum1 = 0;
// let sum2 = 1;

// for ( let i = 0; i < x.length; i++ ){
//     sum1 += x[i]
// }
// for ( let i = 0; i < y.length; i++){
//     sum2 *= y[i]

// } 
// console.log(sum1/sum2)


// 6 
// x զանգվածի կենտ արժեք ունեցող տարրերի և y զանգվածի զույգ արժեք ունեցող տարրերի գումարների տարբերությունը

// let x = [-4,-6,33,2,8,8,5];
// let y = [8,9,22,8,-2,9,-8];
// let sum1 = 0;
// let sum2 = 0;

// for ( let i = 0; i < x.length; i++){
//     if(x[i] % 2 !== 0){
//         sum1 += x[i]
//     }
// }
// for ( let i = 0; i < y.length; i++){
//     if(y[i] % 2 === 0){
//         sum2 += y[i]
//     }
// }
// console.log(sum1-sum2);

// 7
// տրված զանգվածների 7-ին բազմապատիկ տարրերի ընդհանուր գումարը։

// let x = [2,6,3,8,7,4,7];
// let y = [9,5,8,6,3,7,4];
// let sum = 0;

// for ( let i = 0; i < x.length; i++){
//     if( x[i] % 7 === 0){
//         sum += x[i];
//     }

// }

// for ( let i = 0; i < y.length; i++){
//     if( y[i] % 7 ===0){
//         sum += y[i];
//     }

// }
// console.log(sum);

// 8

// տրված զանգվածների տրված k թվին բազմապատիկ տարրերի ընդհանուր քանակը

// let x = [5,6,9,8,7,-6,4];
// let y = [8,9,6,3,-7,9,-8];
// let k = 6;
// let count = 0;

// for ( let i = 0; i < x.length;i++){
//     if( x[i] % 5 === 0){

//     }count++
// }
// for ( let i = 0; i < y.length; i++){
//     if(y[i] % 5 ===0){

//     }count++
// }console.log(count);

// 9
// x զանգվածի զույգ ինդեքս ունեցող և y զանգվածի կենտ ինդեքս ունեցող տարրերի ընդհանուր գումարը

// let x = [2,8,6,8,9,7,4];
// let y = [8,6,4,6,9,2,3];
// let count = 0;

// for ( let i = 0; i < x.lendth; i++){
//     if(x[i] % 2 === 0){
       
//     } count++
// }
// for ( let i = 0; i < y.length; i++){
//     if( y[i] % 2 !==0){
       
//     } count++
// }console.log(count);

// 10
// տրված զանգվածների տարրերի քառակուսիների ընդհանուր գումարը

// let x = [4,8,6,7,5,2,-9];
// let y = [8,5,-9,5,6,4,3];
// let count = 0;

// for ( let i = 0; i < x.length; i++ ){
//     if(x[i] **2){

//     }count++
// }

// for ( let i = 0; i < y.length; i++){
//     if( y[i] **2){

//     }count++
// }console.log(count);
