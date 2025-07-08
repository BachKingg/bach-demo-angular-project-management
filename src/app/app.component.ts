import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayoutComponent } from '@components';
import { FIRE_STORE_COLLECTION, PRODUCT_CATEGORY, PRODUCT_TYPE } from '@enums';
import { ICategory, IGroupTypeByCategory, IProductFromFirebase, IType } from '@interfaces';
import { FirebaseService } from '@services';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PageLayoutComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  protected title = 'bach-demo-project-management';

  // BEVERAGE_CATEGORIES: Array<ICategory> = [
  //   {
  //     id: 'HOT_DRINK',
  //     code: 'HOT_DRINK' as PRODUCT_CATEGORY,
  //     label: 'Đồ uống nóng',
  //   },
  //   {
  //     id: 'COLD_DRINK',
  //     code: 'COLD_DRINK' as PRODUCT_CATEGORY,
  //     label: 'Đồ uống lạnh',
  //   },
  //   {
  //     id: 'HEALTHY_DRINK',
  //     code: 'HEALTHY_DRINK' as PRODUCT_CATEGORY,
  //     label: 'Đồ uống tốt cho sức khỏe',
  //   },
  //   {
  //     id: 'MILK_BASED',
  //     code: 'MILK_BASED' as PRODUCT_CATEGORY,
  //     label: 'Đồ uống từ sữa',
  //   },
  //   {
  //     id: 'ALCOHOLIC',
  //     code: 'ALCOHOLIC' as PRODUCT_CATEGORY,
  //     label: 'Đồ uống có cồn',
  //   },
  // ];

  // BEVERAGE_TYPES: Array<IType> = [
  //   {
  //     id: 'BLACK_COFFEE',
  //     category: 'HOT_DRINK' as PRODUCT_CATEGORY,
  //     code: 'BLACK_COFFEE' as PRODUCT_TYPE,
  //     label: 'Cà phê đen',
  //   },
  //   {
  //     id: 'LATTE',
  //     category: 'HOT_DRINK' as PRODUCT_CATEGORY,
  //     code: 'LATTE' as PRODUCT_TYPE,
  //     label: 'Cà phê sữa (Latte)',
  //   },
  //   {
  //     id: 'ICED_TEA',
  //     category: 'COLD_DRINK' as PRODUCT_CATEGORY,
  //     code: 'ICED_TEA' as PRODUCT_TYPE,
  //     label: 'Trà đá',
  //   },
  //   {
  //     id: 'SMOOTHIE_FRUIT',
  //     category: 'HEALTHY_DRINK' as PRODUCT_CATEGORY,
  //     code: 'SMOOTHIE_FRUIT' as PRODUCT_TYPE,
  //     label: 'Sinh tố trái cây',
  //   },
  //   {
  //     id: 'YOGURT_DRINK',
  //     category: 'HEALTHY_DRINK' as PRODUCT_CATEGORY,
  //     code: 'YOGURT_DRINK' as PRODUCT_TYPE,
  //     label: 'Sữa chua uống',
  //   },
  //   {
  //     id: 'CHOCOLATE_MILK',
  //     category: 'MILK_BASED' as PRODUCT_CATEGORY,
  //     code: 'CHOCOLATE_MILK' as PRODUCT_TYPE,
  //     label: 'Sữa socola',
  //   },
  //   {
  //     id: 'CRAFT_BEER',
  //     category: 'ALCOHOLIC' as PRODUCT_CATEGORY,
  //     code: 'CRAFT_BEER' as PRODUCT_TYPE,
  //     label: 'Bia thủ công',
  //   },
  // ];

  // GROUPED_BEVERAGE_TYPES: IGroupTypeByCategory[] = this.BEVERAGE_CATEGORIES.map(cat => ({
  //   category: cat.code,
  //   types: this.BEVERAGE_TYPES.filter(type => type.category === cat.code),
  // }));

  // MOCK_PRODUCTS: IProductFromFirebase[] = [
  //   {
  //     id: '1',
  //     name: 'Cà phê đen đá',
  //     category: PRODUCT_CATEGORY.HOT_DRINK,
  //     type: PRODUCT_TYPE.BLACK_COFFEE,
  //     price: 20000,
  //     detail: 'Cà phê đen đậm đà, không đường, đá nhiều',
  //     img: 'https://source.unsplash.com/400x300/?black-coffee',
  //     createdAt: Date.now(),
  //     updatedAt: Date.now(),
  //     deletedAt: null,
  //     select: false
  //   },
  //   {
  //     id: '2',
  //     name: 'Latte sữa nóng',
  //     category: PRODUCT_CATEGORY.HOT_DRINK,
  //     type: PRODUCT_TYPE.LATTE,
  //     price: 35000,
  //     detail: 'Cà phê pha sữa, vị béo ngậy, uống nóng',
  //     img: 'https://source.unsplash.com/400x300/?latte',
  //     createdAt: Date.now(),
  //     updatedAt: Date.now(),
  //     deletedAt: null,
  //     select: false
  //   },
  //   {
  //     id: '3',
  //     name: 'Trà đào cam sả',
  //     category: PRODUCT_CATEGORY.COLD_DRINK,
  //     type: PRODUCT_TYPE.ICED_TEA,
  //     price: 30000,
  //     detail: 'Trà đào lạnh thơm cam sả, đá mát lạnh',
  //     img: 'https://source.unsplash.com/400x300/?iced-tea',
  //     createdAt: Date.now(),
  //     updatedAt: Date.now(),
  //     deletedAt: null,
  //     select: false
  //   },
  //   {
  //     id: '4',
  //     name: 'Sinh tố xoài',
  //     category: PRODUCT_CATEGORY.HEALTHY_DRINK,
  //     type: PRODUCT_TYPE.SMOOTHIE_FRUIT,
  //     price: 40000,
  //     detail: 'Sinh tố xoài tươi, không đường, tốt cho sức khỏe',
  //     img: 'https://source.unsplash.com/400x300/?smoothie',
  //     createdAt: Date.now(),
  //     updatedAt: Date.now(),
  //     deletedAt: null,
  //     select: false
  //   },
  //   {
  //     id: '5',
  //     name: 'Sữa chua uống vị dâu',
  //     category: PRODUCT_CATEGORY.HEALTHY_DRINK,
  //     type: PRODUCT_TYPE.YOGURT_DRINK,
  //     price: 25000,
  //     detail: 'Sữa chua uống lên men tự nhiên, hương dâu nhẹ',
  //     img: 'https://source.unsplash.com/400x300/?yogurt-drink',
  //     createdAt: Date.now(),
  //     updatedAt: Date.now(),
  //     deletedAt: null,
  //     select: false
  //   },
  //   {
  //     id: '6',
  //     name: 'Sữa socola mát lạnh',
  //     category: PRODUCT_CATEGORY.MILK_BASED,
  //     type: PRODUCT_TYPE.CHOCOLATE_MILK,
  //     price: 28000,
  //     detail: 'Sữa tươi vị socola, uống lạnh cực ngon',
  //     img: 'https://source.unsplash.com/400x300/?chocolate-milk',
  //     createdAt: Date.now(),
  //     updatedAt: Date.now(),
  //     deletedAt: null,
  //     select: false
  //   },
  //   {
  //     id: '7',
  //     name: 'Bia thủ công IPA',
  //     category: PRODUCT_CATEGORY.ALCOHOLIC,
  //     type: PRODUCT_TYPE.CRAFT_BEER,
  //     price: 60000,
  //     detail: 'Bia IPA vị đắng nhẹ, hương hoa quả',
  //     img: 'https://source.unsplash.com/400x300/?craft-beer',
  //     createdAt: Date.now(),
  //     updatedAt: Date.now(),
  //     deletedAt: null,
  //     select: false
  //   }
  // ];

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
    this.firebaseService.init();

    // Uncomment the following lines to add initial data to Firestore
    // this.BEVERAGE_CATEGORIES.forEach(cat =>
    //   this.firebaseService.addNewDocument<ICategory>(FIRE_STORE_COLLECTION.CATEGORIES, cat).subscribe()
    // );

    // this.BEVERAGE_TYPES.forEach(type =>
    //   this.firebaseService.addNewDocument<IType>(FIRE_STORE_COLLECTION.PRODUCTS, type).subscribe()
    // );
    //

    // this.MOCK_PRODUCTS.forEach(product => {
    //   this.firebaseService.addNewDocument<IProductFromFirebase>(FIRE_STORE_COLLECTION.PRODUCTS, product).subscribe();
    // });

  }
}
