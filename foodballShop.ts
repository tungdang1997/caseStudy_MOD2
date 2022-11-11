import {MensShirt, MenSize} from "./mensShirt";
import {WomenShirt, WomenSize} from "./womenShirt"
import {ChildrensShirt, ChildrensShirtSize} from "./childrensShirt";

let Chelsea = new MensShirt(1,11,'S','M', 'L','XL');

let ManchesterUnited = new MensShirt(2,22,'S','M', 'L','XL');

let VietNam = new WomenShirt(3,33,'S','M', 'L','XL');

let HoangAnhGiaLai = new WomenShirt(4,44,'S','M', 'L','XL');

let ThaiNguyen = new ChildrensShirt(5,55,'S','M', 'L','XL');

let NamDinh = new ChildrensShirt(6,66,'S','M', 'L','XL');

MenSize.addMen(Chelsea);
MenSize.addMen(ManchesterUnited);
WomenSize.addWomen(VietNam);
WomenSize.addWomen(HoangAnhGiaLai);
ChildrensShirtSize.addChildrens(ThaiNguyen);
ChildrensShirtSize.addChildrens(NamDinh);

console.log('-------Them--------');

MenSize.displayMen();
WomenSize.displayWomen();
ChildrensShirtSize.displayChildrens();


MenSize.deleteMen(1,11);
WomenSize.deleteWomen(3,33);
ChildrensShirtSize.deleteChildrens(5,55 )

console.log('------ Sau khi xoa--------');


MenSize.displayMen();
WomenSize.displayWomen();
ChildrensShirtSize.displayChildrens();



let HoChiMinh = new MensShirt(7,77,'S','M', 'L','XL');

let SaiGon = new WomenShirt(8,88,'S','M', 'L','XL');

let HaNoi = new ChildrensShirt(9,99,'S','M', 'L','XL');


MenSize.editMen(2,22,HoChiMinh);
WomenSize.editWomen(4,44,SaiGon);
ChildrensShirtSize.editChildrens(6,66,HaNoi);


console.log('------Sau khi sua------');


MenSize.displayMen();
WomenSize.displayWomen();
ChildrensShirtSize.displayChildrens();


console.log('-----Sau khi tim-----');


MenSize.findMen(7,77);
WomenSize.findWomen(8,88);
ChildrensShirtSize.findChildrens(9,99);